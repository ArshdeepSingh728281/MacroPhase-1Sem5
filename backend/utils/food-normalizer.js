const crypto = require("crypto");

function firstDefined(...values) {
  return values.find(
    (value) => value !== undefined && value !== null && value !== ""
  );
}

function asArray(value) {
  if (Array.isArray(value)) {
    return value.filter((item) => item !== null && item !== undefined);
  }

  if (value === undefined || value === null || value === "") {
    return [];
  }

  return [value];
}

function numberOrZero(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value.replace(/[^\d.+-]/g, ""));
    if (Number.isFinite(parsed)) return parsed;
  }

  if (value && typeof value === "object") {
    return numberOrZero(
      firstDefined(value.grams, value.g, value.value, value.amount, value.calories)
    );
  }

  return 0;
}

function getFoodRecords(parsed) {
  if (Array.isArray(parsed)) return parsed;

  if (parsed && typeof parsed === "object") {
    const possibleKeys = ["foods", "items", "data", "results", "records"];

    for (const key of possibleKeys) {
      if (Array.isArray(parsed[key])) return parsed[key];
    }
  }

  throw new Error(
    'Unsupported data.json structure. Use a JSON array or an object containing an array named "foods", "items", "data", "results", or "records".'
  );
}

function normalizeFood(input, index = 0) {
  const source = input && typeof input === "object" ? input : {};
  const nestedMacros = source.macronutrients || source.macros || source.nutrition || {};
  const carbohydrates = source.carbohydrates || {};
  const fat = source.fat || {};
  const protein = source.protein || {};

  const name = String(
    firstDefined(
      source.name,
      source.food_name,
      source.title,
      source.product_name,
      ""
    )
  ).trim();

  if (!name) return null;

  const rawId = firstDefined(source.food_id, source.foodId, source.id, source._id);
  const generatedId = `food_${crypto
    .createHash("sha1")
    .update(`${name.toLowerCase()}-${index}`)
    .digest("hex")
    .slice(0, 12)}`;

  const macronutrients = {
    calories: numberOrZero(
      firstDefined(
        nestedMacros.calories,
        nestedMacros.kcal,
        source.calories,
        source.calorie,
        source.energy_kcal
      )
    ),
    protein_g: numberOrZero(
      firstDefined(
        nestedMacros.protein_g,
        nestedMacros.protein,
        source.protein_g,
        source.protein,
        protein.grams,
        protein.g
      )
    ),
    carbohydrates_g: numberOrZero(
      firstDefined(
        nestedMacros.carbohydrates_g,
        nestedMacros.carbs_g,
        nestedMacros.carbohydrates,
        nestedMacros.carbs,
        source.carbohydrates_g,
        source.carbs_g,
        source.carbs,
        carbohydrates.grams,
        carbohydrates.g
      )
    ),
    fat_g: numberOrZero(
      firstDefined(
        nestedMacros.fat_g,
        nestedMacros.fat,
        source.fat_g,
        source.total_fat_g,
        fat.grams,
        fat.g
      )
    ),
    fiber_g: numberOrZero(
      firstDefined(
        nestedMacros.fiber_g,
        nestedMacros.fiber,
        source.fiber_g,
        source.fiber,
        source.dietary_fiber_g
      )
    )
  };

  const servingSize = firstDefined(
    source.serving_size,
    source.servingSize,
    source.serving,
    source.portion,
    null
  );
  const serving =
    typeof servingSize === "object" && servingSize !== null
      ? {
          ...servingSize,
          amount: firstDefined(
            servingSize.amount,
            servingSize.quantity,
            servingSize.grams,
            100
          ),
          unit: firstDefined(servingSize.unit, "g")
        }
      : {
          amount: firstDefined(servingSize, 100),
          unit: "g"
        };

  return {
    ...source,
    food_id: String(rawId || generatedId),
    name,
    category: String(firstDefined(source.category, source.food_category, "Other")),
    type: String(
      firstDefined(source.type, source.food_type, source.diet_type, "Unknown")
    ),
    taste: String(firstDefined(source.taste, source.flavor, source.flavour, "")),
    serving_size: serving,
    macronutrients,
    meal_type: asArray(
      firstDefined(source.meal_type, source.meal_types, source.mealType)
    ),
    diet_tags: asArray(
      firstDefined(source.diet_tags, source.dietTags, source.tags, source.dietary_tags)
    ),
    image_url: String(
      firstDefined(source.image_url, source.imageUrl, source.image, "")
    )
  };
}

function normalizeFoodList(parsed) {
  return getFoodRecords(parsed)
    .map((record, index) => normalizeFood(record, index))
    .filter(Boolean);
}

module.exports = {
  getFoodRecords,
  normalizeFood,
  normalizeFoodList
};
