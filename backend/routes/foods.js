const express = require("express");
const Food = require("../models/Food");

const router = express.Router();

function escapeRegex(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

router.get("/", async (req, res, next) => {
  try {
    const {
      q = "",
      type = "",
      category = "",
      meal = "",
      tag = "",
      taste = "",
      minProtein = "",
      maxCalories = "",
      sort = "name",
      page = "1",
      limit = "24"
    } = req.query;

    const filter = {};
    const search = String(q).trim();

    if (search) {
      const expression = new RegExp(escapeRegex(search), "i");
      filter.$or = [
        { name: expression },
        { category: expression },
        { type: expression },
        { diet_tags: expression }
      ];
    }

    if (type) filter.type = type;
    if (category) filter.category = category;
    if (meal) filter.meal_type = meal;
    if (tag) filter.diet_tags = tag;
    if (taste) filter.taste = taste;

    if (minProtein !== "") {
      filter["macronutrients.protein_g"] = { $gte: Number(minProtein) || 0 };
    }

    if (maxCalories !== "") {
      filter["macronutrients.calories"] = { $lte: Number(maxCalories) || 0 };
    }

    const sortOptions = {
      name: { name: 1 },
      calories: { "macronutrients.calories": 1, name: 1 },
      protein: { "macronutrients.protein_g": -1, name: 1 }
    };

    const currentPage = Math.max(1, Number.parseInt(page, 10) || 1);
    const pageSize = Math.min(5000, Math.max(1, Number.parseInt(limit, 10) || 24));

    const [items, total, types, categories, meals, tags, tastes] = await Promise.all([
      Food.find(filter)
        .sort(sortOptions[sort] || sortOptions.name)
        .skip((currentPage - 1) * pageSize)
        .limit(pageSize)
        .lean(),
      Food.countDocuments(filter),
      Food.distinct("type"),
      Food.distinct("category"),
      Food.distinct("meal_type"),
      Food.distinct("diet_tags"),
      Food.distinct("taste")
    ]);

    res.json({
      items,
      total,
      page: currentPage,
      pages: Math.max(1, Math.ceil(total / pageSize)),
      filters: { types, categories, meals, tags, tastes }
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const query = [{ food_id: req.params.id }];
    if (/^[a-f\d]{24}$/i.test(req.params.id)) query.push({ _id: req.params.id });

    const item = await Food.findOne({ $or: query }).lean();
    if (!item) return res.status(404).json({ message: "Food not found" });

    res.json({ item });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
