const express = require("express");
const authenticateRequest = require("../middleware/auth");
const Meal = require("../models/Meal");

const router = express.Router();

router.get("/", authenticateRequest, async (req, res, next) => {
  try {
    const items = await Meal.find({ userId: req.user._id })
      .sort({ createdAt: -1 })
      .lean();

    return res.json({ items });
  } catch (error) {
    return next(error);
  }
});

router.post("/", authenticateRequest, async (req, res, next) => {
  try {
    const item = await Meal.create({
      userId: req.user._id,
      name: String(req.body.name || "Saved meal").slice(0, 100),
      items: Array.isArray(req.body.items) ? req.body.items : [],
      totals: req.body.totals || {},
      notes: String(req.body.notes || "")
    });

    return res.status(201).json({ item });
  } catch (error) {
    return next(error);
  }
});

router.delete("/:id", authenticateRequest, async (req, res, next) => {
  try {
    const result = await Meal.deleteOne({
      _id: req.params.id,
      userId: req.user._id
    });

    if (!result.deletedCount) {
      return res.status(404).json({ message: "Meal not found" });
    }

    return res.json({ ok: true });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
