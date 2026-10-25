/**
 * MacroVerse - Precision Nutrition & Goal Timeline Calculator
 */

/**
 * Helper to calculate core energy metrics (BMR & TDEE)
 */
function getEnergyMetrics(user) {
  const weight = parseFloat(user.weight) || 70;
  const height = parseFloat(user.height) || 175;
  const age = parseFloat(user.age) || 25;
  const gender = (user.gender || 'male').toLowerCase();
  const activityLevel = user.activity_level || 'Moderately active';

  // 1. Calculate BMR (Mifflin-St Jeor Equation)
  let bmr = 0;
  if (gender === 'male') {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
  } else {
    bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
  }

  // 2. TDEE Activity Multiplier
  const activityMultipliers = {
    "Sedentary": 1.2,
    "Lightly active": 1.375,
    "Moderately active": 1.55,
    "Very active": 1.725,
    "Extremely active": 1.9
  };

  const multiplier = activityMultipliers[activityLevel] || 1.55;
  const tdee = bmr * multiplier;

  return { weight, height, age, gender, bmr, tdee };
}

/**
 * Calculates initial baseline goal timeline based on standard rates (+300 / -500 kcal)
 */
function calculateGoalTimeline(user) {
  const currentWeight = parseFloat(user.weight) || 70;
  const targetChange = parseFloat(user.weight_change_target) || 0;

  if (targetChange === 0) {
    return {
      targetWeightKg: currentWeight,
      bodyWeightChangeKg: 0,
      daysToGoal: 0,
      goalDirection: "maintain"
    };
  }

  const absWeightChange = Math.abs(targetChange);
  const totalCalorieNeed = absWeightChange * 7700;

  // Standard baseline rates: 500 deficit for loss, 300 surplus for gain
  const dailyCalorieDelta = targetChange < 0 ? 500 : 300;
  const daysToGoal = Math.round(totalCalorieNeed / dailyCalorieDelta);
  const goalDirection = targetChange < 0 ? "lose" : "gain";
  const targetWeight = currentWeight + targetChange;

  return {
    targetWeightKg: parseFloat(targetWeight.toFixed(1)),
    bodyWeightChangeKg: absWeightChange,
    daysToGoal: daysToGoal,
    goalDirection: goalDirection
  };
}

/**
 * Dynamic nutrition calculation bound to body weight & custom days/calories
 */
function calculateNutritionByDays(user, customDays) {
  const { weight, gender, tdee } = getEnergyMetrics(user);
  const targetChange = parseFloat(user.weight_change_target) || 0;

  // --- 1. Maintenance / Zero Target / Invalid Days ---
  if (targetChange === 0 || !customDays || customDays <= 0) {
    const calories = Math.round(tdee);

    // Maintenance Macros: Weight-Based
    const proteinGrams = Math.round(weight * 1.6);
    
    // Fat: 25% calories, minimum 0.8g/kg for maintenance
    const rawFat = (calories * 0.25) / 9;
    const fatGrams = Math.round(Math.max(rawFat, weight * 0.8));

    // Carbs: Remaining Calories
    const proteinCalories = proteinGrams * 4;
    const fatCalories = fatGrams * 9;
    const remainingCalories = calories - (proteinCalories + fatCalories);
    const carbGrams = Math.round(Math.max(0, remainingCalories / 4));

    const fiberGrams = Math.round((calories / 1000) * 14);

    return {
      calories,
      protein_g: proteinGrams,
      carbohydrates_g: carbGrams,
      fat_g: fatGrams,
      fiber_g: fiberGrams,
      dailyDelta: 0
    };
  }

  // --- 2. Dynamic Deficit/Surplus via Slider Days ---
  const absWeightChange = Math.abs(targetChange);
  const totalCalorieNeed = absWeightChange * 7700;
  const requiredDailyDelta = Math.round(totalCalorieNeed / customDays);

  let targetCalories = tdee;
  if (targetChange < 0) {
    targetCalories -= requiredDailyDelta;
  } else {
    targetCalories += requiredDailyDelta;
  }

  // Enforce Safety Floor
  const minCalories = gender === 'male' ? 1500 : 1200;
  targetCalories = Math.max(targetCalories, minCalories);
  targetCalories = Math.round(targetCalories);

  // --- 3. Body Weight-Based Protein Allocation ---
  let proteinGrams = 0;
  if (targetChange < 0) {
    proteinGrams = weight * 2.0; // Cut: Preserve lean mass
  } else {
    proteinGrams = weight * 1.8; // Bulk: Support hyper-trophy
  }
  proteinGrams = Math.round(proteinGrams);

  // --- 4. Fat Allocation (25% Calorie Default with 0.6g/kg Safety Floor) ---
  const calculatedFatFromCal = (targetCalories * 0.25) / 9;
  const minFatSafetyFloor = weight * 0.6; // Hormonal health minimum
  const fatGrams = Math.round(Math.max(calculatedFatFromCal, minFatSafetyFloor));

  // --- 5. Carbohydrates from Remaining Calories ---
  const proteinCalories = proteinGrams * 4;
  const fatCalories = fatGrams * 9;
  const remainingCalories = targetCalories - (proteinCalories + fatCalories);
  const carbGrams = Math.round(Math.max(0, remainingCalories / 4));

  // --- 6. Fiber Calculation ---
  const fiberGrams = Math.round((targetCalories / 1000) * 14);

  return {
    calories: targetCalories,
    protein_g: proteinGrams,
    carbohydrates_g: carbGrams,
    fat_g: fatGrams,
    fiber_g: fiberGrams,
    dailyDelta: requiredDailyDelta
  };
}

/**
 * Standard fixed calculation wrapper using initial goal days
 */
function calculateNutrition(user) {
  const timeline = calculateGoalTimeline(user);
  return calculateNutritionByDays(user, timeline.daysToGoal);
}