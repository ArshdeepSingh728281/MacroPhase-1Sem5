const express = require("express");
const authenticateRequest = require("../middleware/auth");

const router = express.Router();

const ALLOWED_FIELDS = new Set([
  "age",
  "gender",
  "height",
  "weight",
  "body_fat",
  "activity_level",
  "exercise_days",
  "exercise_type",
  "daily_steps",
  "primary_goal",
  "goal_magnitude",
  "target_timeline",
  "taste_preference",
  "diet_preference",
  "meals_per_day",
  "allergies",
  "weight_trend",
  "weight_change_target",
  "onboarding_completed",
  "calculated_targets",
  "goal_timeline",
  "goal_timeline_days",
  "mealPlannerParent",
  "onboarding_completed_at"
]);

router.get("/", authenticateRequest, (req, res) => {
  res.json({ profile: req.user.profile || {} });
});

router.put("/", authenticateRequest, async (req, res, next) => {
  try {
    if (!req.body || typeof req.body !== "object" || Array.isArray(req.body)) {
      return res.status(400).json({ message: "A profile object is required" });
    }

    const profile = { ...(req.user.profile || {}) };
    for (const [key, value] of Object.entries(req.body)) {
      if (ALLOWED_FIELDS.has(key) && value !== undefined) {
        profile[key] = value;
      }
    }

    if (profile.onboarding_completed === true && !profile.onboarding_completed_at) {
      profile.onboarding_completed_at = new Date().toISOString();
    }

    req.user.profile = profile;
    req.user.markModified("profile");
    await req.user.save();

    return res.json({ profile: req.user.profile });
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
