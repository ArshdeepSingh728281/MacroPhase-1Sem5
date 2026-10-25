const path = require("path");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
const Food = require("./models/Food");
const { normalizeFoodList } = require("./utils/food-normalizer");

require("dotenv").config({ path: path.join(__dirname, ".env") });

const app = express();
const port = Number(process.env.PORT) || 5000;
const foodFile = path.join(__dirname, "../data.json");

const defaultOrigins = [
  "https://macrophase-1sem5-frontend.vercel.app/"
];
const allowedOrigins = process.env.FRONTEND_ORIGIN
  ? process.env.FRONTEND_ORIGIN.split(",").map((origin) => origin.trim())
  : defaultOrigins;

// app.use(cors({
//   origin(origin, callback) {
//     // Requests without an Origin header (e.g. curl or server-to-server) are allowed.
//     if (!origin || allowedOrigins.includes(origin)) {
//       return callback(null, true);
//     }

//     return callback(new Error(`CORS blocked origin: ${origin}`));
//   }
// }));


app.use(cors({ origin: "*" }));


app.use(express.json({ limit: "2mb" }));
app.use(morgan("dev"));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "MacroVerse API" });
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/foods", require("./routes/foods"));
app.use("/api/profile", require("./routes/profile"));
app.use("/api/meals", require("./routes/meals"));
app.use("/api/planner", require("./routes/planner"));

app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(error.status || 500).json({
    message: error.message || "Server error"
  });
});

async function importFoodFileIfDatabaseIsEmpty() {
  if (!fs.existsSync(foodFile)) {
    console.log("No root data.json found; skipping automatic food import.");
    return;
  }

  const parsed = JSON.parse(fs.readFileSync(foodFile, "utf8"));
  const foods = normalizeFoodList(parsed);
  const existingCount = await Food.estimatedDocumentCount();

  if (existingCount >= foods.length) {
    console.log(
      `Food database contains ${existingCount} records; automatic import is not needed.`
    );
    return;
  }

  console.log(
    `Loading ${foods.length} records from data.json (database currently has ${existingCount}).`
  );

  if (foods.length === 0) {
    throw new Error("data.json was found, but it contains no food records with a name field.");
  }

  for (let start = 0; start < foods.length; start += 500) {
    const batch = foods.slice(start, start + 500);
    await Food.bulkWrite(
      batch.map((food) => ({
        updateOne: {
          filter: { food_id: food.food_id },
          update: { $set: food },
          upsert: true
        }
      })),
      { ordered: false }
    );
    console.log(`Loaded ${Math.min(start + batch.length, foods.length)}/${foods.length} foods`);
  }

  console.log(`Automatic food import complete: ${foods.length} records.`);
}

async function start() {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/macroverse";
    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB.");

    await importFoodFileIfDatabaseIsEmpty();
    app.listen(port, () => {
      console.log(`MacroVerse running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("MacroVerse startup failed:", error.message);
    process.exit(1);
  }
}

start();
