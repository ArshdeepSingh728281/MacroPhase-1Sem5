const fs = require("fs");
const path = require("path");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Food = require("../models/Food");
const { normalizeFoodList } = require("../utils/food-normalizer");

dotenv.config({ path: path.resolve(__dirname, "../.env") });

async function main() {
  const filePath = path.resolve(process.argv[2] || path.join(__dirname, "../../data.json"));

  if (!fs.existsSync(filePath)) {
    throw new Error(
      `Cannot find ${filePath}. Put data.json beside package.json, then run npm run import-foods.`
    );
  }

  console.log(`Reading food data from: ${filePath}`);
  const parsed = JSON.parse(fs.readFileSync(filePath, "utf8"));
  const foods = normalizeFoodList(parsed);

  if (foods.length === 0) {
    throw new Error("No valid food records were found. Each food must contain a name field.");
  }

  const mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/macroverse";
  await mongoose.connect(mongoUri);

  let completed = 0;
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

    completed += batch.length;
    console.log(`Imported/updated ${completed}/${foods.length} foods`);
  }

  console.log(`Food import complete: ${completed} records imported or updated.`);
  await mongoose.disconnect();
}

main().catch(async (error) => {
  console.error(`Food import failed: ${error.message}`);
  try {
    await mongoose.disconnect();
  } catch (_) {
    // Ignore disconnect errors while reporting the original import failure.
  }
  process.exitCode = 1;
});
