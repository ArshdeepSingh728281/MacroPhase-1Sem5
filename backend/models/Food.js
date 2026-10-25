const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    food_id: {
      type: String,
      index: true,
      unique: true,
      sparse: true
    },
    name: {
      type: String,
      required: true,
      index: true
    },
    category: String,
    type: String,
    taste: String,
    serving_size: mongoose.Schema.Types.Mixed,
    macronutrients: mongoose.Schema.Types.Mixed,
    carbohydrates: mongoose.Schema.Types.Mixed,
    fat: mongoose.Schema.Types.Mixed,
    protein: mongoose.Schema.Types.Mixed,
    meal_type: [String],
    diet_tags: [String],
    is_common_food: Boolean,
    image_url: String
  },
  { strict: false }
);

foodSchema.index({
  name: "text",
  category: "text",
  diet_tags: "text"
});

module.exports = mongoose.model("Food", foodSchema);
