const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
    },
    name: {
      type: String,
      default: "Saved meal"
    },
    items: [mongoose.Schema.Types.Mixed],
    totals: mongoose.Schema.Types.Mixed,
    date: {
      type: Date,
      default: Date.now
    },
    notes: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Meal", mealSchema);
