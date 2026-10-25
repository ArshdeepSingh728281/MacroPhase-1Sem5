const express = require("express");
const Food = require("../models/Food");
const authenticateRequest = require("../middleware/auth");

const router = express.Router();

router.post("/combinations", authenticateRequest, async (req, res, next) => {
  try {
    const targets = {
      calories: Number(req.body.calories) || 2000,
      protein_g: Number(req.body.protein) || 150,
      carbohydrates_g: Number(req.body.carbs) || 200,
      fat_g: Number(req.body.fat) || 65
    };
    const tolerance = Math.min(15, Math.max(1, Number(req.body.tolerance) || 5)) / 100;
    const foods = await Food.find({}).limit(1500).lean();

    if (foods.length === 0) {
      return res.status(503).json({
        message: "Food database is empty. Import your full data.json first."
      });
    }

    const valueFor = (food, key) => Number((food.macronutrients || {})[key]) || 0;
    const results = [];

    // Build several candidate combinations and rank them by distance from targets.
    for (let seed = 0; seed < Math.min(foods.length, 12); seed += 1) {
      const selected = [];
      const totals = {
        calories: 0,
        protein_g: 0,
        carbohydrates_g: 0,
        fat_g: 0
      };
      const used = new Set();

      for (let step = 0; step < 5; step += 1) {
        let best = null;
        let bestScore = Infinity;

        for (const food of foods) {
          if (used.has(String(food._id))) continue;

          for (const grams of [50, 100, 150, 200]) {
            const factor = grams / 100;
            const nextTotals = {
              calories: totals.calories + valueFor(food, "calories") * factor,
              protein_g: totals.protein_g + valueFor(food, "protein_g") * factor,
              carbohydrates_g: totals.carbohydrates_g + valueFor(food, "carbohydrates_g") * factor,
              fat_g: totals.fat_g + valueFor(food, "fat_g") * factor
            };
            const score = Object.keys(targets).reduce((sum, key) => {
              const difference = (nextTotals[key] - targets[key]) / Math.max(targets[key], 1);
              return sum + difference ** 2;
            }, 0);

            if (score < bestScore) {
              bestScore = score;
              best = { food, grams, nextTotals };
            }
          }
        }

        if (!best) break;

        used.add(String(best.food._id));
        selected.push({
          food_id: best.food.food_id || String(best.food._id),
          name: best.food.name,
          grams: best.grams
        });
        Object.assign(totals, best.nextTotals);
      }

      const score = Object.keys(targets).reduce((sum, key) => {
        return sum + Math.abs(totals[key] - targets[key]) / Math.max(targets[key], 1);
      }, 0);

      results.push({
        items: selected,
        totals: Object.fromEntries(
          Object.entries(totals).map(([key, value]) => [key, Math.round(value)])
        ),
        score
      });
    }

    results.sort((first, second) => first.score - second.score);
    return res.json({ items: results.slice(0, 5), targets, tolerance });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
