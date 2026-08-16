


const foodDatabase = [
  {
    "food_id": "food_000001",
    "name": "Paneer",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "salty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 265,
      "protein_g": 18.3,
      "carbohydrates_g": 6.1,
      "fat_g": 20.8,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 3.4,
      "starch_g": 2.7
    },
    "fat": {
      "saturated_g": 13,
      "unsaturated_g": 6.5
    },
    "protein": {
      "protein_g": 18.3
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Homemade_Paneer_cottage_cheese_cut_into_cubes.JPG"
  },
  {
    "food_id": "food_000002",
    "name": "Cottage Cheese",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 98,
      "protein_g": 11.1,
      "carbohydrates_g": 3.4,
      "fat_g": 4.3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 2.7,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1.7,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 11.1
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://cheesemaking.com/cdn/shop/products/cottage-cheese-recipe-dry-curd-830885.jpg?crop=center&height=1200&v=1762526158&width=1200"
  },
  {
    "food_id": "food_000003",
    "name": "Greek Yogurt",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 95,
      "protein_g": 9,
      "carbohydrates_g": 5,
      "fat_g": 4.4,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 3.3,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 2.4,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Probiotic"
    ],
    "is_common_food": true,
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIaSeXmLSW48FsTlYVNQogK7Al6CBJhWUuT9RpYWlVg&s=10"
  },
  {
    "food_id": "food_000004",
    "name": "Curd",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 61,
      "protein_g": 3.5,
      "carbohydrates_g": 4.7,
      "fat_g": 3.3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 4.7,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 2.1,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Probiotic",
      "Calcium Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Perfect_Curd_yoghurt_picture.JPG"
  },
  {
    "food_id": "food_000005",
    "name": "Milk",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "ml",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 61,
      "protein_g": 3.2,
      "carbohydrates_g": 4.8,
      "fat_g": 3.3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 4.8,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1.9,
      "unsaturated_g": 1.4
    },
    "protein": {
      "protein_g": 3.2
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Calcium Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Milk_001.JPG"
  },
  {
    "food_id": "food_000006",
    "name": "Buttermilk",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "ml",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 40,
      "protein_g": 3.3,
      "carbohydrates_g": 4.8,
      "fat_g": 0.9,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 4.8,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 0.4
    },
    "protein": {
      "protein_g": 3.3
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Low Fat",
      "Probiotic"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Buttermilk.jpg"
  },
  {
    "food_id": "food_000007",
    "name": "Cheese",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "salty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 402,
      "protein_g": 25,
      "carbohydrates_g": 1.3,
      "fat_g": 33.1,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 21.1,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Calcium Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cheese.jpg"
  },
  {
    "food_id": "food_000008",
    "name": "Mozzarella Cheese",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 27.5,
      "carbohydrates_g": 3.1,
      "fat_g": 17.1,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 1.2,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 10.9,
      "unsaturated_g": 6.2
    },
    "protein": {
      "protein_g": 27.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Calcium Rich"
    ],
    "is_common_food": true,
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYaOmqt27fckLt07a4-5m3V-cj7Vvei2S_doKYiCcyC-p8nmhYTYr5AUo&s=10"
  },
  {
    "food_id": "food_000009",
    "name": "Cheddar Cheese",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "salty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 403,
      "protein_g": 24.9,
      "carbohydrates_g": 1.3,
      "fat_g": 33.1,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 21.1,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 24.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Calcium Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/2022-05-11-Cheddar-.jpg"
  },
  {
    "food_id": "food_000010",
    "name": "Tofu",
    "category": "Soy",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 144,
      "protein_g": 17.3,
      "carbohydrates_g": 2.8,
      "fat_g": 8.7,
      "fiber_g": 2.3
    },
    "carbohydrates": {
      "sugar_g": 0.6,
      "starch_g": 0.2
    },
    "fat": {
      "saturated_g": 1.3,
      "unsaturated_g": 7.4
    },
    "protein": {
      "protein_g": 17.3
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrbYfxuhulEaRb1qIYgCt4A7F66VEE1jH7t3hZyQmuwA&s=10"
  },
  {
    "food_id": "food_000011",
    "name": "Soy Chunks",
    "category": "Soy Products",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of dry soy chunks"
    },
    "macronutrients": {
      "calories": 345,
      "protein_g": 52,
      "carbohydrates_g": 33,
      "fat_g": 0.5,
      "fiber_g": 13
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.4
    },
    "protein": {
      "protein_g": 52
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "Plant Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZOnuUiP66eSrbwqbPxPRL6yl4W36irmVA8-bDKoiPQ&s=10"
  },
  {
    "food_id": "food_000012",
    "name": "Tempeh",
    "category": "Soy Products",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 195,
      "protein_g": 19.9,
      "carbohydrates_g": 7.6,
      "fat_g": 11.4,
      "fiber_g": 3.9
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 8.9
    },
    "protein": {
      "protein_g": 19.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "Plant Protein",
      "Probiotic"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tempeh_001.jpg"
  },
  {
    "food_id": "food_000013",
    "name": "Eggs",
    "category": "Eggs",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium eggs"
    },
    "macronutrients": {
      "calories": 143,
      "protein_g": 12.6,
      "carbohydrates_g": 0.7,
      "fat_g": 9.5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.4,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 3.1,
      "unsaturated_g": 6.4
    },
    "protein": {
      "protein_g": 12.6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_eggs.jpg"
  },
  {
    "food_id": "food_000014",
    "name": "Boiled Eggs",
    "category": "Eggs",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium boiled eggs"
    },
    "macronutrients": {
      "calories": 155,
      "protein_g": 12.6,
      "carbohydrates_g": 1.1,
      "fat_g": 10.6,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.6,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 3.3,
      "unsaturated_g": 7.3
    },
    "protein": {
      "protein_g": 12.6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Boiled_egg_-_Two_pieces.jpg"
  },
  {
    "food_id": "food_000015",
    "name": "Egg Whites",
    "category": "Eggs",
    "type": "Non-Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 large egg whites"
    },
    "macronutrients": {
      "calories": 52,
      "protein_g": 10.9,
      "carbohydrates_g": 0.7,
      "fat_g": 0.2,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.7,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 10.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Fat",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bowl_of_egg_whites.jpg"
  },
  {
    "food_id": "food_000016",
    "name": "Boiled Egg Whites",
    "category": "Eggs",
    "type": "Non-Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 large boiled egg whites"
    },
    "macronutrients": {
      "calories": 52,
      "protein_g": 10.9,
      "carbohydrates_g": 0.7,
      "fat_g": 0.2,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.7,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 10.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Fat",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bowl_of_egg_whites.jpg"
  },
  {
    "food_id": "food_000017",
    "name": "Chicken Breast",
    "category": "Poultry",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of skinless chicken breast"
    },
    "macronutrients": {
      "calories": 165,
      "protein_g": 31,
      "carbohydrates_g": 0,
      "fat_g": 3.6,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 31
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb",
      "Lean Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_breast,_Mainz.jpg"
  },
  {
    "food_id": "food_000018",
    "name": "Grilled Chicken",
    "category": "Poultry",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of grilled chicken"
    },
    "macronutrients": {
      "calories": 165,
      "protein_g": 31,
      "carbohydrates_g": 0,
      "fat_g": 3.6,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 31
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb",
      "Lean Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_chicken_meat.jpg"
  },
  {
    "food_id": "food_000019",
    "name": "Chicken Tikka",
    "category": "Indian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of chicken tikka"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 27,
      "carbohydrates_g": 4,
      "fat_g": 7,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_tikka.jpg"
  },
  {
    "food_id": "food_000020",
    "name": "Chicken Curry",
    "category": "Indian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of chicken curry"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 18,
      "carbohydrates_g": 5,
      "fat_g": 10,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_curry.jpg"
  },
  {
    "food_id": "food_000021",
    "name": "Chicken Biryani",
    "category": "Indian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 9.5,
      "carbohydrates_g": 22,
      "fat_g": 6,
      "fiber_g": 1.2
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 18.5
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 4.5
    },
    "protein": {
      "protein_g": 9.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/ChickenBiryani.jpg"
  },
  {
    "food_id": "food_000022",
    "name": "Chicken Kebab",
    "category": "Poultry",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 25,
      "carbohydrates_g": 3,
      "fat_g": 8,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_Kabab%281%29.jpg"
  },
  {
    "food_id": "food_000023",
    "name": "Chicken Sandwich",
    "category": "Fast Food",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 15,
      "carbohydrates_g": 20,
      "fat_g": 8,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 5.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_sandwich.jpg"
  },
  {
    "food_id": "food_000024",
    "name": "Chicken Wrap",
    "category": "Fast Food",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 16,
      "carbohydrates_g": 21,
      "fat_g": 7,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 15.5
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_wrap_%281126876064%29.jpg"
  },
  {
    "food_id": "food_000025",
    "name": "Chicken Salad",
    "category": "Salad",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 140,
      "protein_g": 15,
      "carbohydrates_g": 5,
      "fat_g": 7,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 5.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/A_chicken_salad.jpg"
  },
  {
    "food_id": "food_000026",
    "name": "Chicken Soup",
    "category": "Soup",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "ml",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 50,
      "protein_g": 5,
      "carbohydrates_g": 3,
      "fat_g": 2,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_Soup.jpg"
  },
  {
    "food_id": "food_000027",
    "name": "Chicken Stir Fry",
    "category": "Asian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 165,
      "protein_g": 18,
      "carbohydrates_g": 7,
      "fat_g": 7,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_stir_fry.jpg"
  },
  {
    "food_id": "food_000028",
    "name": "Roasted Chicken",
    "category": "Poultry",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 27,
      "carbohydrates_g": 0,
      "fat_g": 8.5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 2.3,
      "unsaturated_g": 6.2
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roast_Chicken.jpg"
  },
  {
    "food_id": "food_000029",
    "name": "Tandoori Chicken",
    "category": "Indian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 27,
      "carbohydrates_g": 2,
      "fat_g": 7,
      "fiber_g": 0.2
    },
    "carbohydrates": {
      "sugar_g": 0.8,
      "starch_g": 0.8
    },
    "fat": {
      "saturated_g": 1.8,
      "unsaturated_g": 5.2
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tandoori_Chicken_in_india.jpg"
  },
  {
    "food_id": "food_000030",
    "name": "Chicken Seekh Kebab",
    "category": "Indian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 24,
      "carbohydrates_g": 4,
      "fat_g": 12,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_Seekh_Kabab.jpg"
  },
  {
    "food_id": "food_000031",
    "name": "Fish",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 22,
      "carbohydrates_g": 0,
      "fat_g": 3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 2.2
    },
    "protein": {
      "protein_g": 22
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb",
      "Lean Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fish.jpg"
  },
  {
    "food_id": "food_000032",
    "name": "Grilled Fish",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 25,
      "carbohydrates_g": 0,
      "fat_g": 5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 4
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_fish.jpg"
  },
  {
    "food_id": "food_000033",
    "name": "Fish Curry",
    "category": "Indian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 16,
      "carbohydrates_g": 5,
      "fat_g": 7,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fish_curry.jpg"
  },
  {
    "food_id": "food_000034",
    "name": "Fish Tikka",
    "category": "Indian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 170,
      "protein_g": 24,
      "carbohydrates_g": 3,
      "fat_g": 7,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 5.5
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fish_tikka.jpg"
  },
  {
    "food_id": "food_000035",
    "name": "Fish Fry",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "salty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 22,
      "carbohydrates_g": 8,
      "fat_g": 11,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 6.5
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 22
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fried_fish.jpg"
  },
  {
    "food_id": "food_000036",
    "name": "Baked Fish",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 140,
      "protein_g": 24,
      "carbohydrates_g": 0,
      "fat_g": 4.5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb",
      "Lean Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Baked_fish.jpg"
  },
  {
    "food_id": "food_000037",
    "name": "Fish Soup",
    "category": "Soup",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "ml",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 55,
      "protein_g": 6,
      "carbohydrates_g": 3,
      "fat_g": 2,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fish_soup.jpg"
  },
  {
    "food_id": "food_000038",
    "name": "Salmon",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "rich",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 208,
      "protein_g": 20.4,
      "carbohydrates_g": 0,
      "fat_g": 13.4,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 3.1,
      "unsaturated_g": 10.3
    },
    "protein": {
      "protein_g": 20.4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Omega-3",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Salmon.png"
  },
  {
    "food_id": "food_000039",
    "name": "Grilled Salmon",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "rich",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 206,
      "protein_g": 22,
      "carbohydrates_g": 0,
      "fat_g": 12,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 22
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Omega-3",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_Salmon.jpg"
  },
  {
    "food_id": "food_000040",
    "name": "Tuna",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 132,
      "protein_g": 28,
      "carbohydrates_g": 0,
      "fat_g": 1.3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 0.9
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Fat",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tuna.jpg"
  },
  {
    "food_id": "food_000041",
    "name": "Tuna Salad",
    "category": "Salad",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 18,
      "carbohydrates_g": 4,
      "fat_g": 7,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 5.5
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tuna_Salad.jpg"
  },
  {
    "food_id": "food_000042",
    "name": "Tuna Sandwich",
    "category": "Fast Food",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 15,
      "carbohydrates_g": 20,
      "fat_g": 8,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tuna_Sandwich.jpg"
  },
  {
    "food_id": "food_000043",
    "name": "Prawns",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 99,
      "protein_g": 24,
      "carbohydrates_g": 0.2,
      "fat_g": 0.3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Fat",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Prawns_1.jpg"
  },
  {
    "food_id": "food_000044",
    "name": "Grilled Prawns",
    "category": "Seafood",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 25,
      "carbohydrates_g": 1,
      "fat_g": 2.5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.2,
      "starch_g": 0.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Fat",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_Prawns.jpg"
  },
  {
    "food_id": "food_000045",
    "name": "Prawn Curry",
    "category": "Indian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 17,
      "carbohydrates_g": 5,
      "fat_g": 7,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bengali_style_prawn_curry.JPG"
  },
  {
    "food_id": "food_000046",
    "name": "Prawn Stir Fry",
    "category": "Asian Cuisine",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 140,
      "protein_g": 20,
      "carbohydrates_g": 5,
      "fat_g": 5,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 4.2
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Shrimp_varuval_prawn_stir_fry.JPG"
  },
  {
    "food_id": "food_000047",
    "name": "Shrimp Salad",
    "category": "Salad",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 16,
      "carbohydrates_g": 5,
      "fat_g": 3,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Prawn_salad.jpg"
  },
  {
    "food_id": "food_000048",
    "name": "Turkey Breast",
    "category": "Poultry",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked turkey breast"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 29,
      "carbohydrates_g": 0,
      "fat_g": 2,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 1.4
    },
    "protein": {
      "protein_g": 29
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Fat",
      "Low Carb",
      "Lean Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cooked_turkey_breast_-_November_2023_-_Sarah_Stierch.jpg"
  },
  {
    "food_id": "food_000049",
    "name": "Turkey Sandwich",
    "category": "Fast Food",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 16,
      "carbohydrates_g": 20,
      "fat_g": 5.5,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 4
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Turkey_Sandwich_on_Marble_Rye.jpg"
  },
  {
    "food_id": "food_000050",
    "name": "Turkey Wrap",
    "category": "Fast Food",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 200,
      "protein_g": 17,
      "carbohydrates_g": 20,
      "fat_g": 6,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 4.5
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Turkey_wrap_from_Spangles_restaurant.jpg"
  },
  {
    "food_id": "food_000051",
    "name": "Boiled Chickpeas",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 164,
      "protein_g": 8.9,
      "carbohydrates_g": 27.4,
      "fat_g": 2.6,
      "fiber_g": 7.6
    },
    "carbohydrates": {
      "sugar_g": 4.8,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 2.3
    },
    "protein": {
      "protein_g": 8.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chickpeas.jpg"
  },
  {
    "food_id": "food_000052",
    "name": "Chana Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 6,
      "carbohydrates_g": 19,
      "fat_g": 3,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chickpea_salad.jpg"
  },
  {
    "food_id": "food_000053",
    "name": "Chole",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 7,
      "carbohydrates_g": 20,
      "fat_g": 4,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 11
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.4
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chole_Bhature.jpg"
  },
  {
    "food_id": "food_000054",
    "name": "Chana Chaat",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 140,
      "protein_g": 6.5,
      "carbohydrates_g": 20,
      "fat_g": 4,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 3.5,
      "starch_g": 10.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 6.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chana_chaat.jpg"
  },
  {
    "food_id": "food_000055",
    "name": "Chana Masala",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 7,
      "carbohydrates_g": 21,
      "fat_g": 4.5,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.9
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chana_masala.jpg"
  },
  {
    "food_id": "food_000056",
    "name": "Rajma",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "earthy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked kidney beans"
    },
    "macronutrients": {
      "calories": 127,
      "protein_g": 8.7,
      "carbohydrates_g": 22.8,
      "fat_g": 0.5,
      "fiber_g": 6.4
    },
    "carbohydrates": {
      "sugar_g": 0.3,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.4
    },
    "protein": {
      "protein_g": 8.7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kidney_beans.jpg"
  },
  {
    "food_id": "food_000057",
    "name": "Rajma Masala",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 140,
      "protein_g": 7.5,
      "carbohydrates_g": 21,
      "fat_g": 4,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 13
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.4
    },
    "protein": {
      "protein_g": 7.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rajma_masala.jpg"
  },
  {
    "food_id": "food_000058",
    "name": "Rajma Rice",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 5,
      "carbohydrates_g": 24,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rajma_chawal.jpg"
  },
  {
    "food_id": "food_000059",
    "name": "Moong Dal",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked moong dal"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 7,
      "carbohydrates_g": 19,
      "fat_g": 0.4,
      "fiber_g": 7.6
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Moong_dal.jpg"
  },
  {
    "food_id": "food_000060",
    "name": "Moong Dal Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4.5,
      "carbohydrates_g": 19,
      "fat_g": 3,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khichdi.jpg"
  },
  {
    "food_id": "food_000061",
    "name": "Moong Sprouts",
    "category": "Sprouts",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 30,
      "protein_g": 3,
      "carbohydrates_g": 6,
      "fat_g": 0.2,
      "fiber_g": 1.8
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mung_bean_sprouts.jpg"
  },
  {
    "food_id": "food_000062",
    "name": "Sprouts Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 55,
      "protein_g": 3.5,
      "carbohydrates_g": 9,
      "fat_g": 1,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.9
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sprouts_salad.jpg"
  },
  {
    "food_id": "food_000063",
    "name": "Mixed Sprouts",
    "category": "Sprouts",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 50,
      "protein_g": 4,
      "carbohydrates_g": 8,
      "fat_g": 0.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.4
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mixed_sprouts.jpg"
  },
  {
    "food_id": "food_000064",
    "name": "Masoor Dal",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked masoor dal"
    },
    "macronutrients": {
      "calories": 116,
      "protein_g": 9,
      "carbohydrates_g": 20,
      "fat_g": 0.4,
      "fiber_g": 7.9
    },
    "carbohydrates": {
      "sugar_g": 1.8,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Masoor_dal.JPG"
  },
  {
    "food_id": "food_000065",
    "name": "Masoor Dal Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4.5,
      "carbohydrates_g": 20,
      "fat_g": 2.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 0.8,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.1
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Masoor_Dal_Khichdi.jpg"
  },
  {
    "food_id": "food_000066",
    "name": "Toor Dal",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked toor dal"
    },
    "macronutrients": {
      "calories": 121,
      "protein_g": 6.9,
      "carbohydrates_g": 20,
      "fat_g": 2,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 12.5
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.7
    },
    "protein": {
      "protein_g": 6.9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Toor_dal.jpg"
  },
  {
    "food_id": "food_000067",
    "name": "Dal Tadka",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 140,
      "protein_g": 6.5,
      "carbohydrates_g": 18,
      "fat_g": 5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 4.2
    },
    "protein": {
      "protein_g": 6.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dal-_tadka.JPG"
  },
  {
    "food_id": "food_000068",
    "name": "Dal Fry",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 6.5,
      "carbohydrates_g": 18,
      "fat_g": 4.5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.8
    },
    "protein": {
      "protein_g": 6.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dal_Fry.JPG"
  },
  {
    "food_id": "food_000069",
    "name": "Dal Palak",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 6.5,
      "carbohydrates_g": 15,
      "fat_g": 3.5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 8.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 6.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber",
      "Plant Protein",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dal_Palak.jpg"
  },
  {
    "food_id": "food_000070",
    "name": "Urad Dal",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "earthy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked urad dal"
    },
    "macronutrients": {
      "calories": 116,
      "protein_g": 9,
      "carbohydrates_g": 20,
      "fat_g": 0.4,
      "fiber_g": 7.9
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 12.5
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/URAD_DAL.jpg"
  },
  {
    "food_id": "food_000071",
    "name": "Black Dal",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "earthy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked black dal"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 8.9,
      "carbohydrates_g": 20,
      "fat_g": 0.5,
      "fiber_g": 7.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 12.5
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.4
    },
    "protein": {
      "protein_g": 8.9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Black_Dal.jpg"
  },
  {
    "food_id": "food_000072",
    "name": "Dal Makhani",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 7.5,
      "carbohydrates_g": 18,
      "fat_g": 9,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 11
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 7.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dal_Makhani.jpg"
  },
  {
    "food_id": "food_000073",
    "name": "Mixed Dal",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked mixed dal"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 7.5,
      "carbohydrates_g": 19,
      "fat_g": 1.5,
      "fiber_g": 5.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1.3
    },
    "protein": {
      "protein_g": 7.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mixed_dal.jpg"
  },
  {
    "food_id": "food_000074",
    "name": "Panchmel Dal",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 7.5,
      "carbohydrates_g": 19,
      "fat_g": 3.5,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 7.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Panchmel_dal.jpg"
  },
  {
    "food_id": "food_000075",
    "name": "Chana Dal",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked chana dal"
    },
    "macronutrients": {
      "calories": 164,
      "protein_g": 8.9,
      "carbohydrates_g": 27.4,
      "fat_g": 2.6,
      "fiber_g": 7.6
    },
    "carbohydrates": {
      "sugar_g": 4.8,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 2.3
    },
    "protein": {
      "protein_g": 8.9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chana_dal.jpg"
  },
  {
    "food_id": "food_000076",
    "name": "Chana Dal Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 4.5,
      "carbohydrates_g": 20,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chana_Dal_Khichdi.jpg"
  },
  {
    "food_id": "food_000077",
    "name": "Moong Chilla",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 160,
      "protein_g": 8,
      "carbohydrates_g": 22,
      "fat_g": 5,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Moong_dal_chilla.jpg"
  },
  {
    "food_id": "food_000078",
    "name": "Besan Chilla",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 185,
      "protein_g": 8,
      "carbohydrates_g": 22,
      "fat_g": 7,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "Plant Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Besan_chilla.jpg"
  },
  {
    "food_id": "food_000079",
    "name": "Paneer Chilla",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 12,
      "carbohydrates_g": 15,
      "fat_g": 11,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_chilla.jpg"
  },
  {
    "food_id": "food_000080",
    "name": "Moong Dal Dosa",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 6.5,
      "carbohydrates_g": 23,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 6.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Plant Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Moong_dal_dosa.jpg"
  },
  {
    "food_id": "food_000081",
    "name": "Masala Dosa",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 168,
      "protein_g": 4,
      "carbohydrates_g": 27,
      "fat_g": 5,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 4.2
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "South Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Masala_Dosa.jpg"
  },
  {
    "food_id": "food_000082",
    "name": "Plain Dosa",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 168,
      "protein_g": 3.9,
      "carbohydrates_g": 29,
      "fat_g": 3.7,
      "fiber_g": 1.2
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.1
    },
    "protein": {
      "protein_g": 3.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dosa.jpg"
  },
  {
    "food_id": "food_000083",
    "name": "Idli",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 medium idlis"
    },
    "macronutrients": {
      "calories": 146,
      "protein_g": 5,
      "carbohydrates_g": 30,
      "fat_g": 0.7,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 26
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.6
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Idli.jpg"
  },
  {
    "food_id": "food_000084",
    "name": "Sambar",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "ml",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 70,
      "protein_g": 3.5,
      "carbohydrates_g": 10,
      "fat_g": 2,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 5.5
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.7
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sambar.jpg"
  },
  {
    "food_id": "food_000085",
    "name": "Vegetable Sambar",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "ml",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 65,
      "protein_g": 3.2,
      "carbohydrates_g": 9.5,
      "fat_g": 1.8,
      "fiber_g": 2.8
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 3.2
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_Sambar.jpg"
  },
  {
    "food_id": "food_000086",
    "name": "Medu Vada",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium vadas"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 7.5,
      "carbohydrates_g": 30,
      "fat_g": 14,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 23
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 7.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Medu_vada.jpg"
  },
  {
    "food_id": "food_000087",
    "name": "Uttapam",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 4.5,
      "carbohydrates_g": 25,
      "fat_g": 3.5,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Uttapam.jpg"
  },
  {
    "food_id": "food_000088",
    "name": "Vegetable Uttapam",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 4.5,
      "carbohydrates_g": 24,
      "fat_g": 3.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 18.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_uttapam.jpg"
  },
  {
    "food_id": "food_000089",
    "name": "Vegetable Poha",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 3,
      "carbohydrates_g": 24,
      "fat_g": 5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_poha.jpg"
  },
  {
    "food_id": "food_000090",
    "name": "Poha",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 158,
      "protein_g": 2.6,
      "carbohydrates_g": 25,
      "fat_g": 5,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 2.6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Poha.jpg"
  },
  {
    "food_id": "food_000091",
    "name": "Kanda Poha",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 165,
      "protein_g": 3,
      "carbohydrates_g": 27,
      "fat_g": 5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 21
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kanda_poha.jpg"
  },
  {
    "food_id": "food_000092",
    "name": "Vegetable Upma",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 4,
      "carbohydrates_g": 22,
      "fat_g": 5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 17
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_Upma.JPG"
  },
  {
    "food_id": "food_000093",
    "name": "Upma",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 3.5,
      "carbohydrates_g": 23,
      "fat_g": 4.5,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.9
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Upma.jpg"
  },
  {
    "food_id": "food_000094",
    "name": "Oats Upma",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 5,
      "carbohydrates_g": 21,
      "fat_g": 4.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.8
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oats_Upma...yummy.jpg"
  },
  {
    "food_id": "food_000095",
    "name": "Oats Porridge",
    "category": "Oats",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 68,
      "protein_g": 2.4,
      "carbohydrates_g": 11.5,
      "fat_g": 1.4,
      "fiber_g": 1.7
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.1
    },
    "protein": {
      "protein_g": 2.4
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oat_porridge.jpg"
  },
  {
    "food_id": "food_000096",
    "name": "Oatmeal",
    "category": "Oats",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked oatmeal"
    },
    "macronutrients": {
      "calories": 71,
      "protein_g": 2.5,
      "carbohydrates_g": 12,
      "fat_g": 1.5,
      "fiber_g": 1.7
    },
    "carbohydrates": {
      "sugar_g": 0.3,
      "starch_g": 9.5
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oatmeal.jpg"
  },
  {
    "food_id": "food_000097",
    "name": "Overnight Oats",
    "category": "Oats",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4,
      "carbohydrates_g": 17,
      "fat_g": 4,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 11
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Protein_overnight_oats.jpg"
  },
  {
    "food_id": "food_000098",
    "name": "Masala Oats",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 4,
      "carbohydrates_g": 17,
      "fat_g": 3.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/MASALA_OATS.JPG"
  },
  {
    "food_id": "food_000099",
    "name": "Fruit Oatmeal",
    "category": "Oats",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 3,
      "carbohydrates_g": 18,
      "fat_g": 2.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Fruit Based"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Breakfast_Fruit_Oatmeal_(45842057685).jpg"
  },
  {
    "food_id": "food_000100",
    "name": "Protein Oatmeal",
    "category": "Oats",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 10,
      "carbohydrates_g": 15,
      "fat_g": 3.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 2.8
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Protein_overnight_oats.jpg"
  },
  {
    "food_id": "food_000101",
    "name": "Overnight Protein Oats",
    "category": "Oats",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 10,
      "carbohydrates_g": 15,
      "fat_g": 3.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 2.8
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Protein_overnight_oats.jpg"
  },
  {
    "food_id": "food_000102",
    "name": "Oats Chilla",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 155,
      "protein_g": 6,
      "carbohydrates_g": 21,
      "fat_g": 5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oats_chilla.jpg"
  },
  {
    "food_id": "food_000103",
    "name": "Oats Dosa",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 5,
      "carbohydrates_g": 23,
      "fat_g": 3.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 17.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oats_dosa.jpg"
  },
  {
    "food_id": "food_000104",
    "name": "Oats Idli",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 medium idlis"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 5,
      "carbohydrates_g": 23,
      "fat_g": 1.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 0.8,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "South Indian",
      "High Fiber",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oats_idli.jpg"
  },
  {
    "food_id": "food_000105",
    "name": "Oats Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 4.5,
      "carbohydrates_g": 17,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 12.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Oats_khichdi.jpg"
  },
  {
    "food_id": "food_000106",
    "name": "Quinoa Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 5,
      "carbohydrates_g": 19,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 14
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Quinoa_khichdi.jpg"
  },
  {
    "food_id": "food_000107",
    "name": "Quinoa Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4,
      "carbohydrates_g": 17,
      "fat_g": 4,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 11
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Quinoa_salad.jpg"
  },
  {
    "food_id": "food_000108",
    "name": "Quinoa Bowl",
    "category": "Healthy Meals",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 5,
      "carbohydrates_g": 18,
      "fat_g": 4.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 11.5
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.9
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Quinoa_bowl.jpg"
  },
  {
    "food_id": "food_000109",
    "name": "Cooked Quinoa",
    "category": "Grains",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked quinoa"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4.4,
      "carbohydrates_g": 21.3,
      "fat_g": 1.9,
      "fiber_g": 2.8
    },
    "carbohydrates": {
      "sugar_g": 0.9,
      "starch_g": 17
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1.7
    },
    "protein": {
      "protein_g": 4.4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cooked_quinoa.jpg"
  },
  {
    "food_id": "food_000110",
    "name": "Brown Rice",
    "category": "Rice",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked brown rice"
    },
    "macronutrients": {
      "calories": 123,
      "protein_g": 2.7,
      "carbohydrates_g": 25.6,
      "fat_g": 1,
      "fiber_g": 1.6
    },
    "carbohydrates": {
      "sugar_g": 0.2,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.8
    },
    "protein": {
      "protein_g": 2.7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Brown_rice.jpg"
  },
  {
    "food_id": "food_000111",
    "name": "White Rice",
    "category": "Rice",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked white rice"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 2.7,
      "carbohydrates_g": 28.2,
      "fat_g": 0.3,
      "fiber_g": 0.4
    },
    "carbohydrates": {
      "sugar_g": 0.1,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 2.7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cooked_white_rice.jpg"
  },
  {
    "food_id": "food_000112",
    "name": "Jeera Rice",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 2.5,
      "carbohydrates_g": 27,
      "fat_g": 3,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 0.2,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jeera_rice.jpg"
  },
  {
    "food_id": "food_000113",
    "name": "Vegetable Rice",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 140,
      "protein_g": 3,
      "carbohydrates_g": 25,
      "fat_g": 3.5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_rice.jpg"
  },
  {
    "food_id": "food_000114",
    "name": "Lemon Rice",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 175,
      "protein_g": 3,
      "carbohydrates_g": 28,
      "fat_g": 5.5,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.8
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lemon_rice.jpg"
  },
  {
    "food_id": "food_000115",
    "name": "Curd Rice",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 3.5,
      "carbohydrates_g": 18,
      "fat_g": 3.5,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 14
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "South Indian",
      "Probiotic"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Curd_rice.jpg"
  },
  {
    "food_id": "food_000116",
    "name": "Chole Rice",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 5,
      "carbohydrates_g": 24,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chole_rice.jpg"
  },
  {
    "food_id": "food_000117",
    "name": "Egg Rice",
    "category": "Rice",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 170,
      "protein_g": 7,
      "carbohydrates_g": 23,
      "fat_g": 5.5,
      "fiber_g": 0.7
    },
    "carbohydrates": {
      "sugar_g": 0.8,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 1.4,
      "unsaturated_g": 4.1
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egg_rice.jpg"
  },
  {
    "food_id": "food_000118",
    "name": "Chicken Rice",
    "category": "Rice",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 170,
      "protein_g": 10,
      "carbohydrates_g": 22,
      "fat_g": 5,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 3.8
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_rice.jpg"
  },
  {
    "food_id": "food_000119",
    "name": "Chicken Fried Rice",
    "category": "Rice",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 9,
      "carbohydrates_g": 23,
      "fat_g": 7,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 5.5
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_fried_rice.jpg"
  },
  {
    "food_id": "food_000120",
    "name": "Vegetable Fried Rice",
    "category": "Rice",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 170,
      "protein_g": 3.5,
      "carbohydrates_g": 27,
      "fat_g": 5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_fried_rice.jpg"
  },
  {
    "food_id": "food_000121",
    "name": "Egg Fried Rice",
    "category": "Rice",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 6.5,
      "carbohydrates_g": 24,
      "fat_g": 6,
      "fiber_g": 0.8
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 1.3,
      "unsaturated_g": 4.7
    },
    "protein": {
      "protein_g": 6.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egg_fried_rice.jpg"
  },
  {
    "food_id": "food_000122",
    "name": "Brown Rice Bowl",
    "category": "Healthy Meals",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 4,
      "carbohydrates_g": 22,
      "fat_g": 4,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Brown_rice_bowl.jpg"
  },
  {
    "food_id": "food_000123",
    "name": "Rice and Dal",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 4.5,
      "carbohydrates_g": 23,
      "fat_g": 2,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.7
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Plant Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/RICE_AND_DAL%2C_SALAD%2C_BITTERGOURD%2C_CURD.JPG"
  },
  {
    "food_id": "food_000124",
    "name": "Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4,
      "carbohydrates_g": 20,
      "fat_g": 3,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 0.8,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "Comfort Food"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khichdi.jpg"
  },
  {
    "food_id": "food_000125",
    "name": "Moong Dal Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4.5,
      "carbohydrates_g": 19,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 0.8,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "Plant Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khichdi.jpg"
  },
  {
    "food_id": "food_000126",
    "name": "Vegetable Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 4,
      "carbohydrates_g": 18,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 14
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_Khichdi_1.jpg"
  },
  {
    "food_id": "food_000127",
    "name": "Dal Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 4.5,
      "carbohydrates_g": 20,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 0.8,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "Plant Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Khichadi_dish.jpg"
  },
  {
    "food_id": "food_000128",
    "name": "Palak Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4.5,
      "carbohydrates_g": 19,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 14.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Palak_khichdi.jpg"
  },
  {
    "food_id": "food_000129",
    "name": "Dalia Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 4,
      "carbohydrates_g": 18,
      "fat_g": 2.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 13.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.1
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Daliya_khichdi.jpg"
  },
  {
    "food_id": "food_000130",
    "name": "Dalia",
    "category": "Grains",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving of cooked broken wheat"
    },
    "macronutrients": {
      "calories": 83,
      "protein_g": 3.1,
      "carbohydrates_g": 18,
      "fat_g": 0.2,
      "fiber_g": 2.6
    },
    "carbohydrates": {
      "sugar_g": 0.4,
      "starch_g": 15
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 3.1
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/India_Dalia.JPG"
  },
  {
    "food_id": "food_000131",
    "name": "Vegetable Dalia",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 3.5,
      "carbohydrates_g": 17,
      "fat_g": 2.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 13.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.1
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Zucchini-corn-dalia-recipe.jpg"
  },
  {
    "food_id": "food_000132",
    "name": "Dalia Porridge",
    "category": "Porridge",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 90,
      "protein_g": 3,
      "carbohydrates_g": 17,
      "fat_g": 1.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 13
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Morning_breakfast.jpg"
  },
  {
    "food_id": "food_000133",
    "name": "Broken Wheat Upma",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 3.5,
      "carbohydrates_g": 20,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 15.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dhalia_Upma.jpg"
  },
  {
    "food_id": "food_000134",
    "name": "Millet Khichdi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4,
      "carbohydrates_g": 19,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 14.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kodo_millet_khichdi.jpg"
  },
  {
    "food_id": "food_000135",
    "name": "Ragi Dosa",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 4,
      "carbohydrates_g": 25,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 0.8,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ragi_Dosa.jpg"
  },
  {
    "food_id": "food_000136",
    "name": "Ragi Idli",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 medium idlis"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4.5,
      "carbohydrates_g": 22,
      "fat_g": 1.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 0.7,
      "starch_g": 17
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ragi_idli.JPG"
  },
  {
    "food_id": "food_000137",
    "name": "Ragi Porridge",
    "category": "Porridge",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 90,
      "protein_g": 3,
      "carbohydrates_g": 16,
      "fat_g": 1.5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ragi_Porridge.jpg"
  },
  {
    "food_id": "food_000138",
    "name": "Ragi Chilla",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 155,
      "protein_g": 4.5,
      "carbohydrates_g": 25,
      "fat_g": 4,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 18.5
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.4
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ragi_chilla.jpg"
  },
  {
    "food_id": "food_000139",
    "name": "Ragi Roti",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium rotis"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 5.5,
      "carbohydrates_g": 38,
      "fat_g": 4,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 30
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.3
    },
    "protein": {
      "protein_g": 5.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Ragi_roti.jpg"
  },
  {
    "food_id": "food_000140",
    "name": "Roti",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 medium rotis"
    },
    "macronutrients": {
      "calories": 297,
      "protein_g": 10,
      "carbohydrates_g": 55,
      "fat_g": 4.5,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 42
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.8
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roti.jpg"
  },
  {
    "food_id": "food_000141",
    "name": "Chapati",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 medium chapatis"
    },
    "macronutrients": {
      "calories": 297,
      "protein_g": 10,
      "carbohydrates_g": 55,
      "fat_g": 4.5,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 42
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.8
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chapati.jpg"
  },
  {
    "food_id": "food_000142",
    "name": "Whole Wheat Roti",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 medium rotis"
    },
    "macronutrients": {
      "calories": 297,
      "protein_g": 10,
      "carbohydrates_g": 55,
      "fat_g": 4.5,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 42
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.8
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Whole_wheat_roti.jpg"
  },
  {
    "food_id": "food_000143",
    "name": "Phulka",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 medium phulkas"
    },
    "macronutrients": {
      "calories": 285,
      "protein_g": 9.5,
      "carbohydrates_g": 56,
      "fat_g": 3,
      "fiber_g": 7.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 9.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Whole Grain",
      "High Fiber",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Phulka.jpg"
  },
  {
    "food_id": "food_000144",
    "name": "Multigrain Roti",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 medium rotis"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 11,
      "carbohydrates_g": 50,
      "fat_g": 6,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 37
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 5.2
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Whole Grain",
      "High Fiber",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Multigrain_roti.jpg"
  },
  {
    "food_id": "food_000145",
    "name": "Bajra Roti",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "earthy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium rotis"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 9,
      "carbohydrates_g": 58,
      "fat_g": 5,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 44
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 4.2
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Gluten Free",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bajra_roti.jpg"
  },
  {
    "food_id": "food_000146",
    "name": "Jowar Roti",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "earthy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium rotis"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 10,
      "carbohydrates_g": 68,
      "fat_g": 3,
      "fiber_g": 6.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 53
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Gluten Free",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jowar_roti.jpg"
  },
  {
    "food_id": "food_000147",
    "name": "Makki Roti",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "earthy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium rotis"
    },
    "macronutrients": {
      "calories": 265,
      "protein_g": 6.5,
      "carbohydrates_g": 44,
      "fat_g": 7,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 34
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 6.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Gluten Free",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Makki_di_roti.jpg"
  },
  {
    "food_id": "food_000148",
    "name": "Missi Roti",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium rotis"
    },
    "macronutrients": {
      "calories": 290,
      "protein_g": 10,
      "carbohydrates_g": 45,
      "fat_g": 8,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 34
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Missi_roti.jpg"
  },
  {
    "food_id": "food_000149",
    "name": "Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium parathas"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 7,
      "carbohydrates_g": 40,
      "fat_g": 12,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paratha.jpg"
  },
  {
    "food_id": "food_000150",
    "name": "Plain Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium parathas"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 7.5,
      "carbohydrates_g": 42,
      "fat_g": 13,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 33
    },
    "fat": {
      "saturated_g": 2.2,
      "unsaturated_g": 10.8
    },
    "protein": {
      "protein_g": 7.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Plain_paratha.jpg"
  },
  {
    "food_id": "food_000151",
    "name": "Aloo Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 1 medium stuffed paratha"
    },
    "macronutrients": {
      "calories": 260,
      "protein_g": 6,
      "carbohydrates_g": 38,
      "fat_g": 9,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 29
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_paratha.jpg"
  },
  {
    "food_id": "food_000152",
    "name": "Paneer Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 1 medium stuffed paratha"
    },
    "macronutrients": {
      "calories": 290,
      "protein_g": 11,
      "carbohydrates_g": 32,
      "fat_g": 13,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_paratha.jpg"
  },
  {
    "food_id": "food_000153",
    "name": "Gobi Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 1 medium stuffed paratha"
    },
    "macronutrients": {
      "calories": 250,
      "protein_g": 6,
      "carbohydrates_g": 38,
      "fat_g": 8,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gobi_paratha.jpg"
  },
  {
    "food_id": "food_000154",
    "name": "Methi Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "herbal",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium parathas"
    },
    "macronutrients": {
      "calories": 270,
      "protein_g": 8,
      "carbohydrates_g": 42,
      "fat_g": 8,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 32
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Methi_paratha.jpg"
  },
  {
    "food_id": "food_000155",
    "name": "Mooli Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 1 medium stuffed paratha"
    },
    "macronutrients": {
      "calories": 250,
      "protein_g": 6,
      "carbohydrates_g": 39,
      "fat_g": 8,
      "fiber_g": 4.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 29
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mooli_paratha.jpg"
  },
  {
    "food_id": "food_000156",
    "name": "Lachha Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium parathas"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 7,
      "carbohydrates_g": 43,
      "fat_g": 14,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 34
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 11.5
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lachha_paratha.jpg"
  },
  {
    "food_id": "food_000157",
    "name": "Stuffed Paratha",
    "category": "Indian Bread",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 1 medium stuffed paratha"
    },
    "macronutrients": {
      "calories": 275,
      "protein_g": 7,
      "carbohydrates_g": 39,
      "fat_g": 10,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 30
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Stuffed_paratha.jpg"
  },
  {
    "food_id": "food_000158",
    "name": "Chicken Paratha",
    "category": "Indian Bread",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 1 medium stuffed paratha"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 13,
      "carbohydrates_g": 32,
      "fat_g": 11,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_paratha.jpg"
  },
  {
    "food_id": "food_000159",
    "name": "Egg Paratha",
    "category": "Indian Bread",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 1 medium egg paratha"
    },
    "macronutrients": {
      "calories": 285,
      "protein_g": 10,
      "carbohydrates_g": 35,
      "fat_g": 12,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egg_paratha.jpg"
  },
  {
    "food_id": "food_000160",
    "name": "Whole Wheat Bread",
    "category": "Bread",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 slices"
    },
    "macronutrients": {
      "calories": 247,
      "protein_g": 13,
      "carbohydrates_g": 41,
      "fat_g": 4.2,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 32
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Whole Grain",
      "High Fiber",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Whole_wheat_bread.jpg"
  },
  {
    "food_id": "food_000161",
    "name": "Multigrain Bread",
    "category": "Bread",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 slices"
    },
    "macronutrients": {
      "calories": 265,
      "protein_g": 12,
      "carbohydrates_g": 43,
      "fat_g": 5,
      "fiber_g": 6.5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 34
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 4.2
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Whole Grain",
      "High Fiber",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Multigrain_bread.jpg"
  },
  {
    "food_id": "food_000162",
    "name": "Brown Bread",
    "category": "Bread",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 slices"
    },
    "macronutrients": {
      "calories": 250,
      "protein_g": 9,
      "carbohydrates_g": 44,
      "fat_g": 4,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 34
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.3
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Brown_bread.jpg"
  },
  {
    "food_id": "food_000163",
    "name": "White Bread",
    "category": "Bread",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 slices"
    },
    "macronutrients": {
      "calories": 266,
      "protein_g": 8.9,
      "carbohydrates_g": 49,
      "fat_g": 3.2,
      "fiber_g": 2.7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 38
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 8.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/White_bread.jpg"
  },
  {
    "food_id": "food_000164",
    "name": "Sourdough Bread",
    "category": "Bread",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 slices"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 8.5,
      "carbohydrates_g": 46,
      "fat_g": 1.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 37
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 8.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Fermented"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sourdough_bread.jpg"
  },
  {
    "food_id": "food_000165",
    "name": "Rye Bread",
    "category": "Bread",
    "type": "Vegetarian",
    "taste": "earthy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 slices"
    },
    "macronutrients": {
      "calories": 259,
      "protein_g": 8.5,
      "carbohydrates_g": 48,
      "fat_g": 3.3,
      "fiber_g": 5.8
    },
    "carbohydrates": {
      "sugar_g": 3.5,
      "starch_g": 37
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.8
    },
    "protein": {
      "protein_g": 8.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Rye_bread.jpg"
  },
  {
    "food_id": "food_000166",
    "name": "Pita Bread",
    "category": "Bread",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium pita breads"
    },
    "macronutrients": {
      "calories": 275,
      "protein_g": 9,
      "carbohydrates_g": 55,
      "fat_g": 1.2,
      "fiber_g": 2.2
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 45
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pita_bread.jpg"
  },
  {
    "food_id": "food_000167",
    "name": "Whole Wheat Pita",
    "category": "Bread",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium pita breads"
    },
    "macronutrients": {
      "calories": 250,
      "protein_g": 9.5,
      "carbohydrates_g": 50,
      "fat_g": 2,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 38
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.7
    },
    "protein": {
      "protein_g": 9.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Whole_wheat_pita.jpg"
  },
  {
    "food_id": "food_000168",
    "name": "Chapati Roll",
    "category": "Indian Wrap",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard roll"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 6,
      "carbohydrates_g": 30,
      "fat_g": 7,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chapati_roll.jpg"
  },
  {
    "food_id": "food_000169",
    "name": "Paneer Roll",
    "category": "Indian Wrap",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard roll"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 10,
      "carbohydrates_g": 25,
      "fat_g": 10,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 5.5
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_roll.jpg"
  },
  {
    "food_id": "food_000170",
    "name": "Egg Roll",
    "category": "Indian Wrap",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard roll"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 9,
      "carbohydrates_g": 25,
      "fat_g": 9,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egg_roll.jpg"
  },
  {
    "food_id": "food_000171",
    "name": "Chicken Roll",
    "category": "Indian Wrap",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard roll"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 13,
      "carbohydrates_g": 25,
      "fat_g": 9,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 1.8,
      "unsaturated_g": 7.2
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_roll.jpg"
  },
  {
    "food_id": "food_000172",
    "name": "Vegetable Wrap",
    "category": "Wrap",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard wrap"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 5,
      "carbohydrates_g": 28,
      "fat_g": 6,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 5.2
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_wrap.jpg"
  },
  {
    "food_id": "food_000173",
    "name": "Paneer Wrap",
    "category": "Wrap",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard wrap"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 10,
      "carbohydrates_g": 25,
      "fat_g": 9,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_wrap.jpg"
  },
  {
    "food_id": "food_000174",
    "name": "Egg Wrap",
    "category": "Wrap",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard wrap"
    },
    "macronutrients": {
      "calories": 205,
      "protein_g": 9,
      "carbohydrates_g": 25,
      "fat_g": 7,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 1.7,
      "unsaturated_g": 5.3
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egg_wrap.jpg"
  },
  {
    "food_id": "food_000175",
    "name": "Whole Wheat Sandwich",
    "category": "Sandwich",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 8,
      "carbohydrates_g": 30,
      "fat_g": 7,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Whole Grain",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Whole_wheat_sandwich.jpg"
  },
  {
    "food_id": "food_000176",
    "name": "Egg Sandwich",
    "category": "Sandwich",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 11,
      "carbohydrates_g": 25,
      "fat_g": 8,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Egg_sandwich.jpg"
  },
  {
    "food_id": "food_000177",
    "name": "Paneer Sandwich",
    "category": "Sandwich",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 11,
      "carbohydrates_g": 27,
      "fat_g": 10,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 5.5
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_sandwich.jpg"
  },
  {
    "food_id": "food_000178",
    "name": "Grilled Cheese Sandwich",
    "category": "Sandwich",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 12,
      "carbohydrates_g": 30,
      "fat_g": 17,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 23
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Grilled_cheese_sandwich.jpg"
  },
  {
    "food_id": "food_000179",
    "name": "Vegetable Sandwich",
    "category": "Sandwich",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 5,
      "carbohydrates_g": 30,
      "fat_g": 5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_sandwich.jpg"
  },
  {
    "food_id": "food_000180",
    "name": "Peanut Butter Sandwich",
    "category": "Sandwich",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 11,
      "carbohydrates_g": 34,
      "fat_g": 14,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peanut_butter_sandwich.jpg"
  },
  {
    "food_id": "food_000181",
    "name": "Chicken Club Sandwich",
    "category": "Sandwich",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 15,
      "carbohydrates_g": 24,
      "fat_g": 9,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 6.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Club_sandwich.jpg"
  },
  {
    "food_id": "food_000182",
    "name": "Turkey Sandwich",
    "category": "Sandwich",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 14,
      "carbohydrates_g": 25,
      "fat_g": 4.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 3.3
    },
    "protein": {
      "protein_g": 14
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Turkey_sandwich.jpg"
  },
  {
    "food_id": "food_000183",
    "name": "Boiled Potatoes",
    "category": "Vegetables",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 87,
      "protein_g": 1.9,
      "carbohydrates_g": 20.1,
      "fat_g": 0.1,
      "fiber_g": 1.8
    },
    "carbohydrates": {
      "sugar_g": 0.9,
      "starch_g": 17
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 1.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Boiled_potatoes.jpg"
  },
  {
    "food_id": "food_000184",
    "name": "Baked Potato",
    "category": "Vegetables",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 93,
      "protein_g": 2.5,
      "carbohydrates_g": 21,
      "fat_g": 0.1,
      "fiber_g": 2.2
    },
    "carbohydrates": {
      "sugar_g": 1.2,
      "starch_g": 17.5
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Baked_potato.jpg"
  },
  {
    "food_id": "food_000185",
    "name": "Roasted Potatoes",
    "category": "Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 2.5,
      "carbohydrates_g": 25,
      "fat_g": 5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1.2,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roasted_potatoes.jpg"
  },
  {
    "food_id": "food_000186",
    "name": "Air Fried Potatoes",
    "category": "Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 2.5,
      "carbohydrates_g": 24,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 19.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Air_fryer_potatoes.jpg"
  },
  {
    "food_id": "food_000187",
    "name": "Mashed Potatoes",
    "category": "Vegetables",
    "type": "Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 2,
      "carbohydrates_g": 17,
      "fat_g": 4,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 14
    },
    "fat": {
      "saturated_g": 2.2,
      "unsaturated_g": 1.8
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Gluten Free"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mashed_potatoes.jpg"
  },
  {
    "food_id": "food_000188",
    "name": "Sweet Potato",
    "category": "Root Vegetables",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 86,
      "protein_g": 1.6,
      "carbohydrates_g": 20.1,
      "fat_g": 0.1,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4.2,
      "starch_g": 12.5
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 1.6
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sweet_potato.jpg"
  },
  {
    "food_id": "food_000189",
    "name": "Boiled Sweet Potato",
    "category": "Root Vegetables",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 76,
      "protein_g": 1.4,
      "carbohydrates_g": 17.7,
      "fat_g": 0.1,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 5.3,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 1.4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Boiled_sweet_potato.jpg"
  },
  {
    "food_id": "food_000190",
    "name": "Roasted Sweet Potato",
    "category": "Root Vegetables",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 100,
      "protein_g": 1.8,
      "carbohydrates_g": 22,
      "fat_g": 1,
      "fiber_g": 3.2
    },
    "carbohydrates": {
      "sugar_g": 5.5,
      "starch_g": 13
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.9
    },
    "protein": {
      "protein_g": 1.8
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roasted_sweet_potato.jpg"
  },
  {
    "food_id": "food_000191",
    "name": "Baked Sweet Potato",
    "category": "Root Vegetables",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 90,
      "protein_g": 2,
      "carbohydrates_g": 21,
      "fat_g": 0.2,
      "fiber_g": 3.3
    },
    "carbohydrates": {
      "sugar_g": 6.5,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Baked_sweet_potato.jpg"
  },
  {
    "food_id": "food_000192",
    "name": "Sweet Potato Chaat",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 2,
      "carbohydrates_g": 24,
      "fat_g": 2,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 13.5
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.7
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sweet_potato_chaat.jpg"
  },
  {
    "food_id": "food_000193",
    "name": "Sweet Potato Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 2,
      "carbohydrates_g": 20,
      "fat_g": 2.5,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 11.5
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 2.2
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sweet_potato_salad.jpg"
  },
  {
    "food_id": "food_000194",
    "name": "Potato Chaat",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 2.5,
      "carbohydrates_g": 22,
      "fat_g": 4,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 16.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_chaat.jpg"
  },
  {
    "food_id": "food_000195",
    "name": "Aloo Gobi",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 3,
      "carbohydrates_g": 14,
      "fat_g": 5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 8
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 4.4
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_gobi.jpg"
  },
  {
    "food_id": "food_000196",
    "name": "Aloo Matar",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 3.5,
      "carbohydrates_g": 17,
      "fat_g": 4,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_matar.jpg"
  },
  {
    "food_id": "food_000197",
    "name": "Aloo Palak",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 3.5,
      "carbohydrates_g": 13,
      "fat_g": 4.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 8
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 4
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_palak.jpg"
  },
  {
    "food_id": "food_000198",
    "name": "Aloo Beans",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 100,
      "protein_g": 2.5,
      "carbohydrates_g": 15,
      "fat_g": 4,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_beans.jpg"
  },
  {
    "food_id": "food_000199",
    "name": "Jeera Aloo",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 2.5,
      "carbohydrates_g": 20,
      "fat_g": 5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Gluten Free"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Jeera_aloo.jpg"
  },
  {
    "food_id": "food_000200",
    "name": "Aloo Tamatar",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 2.5,
      "carbohydrates_g": 17,
      "fat_g": 3.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 11
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Gluten Free"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_tamatar.jpg"
  },
  {
    "food_id": "food_000201",
    "name": "Aloo Capsicum",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 2.5,
      "carbohydrates_g": 16,
      "fat_g": 4.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 4
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_capsicum.jpg"
  },
  {
    "food_id": "food_000202",
    "name": "Aloo Tikki",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium tikkis"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 3,
      "carbohydrates_g": 29,
      "fat_g": 7,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 23
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Snack",
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Aloo_tikki.jpg"
  },
  {
    "food_id": "food_000203",
    "name": "Vegetable Cutlet",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium cutlets"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 4,
      "carbohydrates_g": 25,
      "fat_g": 7,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 0.9,
      "unsaturated_g": 6.1
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_cutlet.jpg"
  },
  {
    "food_id": "food_000204",
    "name": "Paneer Tikka",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 14,
      "carbohydrates_g": 8,
      "fat_g": 15,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 14
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_tikka.jpg"
  },
  {
    "food_id": "food_000205",
    "name": "Paneer Tikka Masala",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 10,
      "carbohydrates_g": 9,
      "fat_g": 13,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 3.5
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_tikka_masala.jpg"
  },
  {
    "food_id": "food_000206",
    "name": "Palak Paneer",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 160,
      "protein_g": 8,
      "carbohydrates_g": 7,
      "fat_g": 11,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein",
      "High Fiber",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Palak_paneer.jpg"
  },
  {
    "food_id": "food_000207",
    "name": "Matar Paneer",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 170,
      "protein_g": 9,
      "carbohydrates_g": 10,
      "fat_g": 11,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Matar_paneer.jpg"
  },
  {
    "food_id": "food_000208",
    "name": "Shahi Paneer",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 9,
      "carbohydrates_g": 9,
      "fat_g": 17,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Shahi_paneer.jpg"
  },
  {
    "food_id": "food_000209",
    "name": "Kadai Paneer",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 10,
      "carbohydrates_g": 8,
      "fat_g": 13,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 3.5
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kadai_paneer.jpg"
  },
  {
    "food_id": "food_000210",
    "name": "Paneer Bhurji",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 12,
      "carbohydrates_g": 6,
      "fat_g": 13,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 8,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_bhurji.jpg"
  },
  {
    "food_id": "food_000211",
    "name": "Paneer Curry",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 175,
      "protein_g": 10,
      "carbohydrates_g": 7,
      "fat_g": 13,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_curry.jpg"
  },
  {
    "food_id": "food_000212",
    "name": "Paneer Masala",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 185,
      "protein_g": 10,
      "carbohydrates_g": 8,
      "fat_g": 13,
      "fiber_g": 1.8
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_masala.jpg"
  },
  {
    "food_id": "food_000213",
    "name": "Paneer Kofta",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 9,
      "carbohydrates_g": 14,
      "fat_g": 15,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Paneer_kofta.jpg"
  },
  {
    "food_id": "food_000214",
    "name": "Tofu Tikka",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 155,
      "protein_g": 15,
      "carbohydrates_g": 6,
      "fat_g": 8,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tofu_tikka.jpg"
  },
  {
    "food_id": "food_000215",
    "name": "Tofu Curry",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 11,
      "carbohydrates_g": 7,
      "fat_g": 9,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 1.3,
      "unsaturated_g": 7.7
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tofu_curry.jpg"
  },
  {
    "food_id": "food_000216",
    "name": "Tofu Stir Fry",
    "category": "Asian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 10,
      "carbohydrates_g": 8,
      "fat_g": 8,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tofu_stir_fry.jpg"
  },
  {
    "food_id": "food_000217",
    "name": "Tofu Scramble",
    "category": "Breakfast",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 12,
      "carbohydrates_g": 5,
      "fat_g": 9,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 1.3,
      "unsaturated_g": 7.7
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Lunch"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tofu_scramble.jpg"
  },
  {
    "food_id": "food_000218",
    "name": "Soy Chunk Curry",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 13,
      "carbohydrates_g": 12,
      "fat_g": 5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Soya_chunk_curry.jpg"
  },
  {
    "food_id": "food_000219",
    "name": "Soy Chunk Pulao",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 165,
      "protein_g": 8,
      "carbohydrates_g": 25,
      "fat_g": 4,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.4
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Soya_chunk_pulao.jpg"
  },
  {
    "food_id": "food_000220",
    "name": "Soy Chunk Biryani",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 175,
      "protein_g": 9,
      "carbohydrates_g": 25,
      "fat_g": 5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 18.5
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 4.2
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Soya_chunk_biryani.jpg"
  },
  {
    "food_id": "food_000221",
    "name": "Mixed Vegetable Curry",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 3,
      "carbohydrates_g": 12,
      "fat_g": 5,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 4.4
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mixed_vegetable_curry.jpg"
  },
  {
    "food_id": "food_000222",
    "name": "Vegetable Curry",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 2.8,
      "carbohydrates_g": 12,
      "fat_g": 4.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 4
    },
    "protein": {
      "protein_g": 2.8
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_curry.jpg"
  },
  {
    "food_id": "food_000223",
    "name": "Vegetable Korma",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 165,
      "protein_g": 4,
      "carbohydrates_g": 12,
      "fat_g": 11,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_korma.jpg"
  },
  {
    "food_id": "food_000224",
    "name": "Vegetable Stew",
    "category": "Stew",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 75,
      "protein_g": 2,
      "carbohydrates_g": 10,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_stew.jpg"
  },
  {
    "food_id": "food_000225",
    "name": "Vegetable Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 45,
      "protein_g": 1.5,
      "carbohydrates_g": 7,
      "fat_g": 1.2,
      "fiber_g": 1.8
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1
    },
    "protein": {
      "protein_g": 1.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_soup.jpg"
  },
  {
    "food_id": "food_000226",
    "name": "Tomato Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 45,
      "protein_g": 1.2,
      "carbohydrates_g": 7,
      "fat_g": 1.5,
      "fiber_g": 1.2
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1.3
    },
    "protein": {
      "protein_g": 1.2
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tomato_soup.jpg"
  },
  {
    "food_id": "food_000227",
    "name": "Spinach Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 40,
      "protein_g": 2,
      "carbohydrates_g": 5,
      "fat_g": 1.5,
      "fiber_g": 1.8
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1.3
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Spinach_soup.jpg"
  },
  {
    "food_id": "food_000228",
    "name": "Mushroom Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "umami",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 55,
      "protein_g": 2.5,
      "carbohydrates_g": 6,
      "fat_g": 2.5,
      "fiber_g": 1.2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 1.8
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mushroom_soup.jpg"
  },
  {
    "food_id": "food_000229",
    "name": "Lentil Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 75,
      "protein_g": 4.5,
      "carbohydrates_g": 11,
      "fat_g": 1.5,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 6.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1.3
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lentil_soup.jpg"
  },
  {
    "food_id": "food_000230",
    "name": "Chicken Vegetable Soup",
    "category": "Soup",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 65,
      "protein_g": 6,
      "carbohydrates_g": 5,
      "fat_g": 2.5,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 1.8
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chicken_vegetable_soup.jpg"
  },
  {
    "food_id": "food_000231",
    "name": "Broccoli Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 45,
      "protein_g": 2.5,
      "carbohydrates_g": 6,
      "fat_g": 1.5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1.3
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Broccoli_soup.jpg"
  },
  {
    "food_id": "food_000232",
    "name": "Pumpkin Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 45,
      "protein_g": 1.2,
      "carbohydrates_g": 8,
      "fat_g": 1,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 3.5,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.8
    },
    "protein": {
      "protein_g": 1.2
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pumpkin_soup.jpg"
  },
  {
    "food_id": "food_000233",
    "name": "Carrot Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 40,
      "protein_g": 1,
      "carbohydrates_g": 7,
      "fat_g": 1,
      "fiber_g": 1.8
    },
    "carbohydrates": {
      "sugar_g": 3.5,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.8
    },
    "protein": {
      "protein_g": 1
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Carrot_soup.jpg"
  },
  {
    "food_id": "food_000234",
    "name": "Minestrone Soup",
    "category": "Soup",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 65,
      "protein_g": 2.5,
      "carbohydrates_g": 10,
      "fat_g": 1.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Minestrone_soup.jpg"
  },
  {
    "food_id": "food_000235",
    "name": "Palak",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 75,
      "protein_g": 3,
      "carbohydrates_g": 7,
      "fat_g": 4,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Palak.jpg"
  },
  {
    "food_id": "food_000236",
    "name": "Palak Corn",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 3.5,
      "carbohydrates_g": 14,
      "fat_g": 4,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Palak_corn.jpg"
  },
  {
    "food_id": "food_000237",
    "name": "Palak Chana",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 6,
      "carbohydrates_g": 17,
      "fat_g": 4,
      "fiber_g": 4.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Palak_chana.jpg"
  },
  {
    "food_id": "food_000238",
    "name": "Palak Dal",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 5.5,
      "carbohydrates_g": 13,
      "fat_g": 3.5,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 5.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber",
      "Plant Protein",
      "Iron Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Palak_dal.jpg"
  },
  {
    "food_id": "food_000239",
    "name": "Bhindi Masala",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 3,
      "carbohydrates_g": 12,
      "fat_g": 6,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 5.3
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bhindi_masala.jpg"
  },
  {
    "food_id": "food_000240",
    "name": "Bhindi Fry",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 3,
      "carbohydrates_g": 13,
      "fat_g": 8,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Bhindi_fry.jpg"
  },
  {
    "food_id": "food_000241",
    "name": "Baingan Bharta",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "smoky",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 2.5,
      "carbohydrates_g": 12,
      "fat_g": 7,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 6.2
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Baigan_Bharta.jpg"
  },
  {
    "food_id": "food_000242",
    "name": "Baingan Masala",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 2.5,
      "carbohydrates_g": 12,
      "fat_g": 6,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3.5,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 5.3
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Baingan_masala.jpg"
  },
  {
    "food_id": "food_000243",
    "name": "Gobi Masala",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 3,
      "carbohydrates_g": 12,
      "fat_g": 6,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 5.5
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 5.3
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gobi_masala.jpg"
  },
  {
    "food_id": "food_000244",
    "name": "Gobi Matar",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 4,
      "carbohydrates_g": 14,
      "fat_g": 4,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gobi_matar.jpg"
  },
  {
    "food_id": "food_000245",
    "name": "Gobi Tikka",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 4,
      "carbohydrates_g": 12,
      "fat_g": 8,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gobi_tikka.jpg"
  },
  {
    "food_id": "food_000246",
    "name": "Gobi Manchurian",
    "category": "Indo-Chinese",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 4,
      "carbohydrates_g": 25,
      "fat_g": 8,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "Indo-Chinese"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Gobhi_Manchurian.jpg"
  },
  {
    "food_id": "food_000247",
    "name": "Matar Masala",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 5,
      "carbohydrates_g": 15,
      "fat_g": 5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 4.4
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Matar_masala.jpg"
  },
  {
    "food_id": "food_000248",
    "name": "Matar Mushroom",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 5,
      "carbohydrates_g": 11,
      "fat_g": 5,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 4.4
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Matar_mushroom.jpg"
  },
  {
    "food_id": "food_000249",
    "name": "Mushroom Masala",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 4,
      "carbohydrates_g": 9,
      "fat_g": 6,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 5.3
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mushroom_masala.jpg"
  },
  {
    "food_id": "food_000250",
    "name": "Mushroom Tikka",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4.5,
      "carbohydrates_g": 8,
      "fat_g": 8,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mushroom_tikka.jpg"
  },
  {
    "food_id": "food_000251",
    "name": "Mushroom Stir Fry",
    "category": "Asian Cuisine",
    "type": "Vegetarian",
    "taste": "umami",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 95,
      "protein_g": 4,
      "carbohydrates_g": 7,
      "fat_g": 6,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 5.3
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mushroom_stir_fry.jpg"
  },
  {
    "food_id": "food_000252",
    "name": "Capsicum Masala",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 2,
      "carbohydrates_g": 9,
      "fat_g": 7,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 3.5,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 6.2
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Capsicum_masala.jpg"
  },
  {
    "food_id": "food_000253",
    "name": "Capsicum Paneer",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 170,
      "protein_g": 10,
      "carbohydrates_g": 8,
      "fat_g": 12,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Capsicum_paneer.jpg"
  },
  {
    "food_id": "food_000254",
    "name": "Beans Poriyal",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 95,
      "protein_g": 3,
      "carbohydrates_g": 10,
      "fat_g": 5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "South Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/BeansPoriyal.JPG"
  },
  {
    "food_id": "food_000255",
    "name": "Carrot Beans Stir Fry",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 90,
      "protein_g": 2.5,
      "carbohydrates_g": 11,
      "fat_g": 4,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3.5,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Carrot%2C_beans_poriyal.jpg"
  },
  {
    "food_id": "food_000256",
    "name": "Mixed Vegetable Stir Fry",
    "category": "Vegetable Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 90,
      "protein_g": 3,
      "carbohydrates_g": 10,
      "fat_g": 4,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 3.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mixed_vegetable_stir_fry.jpg"
  },
  {
    "food_id": "food_000257",
    "name": "Vegetable Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 100,
      "protein_g": 3,
      "carbohydrates_g": 12,
      "fat_g": 4.5,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 5.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 4
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Vegetable_sabzi.jpg"
  },
  {
    "food_id": "food_000258",
    "name": "Lauki Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 70,
      "protein_g": 2,
      "carbohydrates_g": 8,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lauki_sabzi.jpg"
  },
  {
    "food_id": "food_000259",
    "name": "Lauki Dal",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 95,
      "protein_g": 5,
      "carbohydrates_g": 12,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Plant Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Lauki_dal.jpg"
  },
  {
    "food_id": "food_000260",
    "name": "Tori Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 75,
      "protein_g": 2,
      "carbohydrates_g": 9,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tori_sabzi.jpg"
  },
  {
    "food_id": "food_000261",
    "name": "Tinda Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 70,
      "protein_g": 2,
      "carbohydrates_g": 8,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tinda_sabzi.jpg"
  },
  {
    "food_id": "food_000262",
    "name": "Karela Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "bitter",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 85,
      "protein_g": 2.5,
      "carbohydrates_g": 9,
      "fat_g": 4,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Karela_sabzi.jpg"
  },
  {
    "food_id": "food_000263",
    "name": "Karela Fry",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "bitter",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 2.5,
      "carbohydrates_g": 10,
      "fat_g": 8,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Karela_fry.jpg"
  },
  {
    "food_id": "food_000264",
    "name": "Cabbage Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 80,
      "protein_g": 2.5,
      "carbohydrates_g": 10,
      "fat_g": 3.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cabbage_sabzi.jpg"
  },
  {
    "food_id": "food_000265",
    "name": "Cabbage Peas",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 95,
      "protein_g": 3.5,
      "carbohydrates_g": 13,
      "fat_g": 3.5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3.5,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Plant Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cabbage_with_peas.jpg"
  },
  {
    "food_id": "food_000266",
    "name": "Cauliflower Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 90,
      "protein_g": 3,
      "carbohydrates_g": 10,
      "fat_g": 4,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 3.5
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cauliflower_sabzi.jpg"
  },
  {
    "food_id": "food_000267",
    "name": "Drumstick Curry",
    "category": "Indian Cuisine",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 95,
      "protein_g": 3,
      "carbohydrates_g": 10,
      "fat_g": 5,
      "fiber_g": 3.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 3.5
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 4
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Drumstick_curry.jpg"
  },
  {
    "food_id": "food_000268",
    "name": "Pumpkin Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 80,
      "protein_g": 2,
      "carbohydrates_g": 12,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pumpkin_sabzi.jpg"
  },
  {
    "food_id": "food_000269",
    "name": "Beetroot Sabzi",
    "category": "Indian Vegetables",
    "type": "Vegetarian",
    "taste": "earthy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 85,
      "protein_g": 2,
      "carbohydrates_g": 12,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Beetroot_sabzi.jpg"
  },
  {
    "food_id": "food_000270",
    "name": "Beetroot Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 50,
      "protein_g": 1.5,
      "carbohydrates_g": 10,
      "fat_g": 0.5,
      "fiber_g": 2.8
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.4
    },
    "protein": {
      "protein_g": 1.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Beetroot_salad.jpg"
  },
  {
    "food_id": "food_000271",
    "name": "Corn Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 100,
      "protein_g": 3,
      "carbohydrates_g": 19,
      "fat_g": 2,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.7
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Corn_salad.jpg"
  },
  {
    "food_id": "food_000272",
    "name": "Boiled Corn",
    "category": "Grains",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 96,
      "protein_g": 3.4,
      "carbohydrates_g": 21,
      "fat_g": 1.5,
      "fiber_g": 2.4
    },
    "carbohydrates": {
      "sugar_g": 4.5,
      "starch_g": 13.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1.3
    },
    "protein": {
      "protein_g": 3.4
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Boiled_corn.jpg"
  },
  {
    "food_id": "food_000273",
    "name": "Roasted Corn",
    "category": "Grains",
    "type": "Vegetarian",
    "taste": "smoky",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 3.5,
      "carbohydrates_g": 22,
      "fat_g": 2,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 14
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.7
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roasted_corn.jpg"
  },
  {
    "food_id": "food_000274",
    "name": "Corn Chaat",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 3.5,
      "carbohydrates_g": 21,
      "fat_g": 3,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 11.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.6
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Corn_chaat.jpg"
  },
  {
    "food_id": "food_000275",
    "name": "Corn Chilla",
    "category": "Indian Breakfast",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 2 medium chillas"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 4,
      "carbohydrates_g": 22,
      "fat_g": 4.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2.5,
      "starch_g": 13
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.9
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Corn_chilla.jpg"
  },
  {
    "food_id": "food_000276",
    "name": "Mushroom Omelette",
    "category": "Egg Dishes",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard omelette"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 10,
      "carbohydrates_g": 3,
      "fat_g": 10,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 0.5
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mushroom_omelette.jpg"
  },
  {
    "food_id": "food_000277",
    "name": "Fruit Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 65,
      "protein_g": 0.8,
      "carbohydrates_g": 16,
      "fat_g": 0.3,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 0.8
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fruit_salad.jpg"
  },
  {
    "food_id": "food_000278",
    "name": "Apple",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 52,
      "protein_g": 0.3,
      "carbohydrates_g": 13.8,
      "fat_g": 0.2,
      "fiber_g": 2.4
    },
    "carbohydrates": {
      "sugar_g": 10.4,
      "starch_g": 0.1
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 0.3
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Red_Apple.jpg"
  },
  {
    "food_id": "food_000279",
    "name": "Banana",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 89,
      "protein_g": 1.1,
      "carbohydrates_g": 22.8,
      "fat_g": 0.3,
      "fiber_g": 2.6
    },
    "carbohydrates": {
      "sugar_g": 12.2,
      "starch_g": 5.4
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 1.1
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Banana.jpg"
  },
  {
    "food_id": "food_000280",
    "name": "Orange",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "citrusy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 47,
      "protein_g": 0.9,
      "carbohydrates_g": 11.8,
      "fat_g": 0.1,
      "fiber_g": 2.4
    },
    "carbohydrates": {
      "sugar_g": 9.4,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 0.9
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Orange.jpg"
  },
  {
    "food_id": "food_000281",
    "name": "Sweet Lime",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 43,
      "protein_g": 0.7,
      "carbohydrates_g": 9.5,
      "fat_g": 0.3,
      "fiber_g": 1.7
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 0.3
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 0.7
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mosambi.jpg"
  },
  {
    "food_id": "food_000282",
    "name": "Grapes",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 69,
      "protein_g": 0.7,
      "carbohydrates_g": 18.1,
      "fat_g": 0.2,
      "fiber_g": 0.9
    },
    "carbohydrates": {
      "sugar_g": 15.5,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 0.7
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Table_grapes.jpg"
  },
  {
    "food_id": "food_000283",
    "name": "Mango",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 60,
      "protein_g": 0.8,
      "carbohydrates_g": 15,
      "fat_g": 0.4,
      "fiber_g": 1.6
    },
    "carbohydrates": {
      "sugar_g": 13.7,
      "starch_g": 0.4
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 0.8
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mango.jpg"
  },
  {
    "food_id": "food_000284",
    "name": "Papaya",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 43,
      "protein_g": 0.5,
      "carbohydrates_g": 10.8,
      "fat_g": 0.3,
      "fiber_g": 1.7
    },
    "carbohydrates": {
      "sugar_g": 7.8,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 0.5
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Papaya.jpg"
  },
  {
    "food_id": "food_000285",
    "name": "Pineapple",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 50,
      "protein_g": 0.5,
      "carbohydrates_g": 13.1,
      "fat_g": 0.1,
      "fiber_g": 1.4
    },
    "carbohydrates": {
      "sugar_g": 9.9,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 0.5
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pineapple.jpg"
  },
  {
    "food_id": "food_000286",
    "name": "Watermelon",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 30,
      "protein_g": 0.6,
      "carbohydrates_g": 7.6,
      "fat_g": 0.2,
      "fiber_g": 0.4
    },
    "carbohydrates": {
      "sugar_g": 6.2,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 0.6
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Low Calorie",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Watermelon.jpg"
  },
  {
    "food_id": "food_000287",
    "name": "Muskmelon",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 34,
      "protein_g": 0.8,
      "carbohydrates_g": 8.2,
      "fat_g": 0.2,
      "fiber_g": 0.9
    },
    "carbohydrates": {
      "sugar_g": 7.9,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 0.8
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Low Calorie",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Muskmelon.jpg"
  },
  {
    "food_id": "food_000288",
    "name": "Guava",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 68,
      "protein_g": 2.6,
      "carbohydrates_g": 14.3,
      "fat_g": 1,
      "fiber_g": 5.4
    },
    "carbohydrates": {
      "sugar_g": 8.9,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 0.7
    },
    "protein": {
      "protein_g": 2.6
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Guava.jpg"
  },
  {
    "food_id": "food_000289",
    "name": "Pear",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 57,
      "protein_g": 0.4,
      "carbohydrates_g": 15.2,
      "fat_g": 0.1,
      "fiber_g": 3.1
    },
    "carbohydrates": {
      "sugar_g": 9.8,
      "starch_g": 0.4
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 0.4
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pear.jpg"
  },
  {
    "food_id": "food_000290",
    "name": "Peach",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 39,
      "protein_g": 0.9,
      "carbohydrates_g": 9.5,
      "fat_g": 0.3,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 8.4,
      "starch_g": 0.5
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 0.9
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peach.jpg"
  },
  {
    "food_id": "food_000291",
    "name": "Plum",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 46,
      "protein_g": 0.7,
      "carbohydrates_g": 11.4,
      "fat_g": 0.3,
      "fiber_g": 1.4
    },
    "carbohydrates": {
      "sugar_g": 9.9,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 0.7
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Plum.jpg"
  },
  {
    "food_id": "food_000292",
    "name": "Kiwi",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 61,
      "protein_g": 1.1,
      "carbohydrates_g": 14.7,
      "fat_g": 0.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 9,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.5
    },
    "protein": {
      "protein_g": 1.1
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kiwifruit.jpg"
  },
  {
    "food_id": "food_000293",
    "name": "Strawberries",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 32,
      "protein_g": 0.7,
      "carbohydrates_g": 7.7,
      "fat_g": 0.3,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 4.9,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 0.7
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Low Calorie",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Strawberries.jpg"
  },
  {
    "food_id": "food_000294",
    "name": "Blueberries",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 57,
      "protein_g": 0.7,
      "carbohydrates_g": 14.5,
      "fat_g": 0.3,
      "fiber_g": 2.4
    },
    "carbohydrates": {
      "sugar_g": 10,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 0.7
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Blueberries.jpg"
  },
  {
    "food_id": "food_000295",
    "name": "Raspberries",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 52,
      "protein_g": 1.2,
      "carbohydrates_g": 11.9,
      "fat_g": 0.7,
      "fiber_g": 6.5
    },
    "carbohydrates": {
      "sugar_g": 4.4,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.7
    },
    "protein": {
      "protein_g": 1.2
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Raspberries.jpg"
  },
  {
    "food_id": "food_000296",
    "name": "Pomegranate",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 83,
      "protein_g": 1.7,
      "carbohydrates_g": 18.7,
      "fat_g": 1.2,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 13.7,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 1.1
    },
    "protein": {
      "protein_g": 1.7
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pomegranate.jpg"
  },
  {
    "food_id": "food_000297",
    "name": "Chikoo",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 83,
      "protein_g": 0.4,
      "carbohydrates_g": 19.9,
      "fat_g": 1.1,
      "fiber_g": 5.3
    },
    "carbohydrates": {
      "sugar_g": 14.7,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.9
    },
    "protein": {
      "protein_g": 0.4
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sapodilla.jpg"
  },
  {
    "food_id": "food_000298",
    "name": "Dragon Fruit",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 57,
      "protein_g": 1.1,
      "carbohydrates_g": 13,
      "fat_g": 0.4,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 1.1
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dragonfruit.jpg"
  },
  {
    "food_id": "food_000299",
    "name": "Coconut",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 354,
      "protein_g": 3.3,
      "carbohydrates_g": 15.2,
      "fat_g": 33.5,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 6.2,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 29.7,
      "unsaturated_g": 3.8
    },
    "protein": {
      "protein_g": 3.3
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Coconut.jpg"
  },
  {
    "food_id": "food_000300",
    "name": "Coconut Water",
    "category": "Beverages",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "ml",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 19,
      "protein_g": 0.7,
      "carbohydrates_g": 3.7,
      "fat_g": 0.2,
      "fiber_g": 1.1
    },
    "carbohydrates": {
      "sugar_g": 2.6,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 0.7
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Coconut_water.jpg"
  },
  {
    "food_id": "food_000301",
    "name": "Dates",
    "category": "Dried Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 282,
      "protein_g": 2.5,
      "carbohydrates_g": 75,
      "fat_g": 0.4,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 63,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dates_fruit.jpg"
  },
  {
    "food_id": "food_000302",
    "name": "Figs",
    "category": "Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 74,
      "protein_g": 0.8,
      "carbohydrates_g": 19.2,
      "fat_g": 0.3,
      "fiber_g": 2.9
    },
    "carbohydrates": {
      "sugar_g": 16.3,
      "starch_g": 0.3
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 0.8
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Figs_fruit.jpg"
  },
  {
    "food_id": "food_000303",
    "name": "Raisins",
    "category": "Dried Fruits",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 299,
      "protein_g": 3.1,
      "carbohydrates_g": 79.2,
      "fat_g": 0.5,
      "fiber_g": 3.7
    },
    "carbohydrates": {
      "sugar_g": 59.2,
      "starch_g": 2.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 3.1
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "Natural Sugar",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Raisins.jpg"
  },
  {
    "food_id": "food_000304",
    "name": "Mixed Fruit Bowl",
    "category": "Fruit Bowl",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 1.5,
      "carbohydrates_g": 29,
      "fat_g": 0.6,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 22,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.5
    },
    "protein": {
      "protein_g": 1.5
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fruit_salad.jpg"
  },
  {
    "food_id": "food_000305",
    "name": "Banana Oat Bowl",
    "category": "Oatmeal",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 250,
      "protein_g": 8,
      "carbohydrates_g": 43,
      "fat_g": 6,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Energy Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Banana_oatmeal.jpg"
  },
  {
    "food_id": "food_000306",
    "name": "Apple Oat Bowl",
    "category": "Oatmeal",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 235,
      "protein_g": 7.5,
      "carbohydrates_g": 42,
      "fat_g": 5.5,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 11,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 4.7
    },
    "protein": {
      "protein_g": 7.5
    },
    "meal_type": [
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Apple_oatmeal.jpg"
  },
  {
    "food_id": "food_000307",
    "name": "Apple Cinnamon Oats",
    "category": "Oatmeal",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 7,
      "carbohydrates_g": 38,
      "fat_g": 5,
      "fiber_g": 5.5
    },
    "carbohydrates": {
      "sugar_g": 10,
      "starch_g": 23
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Apple_cinnamon_oatmeal.jpg"
  },
  {
    "food_id": "food_000308",
    "name": "Banana Peanut Butter Bowl",
    "category": "Breakfast Bowl",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 10,
      "carbohydrates_g": 38,
      "fat_g": 14,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 14,
      "starch_g": 17
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Energy Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Banana_peanut_butter_oatmeal.jpg"
  },
  {
    "food_id": "food_000309",
    "name": "Fruit Yogurt Bowl",
    "category": "Yogurt Bowl",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 155,
      "protein_g": 7,
      "carbohydrates_g": 24,
      "fat_g": 3.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fruit_and_yogurt.jpg"
  },
  {
    "food_id": "food_000310",
    "name": "Greek Yogurt Fruit Bowl",
    "category": "Yogurt Bowl",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 175,
      "protein_g": 13,
      "carbohydrates_g": 22,
      "fat_g": 3.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 16,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Greek_yogurt_with_fruit.jpg"
  },
  {
    "food_id": "food_000311",
    "name": "Yogurt Parfait",
    "category": "Yogurt Dessert",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard parfait"
    },
    "macronutrients": {
      "calories": 160,
      "protein_g": 7,
      "carbohydrates_g": 25,
      "fat_g": 4,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 16,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Yogurt_parfait.jpg"
  },
  {
    "food_id": "food_000312",
    "name": "Chia Pudding",
    "category": "Pudding",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 6,
      "carbohydrates_g": 15,
      "fat_g": 10,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Omega 3"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chia_Pudding.jpg"
  },
  {
    "food_id": "food_000313",
    "name": "Overnight Chia Pudding",
    "category": "Pudding",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 6.5,
      "carbohydrates_g": 17,
      "fat_g": 10,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 6.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Omega 3"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Overnight_chia_pudding.jpg"
  },
  {
    "food_id": "food_000314",
    "name": "Fruit Smoothie",
    "category": "Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 2,
      "carbohydrates_g": 29,
      "fat_g": 0.8,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 22,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.6
    },
    "protein": {
      "protein_g": 2
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Fruit_smoothie.jpg"
  },
  {
    "food_id": "food_000315",
    "name": "Banana Smoothie",
    "category": "Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 4.5,
      "carbohydrates_g": 27,
      "fat_g": 3,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 1.8,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Banana_Smoothie.jpg"
  },
  {
    "food_id": "food_000316",
    "name": "Mango Smoothie",
    "category": "Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 155,
      "protein_g": 4,
      "carbohydrates_g": 28,
      "fat_g": 3,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 23,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 1.7,
      "unsaturated_g": 1.3
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mango_smoothie.jpg"
  },
  {
    "food_id": "food_000317",
    "name": "Berry Smoothie",
    "category": "Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 3,
      "carbohydrates_g": 24,
      "fat_g": 2,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 17,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Antioxidant Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Berry_smoothie.jpg"
  },
  {
    "food_id": "food_000318",
    "name": "Strawberry Smoothie",
    "category": "Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 4,
      "carbohydrates_g": 21,
      "fat_g": 2.5,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 16,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 1.4,
      "unsaturated_g": 1.1
    },
    "protein": {
      "protein_g": 4
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Strawberry_smoothie.jpg"
  },
  {
    "food_id": "food_000319",
    "name": "Apple Smoothie",
    "category": "Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 3.5,
      "carbohydrates_g": 25,
      "fat_g": 1.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 0.8
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Apple_smoothie.jpg"
  },
  {
    "food_id": "food_000320",
    "name": "Papaya Smoothie",
    "category": "Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 3.5,
      "carbohydrates_g": 22,
      "fat_g": 1.5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 16,
      "starch_g": 0.5
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 0.8
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Natural Sugar"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Papaya_smoothie.jpg"
  },
  {
    "food_id": "food_000321",
    "name": "Protein Smoothie",
    "category": "Protein Smoothies",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 25,
      "carbohydrates_g": 20,
      "fat_g": 5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 10,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Protein_smoothie.jpg"
  },
  {
    "food_id": "food_000322",
    "name": "Banana Protein Smoothie",
    "category": "Protein Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 250,
      "protein_g": 25,
      "carbohydrates_g": 30,
      "fat_g": 5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 16,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Banana_protein_smoothie.jpg"
  },
  {
    "food_id": "food_000323",
    "name": "Chocolate Protein Smoothie",
    "category": "Protein Smoothies",
    "type": "Vegetarian",
    "taste": "chocolate",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 27,
      "carbohydrates_g": 18,
      "fat_g": 7,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chocolate_protein_smoothie.jpg"
  },
  {
    "food_id": "food_000324",
    "name": "Berry Protein Smoothie",
    "category": "Protein Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 25,
      "carbohydrates_g": 19,
      "fat_g": 5,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 10,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 3.8
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Berry_protein_smoothie.jpg"
  },
  {
    "food_id": "food_000325",
    "name": "Mango Protein Smoothie",
    "category": "Protein Smoothies",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 25,
      "carbohydrates_g": 26,
      "fat_g": 5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mango_protein_smoothie.jpg"
  },
  {
    "food_id": "food_000326",
    "name": "Peanut Butter Protein Smoothie",
    "category": "Protein Smoothies",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 290,
      "protein_g": 28,
      "carbohydrates_g": 18,
      "fat_g": 12,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout",
      "Energy Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peanut_butter_protein_smoothie.jpg"
  },
  {
    "food_id": "food_000327",
    "name": "Almonds",
    "category": "Nuts",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 579,
      "protein_g": 21.2,
      "carbohydrates_g": 21.6,
      "fat_g": 49.9,
      "fiber_g": 12.5
    },
    "carbohydrates": {
      "sugar_g": 4.4,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 3.8,
      "unsaturated_g": 46.1
    },
    "protein": {
      "protein_g": 21.2
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Almonds.jpg"
  },
  {
    "food_id": "food_000328",
    "name": "Walnuts",
    "category": "Nuts",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 654,
      "protein_g": 15.2,
      "carbohydrates_g": 13.7,
      "fat_g": 65.2,
      "fiber_g": 6.7
    },
    "carbohydrates": {
      "sugar_g": 2.6,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 6.1,
      "unsaturated_g": 59.1
    },
    "protein": {
      "protein_g": 15.2
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "Healthy Fats",
      "Omega 3"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Walnuts.jpg"
  },
  {
    "food_id": "food_000329",
    "name": "Cashews",
    "category": "Nuts",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 553,
      "protein_g": 18.2,
      "carbohydrates_g": 30.2,
      "fat_g": 43.8,
      "fiber_g": 3.3
    },
    "carbohydrates": {
      "sugar_g": 5.9,
      "starch_g": 23.5
    },
    "fat": {
      "saturated_g": 7.8,
      "unsaturated_g": 36
    },
    "protein": {
      "protein_g": 18.2
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cashew_nuts.jpg"
  },
  {
    "food_id": "food_000330",
    "name": "Pistachios",
    "category": "Nuts",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 562,
      "protein_g": 20.2,
      "carbohydrates_g": 27.2,
      "fat_g": 45.3,
      "fiber_g": 10.6
    },
    "carbohydrates": {
      "sugar_g": 7.7,
      "starch_g": 16.6
    },
    "fat": {
      "saturated_g": 5.9,
      "unsaturated_g": 39.4
    },
    "protein": {
      "protein_g": 20.2
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pistachios.jpg"
  },
  {
    "food_id": "food_000331",
    "name": "Peanuts",
    "category": "Nuts and Legumes",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 567,
      "protein_g": 25.8,
      "carbohydrates_g": 16.1,
      "fat_g": 49.2,
      "fiber_g": 8.5
    },
    "carbohydrates": {
      "sugar_g": 4.7,
      "starch_g": 4.2
    },
    "fat": {
      "saturated_g": 6.8,
      "unsaturated_g": 42.4
    },
    "protein": {
      "protein_g": 25.8
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peanuts.jpg"
  },
  {
    "food_id": "food_000332",
    "name": "Roasted Peanuts",
    "category": "Nuts and Legumes",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 585,
      "protein_g": 25.7,
      "carbohydrates_g": 21.3,
      "fat_g": 49.7,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 4.2,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 42.7
    },
    "protein": {
      "protein_g": 25.7
    },
    "meal_type": [
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Roasted_peanuts.jpg"
  },
  {
    "food_id": "food_000333",
    "name": "Peanut Chaat",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 8,
      "carbohydrates_g": 14,
      "fat_g": 11,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Snack",
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peanut_chaat.jpg"
  },
  {
    "food_id": "food_000334",
    "name": "Mixed Nuts",
    "category": "Nuts",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 600,
      "protein_g": 19,
      "carbohydrates_g": 20,
      "fat_g": 53,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 8
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 46
    },
    "protein": {
      "protein_g": 19
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mixed_nuts.jpg"
  },
  {
    "food_id": "food_000335",
    "name": "Trail Mix",
    "category": "Snacks",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 462,
      "protein_g": 13,
      "carbohydrates_g": 44,
      "fat_g": 27,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 25,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 23
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Snack",
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Energy Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Trail_mix.jpg"
  },
  {
    "food_id": "food_000336",
    "name": "Almond Butter",
    "category": "Nut Butters",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 614,
      "protein_g": 21.1,
      "carbohydrates_g": 18.8,
      "fat_g": 55.5,
      "fiber_g": 10.3
    },
    "carbohydrates": {
      "sugar_g": 3.4,
      "starch_g": 4.5
    },
    "fat": {
      "saturated_g": 4.2,
      "unsaturated_g": 51.3
    },
    "protein": {
      "protein_g": 21.1
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Almond_butter.jpg"
  },
  {
    "food_id": "food_000337",
    "name": "Peanut Butter",
    "category": "Nut Butters",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 588,
      "protein_g": 25.1,
      "carbohydrates_g": 20,
      "fat_g": 50,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 9.2,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 10,
      "unsaturated_g": 40
    },
    "protein": {
      "protein_g": 25.1
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peanut_butter.jpg"
  },
  {
    "food_id": "food_000338",
    "name": "Cashew Butter",
    "category": "Nut Butters",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 587,
      "protein_g": 18.2,
      "carbohydrates_g": 30,
      "fat_g": 49,
      "fiber_g": 3.3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 40
    },
    "protein": {
      "protein_g": 18.2
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cashew_butter.jpg"
  },
  {
    "food_id": "food_000339",
    "name": "Tahini",
    "category": "Seed Butters",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 595,
      "protein_g": 17,
      "carbohydrates_g": 21.2,
      "fat_g": 53.8,
      "fiber_g": 9.3
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 11.9
    },
    "fat": {
      "saturated_g": 7.5,
      "unsaturated_g": 46.3
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tahini.jpg"
  },
  {
    "food_id": "food_000340",
    "name": "Pumpkin Seeds",
    "category": "Seeds",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 559,
      "protein_g": 30.2,
      "carbohydrates_g": 10.7,
      "fat_g": 49.1,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 1.4,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 8.7,
      "unsaturated_g": 40.4
    },
    "protein": {
      "protein_g": 30.2
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Pumpkin_seeds.jpg"
  },
  {
    "food_id": "food_000341",
    "name": "Sunflower Seeds",
    "category": "Seeds",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 584,
      "protein_g": 20.8,
      "carbohydrates_g": 20,
      "fat_g": 51.5,
      "fiber_g": 8.6
    },
    "carbohydrates": {
      "sugar_g": 2.6,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 47
    },
    "protein": {
      "protein_g": 20.8
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Sunflower_seeds.jpg"
  },
  {
    "food_id": "food_000342",
    "name": "Chia Seeds",
    "category": "Seeds",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 486,
      "protein_g": 16.5,
      "carbohydrates_g": 42.1,
      "fat_g": 30.7,
      "fiber_g": 34.4
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 7.7
    },
    "fat": {
      "saturated_g": 3.3,
      "unsaturated_g": 27.4
    },
    "protein": {
      "protein_g": 16.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Omega 3"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chia_seeds.jpg"
  },
  {
    "food_id": "food_000343",
    "name": "Flax Seeds",
    "category": "Seeds",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 534,
      "protein_g": 18.3,
      "carbohydrates_g": 28.9,
      "fat_g": 42.2,
      "fiber_g": 27.3
    },
    "carbohydrates": {
      "sugar_g": 1.6,
      "starch_g": 1.6
    },
    "fat": {
      "saturated_g": 3.7,
      "unsaturated_g": 38.5
    },
    "protein": {
      "protein_g": 18.3
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Omega 3"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Flax_seeds.jpg"
  },
  {
    "food_id": "food_000344",
    "name": "Hemp Seeds",
    "category": "Seeds",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 553,
      "protein_g": 31.6,
      "carbohydrates_g": 8.7,
      "fat_g": 48.8,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 4.6,
      "unsaturated_g": 44.2
    },
    "protein": {
      "protein_g": 31.6
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hemp_seeds.jpg"
  },
  {
    "food_id": "food_000345",
    "name": "Mixed Seeds",
    "category": "Seeds",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 555,
      "protein_g": 20,
      "carbohydrates_g": 18,
      "fat_g": 47,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 42
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats",
      "Omega 3"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Mixed_seeds.jpg"
  },
  {
    "food_id": "food_000346",
    "name": "Roasted Makhana",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 9.7,
      "carbohydrates_g": 76.9,
      "fat_g": 0.1,
      "fiber_g": 7.6
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 65
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 9.7
    },
    "meal_type": [
      "Snack",
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian",
      "High Fiber",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Makhana.jpg"
  },
  {
    "food_id": "food_000347",
    "name": "Makhana Chaat",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 155,
      "protein_g": 4.5,
      "carbohydrates_g": 25,
      "fat_g": 4,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 0.6,
      "unsaturated_g": 3.4
    },
    "protein": {
      "protein_g": 4.5
    },
    "meal_type": [
      "Snack",
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Makhana_chaat.jpg"
  },
  {
    "food_id": "food_000348",
    "name": "Makhana",
    "category": "Seeds",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 347,
      "protein_g": 9.7,
      "carbohydrates_g": 76.9,
      "fat_g": 0.1,
      "fiber_g": 7.6
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 65
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 9.7
    },
    "meal_type": [
      "Snack",
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Makhana.jpg"
  },
  {
    "food_id": "food_000349",
    "name": "Peanut Chikki",
    "category": "Indian Sweets",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 500,
      "protein_g": 15,
      "carbohydrates_g": 55,
      "fat_g": 25,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 42,
      "starch_g": 8
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 21
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Energy Rich",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peanut_chikki.jpg"
  },
  {
    "food_id": "food_000350",
    "name": "Til Chikki",
    "category": "Indian Sweets",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 510,
      "protein_g": 12,
      "carbohydrates_g": 55,
      "fat_g": 27,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 43,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 23
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Energy Rich",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Til_chikki.jpg"
  },
  {
    "food_id": "food_000351",
    "name": "Dry Fruit Mix",
    "category": "Dried Fruits and Nuts",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 520,
      "protein_g": 12,
      "carbohydrates_g": 42,
      "fat_g": 34,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 28,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 29
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats",
      "Energy Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_fruit_and_nuts.jpg"
  },
  {
    "food_id": "food_000352",
    "name": "Almond Oatmeal",
    "category": "Oatmeal",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 10,
      "carbohydrates_g": 38,
      "fat_g": 9,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 7.8
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Almond_oatmeal.jpg"
  },
  {
    "food_id": "food_000353",
    "name": "Peanut Butter Oatmeal",
    "category": "Oatmeal",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 12,
      "carbohydrates_g": 39,
      "fat_g": 13,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 10.5
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Healthy Fats",
      "Energy Rich"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Peanut_butter_oatmeal.jpg"
  },
  {
    "food_id": "food_000354",
    "name": "Hummus",
    "category": "Middle Eastern",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 166,
      "protein_g": 7.9,
      "carbohydrates_g": 14.3,
      "fat_g": 9.6,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 0.3,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 1.4,
      "unsaturated_g": 8.2
    },
    "protein": {
      "protein_g": 7.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Hummus.jpg"
  },
  {
    "food_id": "food_000355",
    "name": "Falafel",
    "category": "Middle Eastern",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "Approximately 3 to 4 falafel pieces"
    },
    "macronutrients": {
      "calories": 333,
      "protein_g": 13.3,
      "carbohydrates_g": 31.8,
      "fat_g": 17.8,
      "fiber_g": 4.9
    },
    "carbohydrates": {
      "sugar_g": 2.3,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 2.4,
      "unsaturated_g": 15.4
    },
    "protein": {
      "protein_g": 13.3
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Falafel.jpg"
  },
  {
    "food_id": "food_000356",
    "name": "Chickpea Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 9,
      "carbohydrates_g": 30,
      "fat_g": 7,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 14
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 6.2
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chickpea_salad.jpg"
  },
  {
    "food_id": "food_000357",
    "name": "Greek Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 5,
      "carbohydrates_g": 10,
      "fat_g": 10,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 6.5
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Mediterranean"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Greek_salad.jpg"
  },
  {
    "food_id": "food_000358",
    "name": "Garden Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 70,
      "protein_g": 2.5,
      "carbohydrates_g": 12,
      "fat_g": 1.5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 1.3
    },
    "protein": {
      "protein_g": 2.5
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Garden_salad.jpg"
  },
  {
    "food_id": "food_000359",
    "name": "Cucumber Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 32,
      "protein_g": 1.4,
      "carbohydrates_g": 7.2,
      "fat_g": 0.2,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 3.4,
      "starch_g": 0.4
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0.2
    },
    "protein": {
      "protein_g": 1.4
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Cucumber_salad.jpg"
  },
  {
    "food_id": "food_000360",
    "name": "Tomato Cucumber Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 45,
      "protein_g": 1.8,
      "carbohydrates_g": 9,
      "fat_g": 0.4,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 0.7
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 1.8
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:Redirect/file/Tomato_cucumber_salad.jpg"
  },
  {
    "food_id": "food_000361",
    "name": "Carrot Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 65,
      "protein_g": 1.2,
      "carbohydrates_g": 14,
      "fat_g": 0.4,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 1.2
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Low Calorie",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:A_carrot_salad.jpg"
  },
  {
    "food_id": "food_000362",
    "name": "Sprouts Chaat",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 135,
      "protein_g": 8,
      "carbohydrates_g": 22,
      "fat_g": 2.5,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 8
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.1
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Lunch"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Sprout_Chaat.jpg/330px-Sprout_Chaat.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000363",
    "name": "Paneer Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 245,
      "protein_g": 16,
      "carbohydrates_g": 10,
      "fat_g": 17,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 10,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Caesar_salad_%282%29.jpg/330px-Caesar_salad_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000364",
    "name": "Tofu Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 170,
      "protein_g": 15,
      "carbohydrates_g": 8,
      "fat_g": 9,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:ToFu_Salad.jpg"
  },
  {
    "food_id": "food_000365",
    "name": "Chicken Caesar Salad",
    "category": "Salad",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 28,
      "carbohydrates_g": 12,
      "fat_g": 19,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:Chicken_Caesar_Salad_-_Amo_2026-04-11.jpg"
  },
  {
    "food_id": "food_000366",
    "name": "Egg Salad",
    "category": "Salad",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 13,
      "carbohydrates_g": 5,
      "fat_g": 18,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:EggSalad.jpg"
  },
  {
    "food_id": "food_000367",
    "name": "Avocado Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 3,
      "carbohydrates_g": 12,
      "fat_g": 14,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 3
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:Avocado_salad_(3054081983).jpg"
  },
  {
    "food_id": "food_000368",
    "name": "Avocado Toast",
    "category": "Toast",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 6,
      "carbohydrates_g": 30,
      "fat_g": 9,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 21
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:Avocado_toast.jpg"
  },
  {
    "food_id": "food_000369",
    "name": "Egg Avocado Toast",
    "category": "Toast",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 290,
      "protein_g": 13,
      "carbohydrates_g": 30,
      "fat_g": 13,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 21
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Lunch"
    ],
    "diet_tags": [
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Fresh_Avocado_Toast_with_Egg.jpg/120px-Fresh_Avocado_Toast_with_Egg.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000370",
    "name": "Paneer Avocado Toast",
    "category": "Toast",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 15,
      "carbohydrates_g": 29,
      "fat_g": 15,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Vegan_Mocha_Almond_Fudge_Avocado_Cake_%284673005754%29.jpg/250px-Vegan_Mocha_Almond_Fudge_Avocado_Cake_%284673005754%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000371",
    "name": "Hummus Wrap",
    "category": "Wraps",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard wrap"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 10,
      "carbohydrates_g": 42,
      "fat_g": 12,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Falafel_%26_Hummus_Wrap_-_Lavash_2024-08-19.jpg/250px-Falafel_%26_Hummus_Wrap_-_Lavash_2024-08-19.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000372",
    "name": "Falafel Wrap",
    "category": "Wraps",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard wrap"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 14,
      "carbohydrates_g": 48,
      "fat_g": 16,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 13.5
    },
    "protein": {
      "protein_g": 14
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Falafel_Melt_Wrap_-_We_Love_Falafel_2023-09-27.jpg/250px-Falafel_Melt_Wrap_-_We_Love_Falafel_2023-09-27.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000373",
    "name": "Hummus Sandwich",
    "category": "Sandwiches",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 12,
      "carbohydrates_g": 44,
      "fat_g": 12,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Radishes%2C_anchovies%2C_and_roasted_red_pepper_hummus_on_German_three-grain_bread_-_Massachusetts.jpg/330px-Radishes%2C_anchovies%2C_and_roasted_red_pepper_hummus_on_German_three-grain_bread_-_Massachusetts.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000374",
    "name": "Chickpea Wrap",
    "category": "Wraps",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard wrap"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 13,
      "carbohydrates_g": 48,
      "fat_g": 11,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 26
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Cape_Malay_samosas.jpg/330px-Cape_Malay_samosas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000375",
    "name": "Chickpea Bowl",
    "category": "Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 360,
      "protein_g": 15,
      "carbohydrates_g": 52,
      "fat_g": 10,
      "fiber_g": 11
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Curry_in_a_Hurry_Chickpea_Bowl_%2851383382685%29.jpg/250px-Curry_in_a_Hurry_Chickpea_Bowl_%2851383382685%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000376",
    "name": "Buddha Bowl",
    "category": "Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 15,
      "carbohydrates_g": 58,
      "fat_g": 15,
      "fiber_g": 11
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 30
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Category:Buddha_bowl"
  },
  {
    "food_id": "food_000377",
    "name": "Protein Bowl",
    "category": "Protein Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 30,
      "carbohydrates_g": 42,
      "fat_g": 17,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Power_protein_salad_bowl.jpg/250px-Power_protein_salad_bowl.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000378",
    "name": "Chicken Buddha Bowl",
    "category": "Bowls",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 470,
      "protein_g": 35,
      "carbohydrates_g": 45,
      "fat_g": 16,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 12.5
    },
    "protein": {
      "protein_g": 35
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Post-Workout"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://live.staticflickr.com/2119/2372479789_d4d2340846_b.jpg"
  },
  {
    "food_id": "food_000379",
    "name": "Tofu Buddha Bowl",
    "category": "Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 410,
      "protein_g": 24,
      "carbohydrates_g": 45,
      "fat_g": 15,
      "fiber_g": 10
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 12.5
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://live.staticflickr.com/2858/33753188711_0bddbb4111_b.jpg"
  },
  {
    "food_id": "food_000380",
    "name": "Paneer Buddha Bowl",
    "category": "Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 490,
      "protein_g": 27,
      "carbohydrates_g": 43,
      "fat_g": 22,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 10,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "http://shimada-jimusho.com/wp-content/uploads/2018/01/DSC_0019.jpg"
  },
  {
    "food_id": "food_000381",
    "name": "Vegetable Pasta",
    "category": "Pasta",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 11,
      "carbohydrates_g": 52,
      "fat_g": 8,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 38
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 6.5
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Italian_vegetable_pasta_in_Guido_%5E_Angelina_Restaurant_-_panoramio.jpg/250px-Italian_vegetable_pasta_in_Guido_%5E_Angelina_Restaurant_-_panoramio.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000382",
    "name": "Whole Wheat Pasta",
    "category": "Pasta",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 13,
      "carbohydrates_g": 56,
      "fat_g": 3,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/250px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000383",
    "name": "Pasta Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 9,
      "carbohydrates_g": 42,
      "fat_g": 11,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Pasta_salad_closeup.JPG/330px-Pasta_salad_closeup.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000384",
    "name": "Chicken Pasta",
    "category": "Pasta",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 32,
      "carbohydrates_g": 48,
      "fat_g": 13,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 37
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg/250px-%28Pasta%29_by_David_Adam_Kess_%28pic.2%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000385",
    "name": "Chicken Pasta Salad",
    "category": "Salad",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 30,
      "carbohydrates_g": 38,
      "fat_g": 13,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chicken_fettuccine_alfredo.JPG/250px-Chicken_fettuccine_alfredo.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000386",
    "name": "Pesto Pasta",
    "category": "Pasta",
    "type": "Vegetarian",
    "taste": "herby",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 11,
      "carbohydrates_g": 50,
      "fat_g": 19,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 38
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 15
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Shrimp_and_basil_pesto_pasta_1.jpg/250px-Shrimp_and_basil_pesto_pasta_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000387",
    "name": "Tomato Pasta",
    "category": "Pasta",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 290,
      "protein_g": 10,
      "carbohydrates_g": 52,
      "fat_g": 6,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 38
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Pasta_al_pomodoro_2.jpg/250px-Pasta_al_pomodoro_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000388",
    "name": "Arrabbiata Pasta",
    "category": "Pasta",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 10,
      "carbohydrates_g": 53,
      "fat_g": 7,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 39
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Penne_Arrabbiata.jpg/250px-Penne_Arrabbiata.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000389",
    "name": "Macaroni",
    "category": "Pasta",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 11,
      "carbohydrates_g": 62,
      "fat_g": 2,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 46
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 1.6
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Macaroni%2C_1863.jpg/250px-Macaroni%2C_1863.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000390",
    "name": "Vegetable Macaroni",
    "category": "Pasta",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 11,
      "carbohydrates_g": 55,
      "fat_g": 8,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 39
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 6.5
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Soijamakaronilaatikko.JPG/250px-Soijamakaronilaatikko.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000391",
    "name": "Egg Noodles",
    "category": "Noodles",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 10,
      "carbohydrates_g": 44,
      "fat_g": 7,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 34
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 5.5
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Egg_Noodles_2.jpg/250px-Egg_Noodles_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000392",
    "name": "Chicken Noodles",
    "category": "Noodles",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 27,
      "carbohydrates_g": 48,
      "fat_g": 11,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 36
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Chicken_with_Noodles_Soup_-_Noodles_Soup_2023-10-24.jpg/250px-Chicken_with_Noodles_Soup_-_Noodles_Soup_2023-10-24.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000393",
    "name": "Vegetable Noodles",
    "category": "Noodles",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 9,
      "carbohydrates_g": 53,
      "fat_g": 9,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 38
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Hot_Dry_Noodles.jpg/250px-Hot_Dry_Noodles.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000394",
    "name": "Hakka Noodles",
    "category": "Noodles",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 9,
      "carbohydrates_g": 55,
      "fat_g": 11,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 40
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Tasty_hakka_noodles_image.jpg/250px-Tasty_hakka_noodles_image.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000395",
    "name": "Stir Fry Noodles",
    "category": "Noodles",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 340,
      "protein_g": 9,
      "carbohydrates_g": 52,
      "fat_g": 11,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 37
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Prawn_Stir_Fry_Egg_Noodles_with_Dark_Soy_sauce_-_Tookta%27s_Thai_Food.jpg/250px-Prawn_Stir_Fry_Egg_Noodles_with_Dark_Soy_sauce_-_Tookta%27s_Thai_Food.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000396",
    "name": "Soba Noodles",
    "category": "Noodles",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 200,
      "protein_g": 8,
      "carbohydrates_g": 42,
      "fat_g": 1,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.8
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Soba-Noodles-Deliveryman-Tokyo-1935.png/250px-Soba-Noodles-Deliveryman-Tokyo-1935.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000397",
    "name": "Rice Noodles",
    "category": "Noodles",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 3.5,
      "carbohydrates_g": 43,
      "fat_g": 0.5,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 35
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.4
    },
    "protein": {
      "protein_g": 3.5
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Gluten Free"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Thick_rice_noodles_cooked_in_small_pot_in_Kunming_%2820210323074612%29.jpg/330px-Thick_rice_noodles_cooked_in_small_pot_in_Kunming_%2820210323074612%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000398",
    "name": "Chicken Stir Fry Noodles",
    "category": "Noodles",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 30,
      "carbohydrates_g": 48,
      "fat_g": 14,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 35
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Noodle_stir_fry_with_chicken%2C_shrimp%2C_and_broccoli_%2818471621051%29.jpg/330px-Noodle_stir_fry_with_chicken%2C_shrimp%2C_and_broccoli_%2818471621051%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000399",
    "name": "Chicken Pasta Bake",
    "category": "Pasta",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 32,
      "carbohydrates_g": 42,
      "fat_g": 17,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Baked_chicken_steak_pasta_with_tomato_sauce.jpg/250px-Baked_chicken_steak_pasta_with_tomato_sauce.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000400",
    "name": "Vegetable Pasta Bake",
    "category": "Pasta",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 14,
      "carbohydrates_g": 50,
      "fat_g": 14,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 35
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 14
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Pasta_con_verduras_-_Pasta_with_vegetables_%285125922136%29.jpg/250px-Pasta_con_verduras_-_Pasta_with_vegetables_%285125922136%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000401",
    "name": "Pizza",
    "category": "Pizza",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 13,
      "carbohydrates_g": 36,
      "fat_g": 14,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vegetarian_Pizza.jpg/250px-Vegetarian_Pizza.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000402",
    "name": "Paneer Pizza",
    "category": "Pizza",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 19,
      "carbohydrates_g": 37,
      "fat_g": 18,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 19
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vegetarian_Pizza.jpg/250px-Vegetarian_Pizza.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000403",
    "name": "Chicken Pizza",
    "category": "Pizza",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 380,
      "protein_g": 23,
      "carbohydrates_g": 36,
      "fat_g": 16,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 23
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Chicken_Pizza_1.jpg/250px-Chicken_Pizza_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000404",
    "name": "Margherita Pizza",
    "category": "Pizza",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 12,
      "carbohydrates_g": 35,
      "fat_g": 10,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Margherita_Originale.JPG/250px-Margherita_Originale.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000405",
    "name": "Vegetable Pizza",
    "category": "Pizza",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 170,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 12,
      "carbohydrates_g": 39,
      "fat_g": 12,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Vegetarian_Pizza.jpg/250px-Vegetarian_Pizza.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000406",
    "name": "Egg Pizza",
    "category": "Pizza",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 18,
      "carbohydrates_g": 36,
      "fat_g": 15,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Egg_on_pizza_%289514887%29.jpg/250px-Egg_on_pizza_%289514887%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000407",
    "name": "Chicken Burger",
    "category": "Burgers",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard burger"
    },
    "macronutrients": {
      "calories": 480,
      "protein_g": 28,
      "carbohydrates_g": 45,
      "fat_g": 21,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 29
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 15
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Chicken-burger-combo_%281%29.jpg/250px-Chicken-burger-combo_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000408",
    "name": "Veg Burger",
    "category": "Burgers",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard burger"
    },
    "macronutrients": {
      "calories": 380,
      "protein_g": 13,
      "carbohydrates_g": 48,
      "fat_g": 15,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 30
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Vegetable_Burger_of_Salem.jpg/120px-Vegetable_Burger_of_Salem.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000409",
    "name": "Paneer Burger",
    "category": "Burgers",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard burger"
    },
    "macronutrients": {
      "calories": 470,
      "protein_g": 22,
      "carbohydrates_g": 43,
      "fat_g": 24,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 11,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 22
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/NCI_Visuals_Food_Hamburger.jpg/330px-NCI_Visuals_Food_Hamburger.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000410",
    "name": "Turkey Burger",
    "category": "Burgers",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard burger"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 30,
      "carbohydrates_g": 43,
      "fat_g": 17,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Mar-a-Lago_Turkey_Burger_%284330642195%29.jpg/250px-Mar-a-Lago_Turkey_Burger_%284330642195%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000411",
    "name": "Chicken Kebab Roll",
    "category": "Rolls",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard roll"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 28,
      "carbohydrates_g": 42,
      "fat_g": 15,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 30
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:Shawarma_Chicken_Roll_at_Indiranagar,_Bangalore,_Karnatak.jpg"
  },
  {
    "food_id": "food_000412",
    "name": "Chicken Shawarma",
    "category": "Middle Eastern",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 32,
      "carbohydrates_g": 35,
      "fat_g": 18,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:Chicken_Shawarma.jpg"
  },
  {
    "food_id": "food_000413",
    "name": "Chicken Shawarma Wrap",
    "category": "Wraps",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard wrap"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 31,
      "carbohydrates_g": 45,
      "fat_g": 17,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 31
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:Chicken_Shawarma_Wrap_-_Lavash_2024-09-11.jpg"
  },
  {
    "food_id": "food_000414",
    "name": "Paneer Shawarma",
    "category": "Middle Eastern Fusion",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 460,
      "protein_g": 22,
      "carbohydrates_g": 40,
      "fat_g": 24,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 10,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 22
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Shawrma_Roll_%282%29.jpg/120px-Shawrma_Roll_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000415",
    "name": "Falafel Shawarma",
    "category": "Middle Eastern",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 15,
      "carbohydrates_g": 53,
      "fat_g": 17,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 32
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/20171231-203208-falafel-shawarma-shop-ramat-gan-december-2017.jpg/330px-20171231-203208-falafel-shawarma-shop-ramat-gan-december-2017.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000416",
    "name": "Chicken Fajita",
    "category": "Mexican",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 360,
      "protein_g": 32,
      "carbohydrates_g": 24,
      "fat_g": 16,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 11
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Chicken_fajitas_-_La_Hacienda_-_Sarah_Stierch.jpg/250px-Chicken_fajitas_-_La_Hacienda_-_Sarah_Stierch.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000417",
    "name": "Chicken Quesadilla",
    "category": "Mexican",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard quesadilla"
    },
    "macronutrients": {
      "calories": 500,
      "protein_g": 32,
      "carbohydrates_g": 38,
      "fat_g": 25,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 11,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/File:Chicken_quesadilla_1.jpg"
  },
  {
    "food_id": "food_000418",
    "name": "Bean Quesadilla",
    "category": "Mexican",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard quesadilla"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 17,
      "carbohydrates_g": 52,
      "fat_g": 16,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 32
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Carnitas_and_Black_Bean_Quesadilla%2C_Key_West_Florida_2022.jpg/250px-Carnitas_and_Black_Bean_Quesadilla%2C_Key_West_Florida_2022.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000419",
    "name": "Paneer Quesadilla",
    "category": "Mexican Fusion",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard quesadilla"
    },
    "macronutrients": {
      "calories": 490,
      "protein_g": 25,
      "carbohydrates_g": 39,
      "fat_g": 27,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 13,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/L_Casa_del_Pan_vegetarian_quesadillas.jpg/330px-L_Casa_del_Pan_vegetarian_quesadillas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000420",
    "name": "Egg Quesadilla",
    "category": "Mexican Fusion",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard quesadilla"
    },
    "macronutrients": {
      "calories": 440,
      "protein_g": 22,
      "carbohydrates_g": 38,
      "fat_g": 23,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 22
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Black_truffle_quesadilla_with_a_fried_duck_egg%2C_black_summer_truffles%2C_Oaxacan_cheese%2C_olive_oil.jpg/250px-Black_truffle_quesadilla_with_a_fried_duck_egg%2C_black_summer_truffles%2C_Oaxacan_cheese%2C_olive_oil.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000421",
    "name": "Chicken Burrito",
    "category": "Mexican",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard burrito"
    },
    "macronutrients": {
      "calories": 520,
      "protein_g": 32,
      "carbohydrates_g": 55,
      "fat_g": 18,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 36
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/La_Casa_Restaurant_-_2021-07-04_-_Sarah_Stierch_03.jpg/250px-La_Casa_Restaurant_-_2021-07-04_-_Sarah_Stierch_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000422",
    "name": "Bean Burrito",
    "category": "Mexican",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 280,
      "unit": "g",
      "description": "1 standard burrito"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 17,
      "carbohydrates_g": 65,
      "fat_g": 14,
      "fiber_g": 11
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Burrito_chihuahuense_de_chile_verde.jpg/500px-Burrito_chihuahuense_de_chile_verde.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000423",
    "name": "Paneer Burrito",
    "category": "Mexican Fusion",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard burrito"
    },
    "macronutrients": {
      "calories": 560,
      "protein_g": 25,
      "carbohydrates_g": 53,
      "fat_g": 27,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 35
    },
    "fat": {
      "saturated_g": 13,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Julinek_park_burrito_papas_pan_frytka.jpg/330px-Julinek_park_burrito_papas_pan_frytka.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000424",
    "name": "Burrito Bowl",
    "category": "Mexican",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 480,
      "protein_g": 18,
      "carbohydrates_g": 65,
      "fat_g": 16,
      "fiber_g": 10
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 42
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Steak_burrito_bowl_at_La_Casa_Restaurant_in_Sonoma%2C_California_-_Sarah_Stierch_03.jpg/250px-Steak_burrito_bowl_at_La_Casa_Restaurant_in_Sonoma%2C_California_-_Sarah_Stierch_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000425",
    "name": "Chicken Tacos",
    "category": "Mexican",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "2 to 3 standard tacos"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 29,
      "carbohydrates_g": 35,
      "fat_g": 14,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 23
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 29
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/250px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000426",
    "name": "Bean Tacos",
    "category": "Mexican",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "2 to 3 standard tacos"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 14,
      "carbohydrates_g": 50,
      "fat_g": 11,
      "fiber_g": 10
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 14
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Vegetables_and_Black_Bean_Tacos_%287212559656%29.jpg/330px-Vegetables_and_Black_Bean_Tacos_%287212559656%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000427",
    "name": "Paneer Tacos",
    "category": "Mexican Fusion",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "2 to 3 standard tacos"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 22,
      "carbohydrates_g": 34,
      "fat_g": 23,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 11,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 22
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Taco_Truck_St_Louis_MO.jpg/250px-Taco_Truck_St_Louis_MO.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000428",
    "name": "Egg Tacos",
    "category": "Mexican Fusion",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "2 to 3 standard tacos"
    },
    "macronutrients": {
      "calories": 380,
      "protein_g": 19,
      "carbohydrates_g": 35,
      "fat_g": 17,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 19
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Egg_waffle_taco_meat_burger.jpg/250px-Egg_waffle_taco_meat_burger.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000429",
    "name": "Chicken Nachos",
    "category": "Mexican Snacks",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 550,
      "protein_g": 27,
      "carbohydrates_g": 48,
      "fat_g": 27,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 10,
      "unsaturated_g": 17
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Chicken_and_black_bean_nachos_food.jpg/250px-Chicken_and_black_bean_nachos_food.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000430",
    "name": "Bean Nachos",
    "category": "Mexican Snacks",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 520,
      "protein_g": 18,
      "carbohydrates_g": 58,
      "fat_g": 24,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 38
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 15
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Chicken_and_black_bean_nachos_food.jpg/250px-Chicken_and_black_bean_nachos_food.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000431",
    "name": "Idli Sambar",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "2 to 3 idlis with sambar"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 9,
      "carbohydrates_g": 43,
      "fat_g": 4,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 30
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 3.3
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Idli_Sambar-Noida-UP-SP004.jpg/330px-Idli_Sambar-Noida-UP-SP004.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000432",
    "name": "Rava Idli",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "2 to 3 standard idlis"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 6,
      "carbohydrates_g": 35,
      "fat_g": 6,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/MTR_Rava_Idli.jpg/250px-MTR_Rava_Idli.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000433",
    "name": "Masala Idli",
    "category": "South Indian",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "3 to 4 standard idlis"
    },
    "macronutrients": {
      "calories": 250,
      "protein_g": 7,
      "carbohydrates_g": 43,
      "fat_g": 6,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Masala_Idli_with_Chai.JPG/330px-Masala_Idli_with_Chai.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000434",
    "name": "Egg Bhurji",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "2 to 3 eggs with vegetables"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 15,
      "carbohydrates_g": 7,
      "fat_g": 16,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 11.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Spicy_egg_bhurji_%40_the_eggfactory.jpg/330px-Spicy_egg_bhurji_%40_the_eggfactory.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000435",
    "name": "Egg Curry",
    "category": "Indian Curries",
    "type": "Egg",
    "taste": "spicy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "2 eggs with curry"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 16,
      "carbohydrates_g": 12,
      "fat_g": 19,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Indian",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Spicy_Anda_Curry.jpg/330px-Spicy_Anda_Curry.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000436",
    "name": "Egg Masala",
    "category": "Indian Egg Dishes",
    "type": "Egg",
    "taste": "spicy",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "2 eggs with masala"
    },
    "macronutrients": {
      "calories": 260,
      "protein_g": 16,
      "carbohydrates_g": 10,
      "fat_g": 18,
      "fiber_g": 2.5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 13.5
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb",
      "Indian",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Indian_Omelette_Odisha.jpg/250px-Indian_Omelette_Odisha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000437",
    "name": "Egg Omelette",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 120,
      "unit": "g",
      "description": "2 to 3 egg omelette"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 14,
      "carbohydrates_g": 2,
      "fat_g": 14,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 0.2
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 14
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Dashimaki_tamago_and_teapot_by_yajico_in_Ebisu%2C_Tokyo.jpg/250px-Dashimaki_tamago_and_teapot_by_yajico_in_Ebisu%2C_Tokyo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000438",
    "name": "Masala Omelette",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "spicy",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "2 to 3 egg omelette with vegetables"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 15,
      "carbohydrates_g": 6,
      "fat_g": 16,
      "fiber_g": 1.5
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 11.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb",
      "Indian",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Indian_Omelette_Odisha.jpg/250px-Indian_Omelette_Odisha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000439",
    "name": "Vegetable Omelette",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 160,
      "unit": "g",
      "description": "2 to 3 egg omelette with vegetables"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 15,
      "carbohydrates_g": 8,
      "fat_g": 14,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch"
    ],
    "diet_tags": [
      "High Protein",
      "High Fiber",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Ejjeh.jpg/250px-Ejjeh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000440",
    "name": "Cheese Omelette",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 160,
      "unit": "g",
      "description": "2 to 3 egg omelette with cheese"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 20,
      "carbohydrates_g": 3,
      "fat_g": 23,
      "fiber_g": 0.5
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 0.2
    },
    "fat": {
      "saturated_g": 11,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Cheese_%26_Mushroom_Omelette_-_The_Bystander_Cafe_2023-08-07.jpg/250px-Cheese_%26_Mushroom_Omelette_-_The_Bystander_Cafe_2023-08-07.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000441",
    "name": "Chicken Omelette",
    "category": "Egg Dishes",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "1 standard omelette"
    },
    "macronutrients": {
      "calories": 290,
      "protein_g": 28,
      "carbohydrates_g": 4,
      "fat_g": 18,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 1.5,
      "starch_g": 0.5
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Chicken_cheese_omelette_chips_salad_Enjoy_Cafe_Tottenham_High_Road_Haringey_London_England.jpg/250px-Chicken_cheese_omelette_chips_salad_Enjoy_Cafe_Tottenham_High_Road_Haringey_London_England.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000442",
    "name": "Egg Bhurji Roll",
    "category": "Rolls",
    "type": "Egg",
    "taste": "spicy",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard roll"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 19,
      "carbohydrates_g": 42,
      "fat_g": 17,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 19
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "High Protein",
      "Indian",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://androidpctv.com/wp-content/uploads/2020/03/Lemfo-S20-smartwatch.jpg"
  },
  {
    "food_id": "food_000443",
    "name": "Egg Bhurji Sandwich",
    "category": "Sandwiches",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 360,
      "protein_g": 20,
      "carbohydrates_g": 38,
      "fat_g": 15,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 10.5
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://i.pinimg.com/originals/f4/47/4d/f4474d54241ac09d80be6b2e37122f40.jpg"
  },
  {
    "food_id": "food_000444",
    "name": "Egg Salad Sandwich",
    "category": "Sandwiches",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard sandwich"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 19,
      "carbohydrates_g": 38,
      "fat_g": 19,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 19
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Egg_Sandwich.jpg/330px-Egg_Sandwich.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000445",
    "name": "Egg Toast",
    "category": "Breakfast",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 260,
      "protein_g": 15,
      "carbohydrates_g": 27,
      "fat_g": 10,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Cinnamon_French_Toast%2C_2_eggs_scrambled%2C_and_a_sweet_potato_pancake_at_Mason%27s_Grill%2C_Baton_Rouge.jpg/250px-Cinnamon_French_Toast%2C_2_eggs_scrambled%2C_and_a_sweet_potato_pancake_at_Mason%27s_Grill%2C_Baton_Rouge.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000446",
    "name": "Boiled Egg Chaat",
    "category": "Indian Snacks",
    "type": "Egg",
    "taste": "tangy",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "2 boiled eggs with chaat toppings"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 14,
      "carbohydrates_g": 8,
      "fat_g": 14,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 14
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://live.staticflickr.com/5640/22621981904_5217f40972_b.jpg"
  },
  {
    "food_id": "food_000447",
    "name": "Egg Chaat",
    "category": "Indian Snacks",
    "type": "Egg",
    "taste": "tangy",
    "serving_size": {
      "amount": 160,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 15,
      "carbohydrates_g": 10,
      "fat_g": 15,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "High Protein",
      "Indian",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://live.staticflickr.com/5640/22621981904_5217f40972_b.jpg"
  },
  {
    "food_id": "food_000448",
    "name": "Egg Pulao",
    "category": "Rice Dishes",
    "type": "Egg",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 440,
      "protein_g": 18,
      "carbohydrates_g": 58,
      "fat_g": 15,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 11.5
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pulao_and_Egg_Curry.jpg/330px-Pulao_and_Egg_Curry.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000449",
    "name": "Egg Biryani",
    "category": "Rice Dishes",
    "type": "Egg",
    "taste": "spicy",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 500,
      "protein_g": 20,
      "carbohydrates_g": 65,
      "fat_g": 17,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 48
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Indian",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Egg_Biryani_in_a_restaurant.jpg/120px-Egg_Biryani_in_a_restaurant.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000450",
    "name": "Egg Curry Rice",
    "category": "Rice Dishes",
    "type": "Egg",
    "taste": "spicy",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 520,
      "protein_g": 20,
      "carbohydrates_g": 68,
      "fat_g": 17,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 50
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 12.5
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Indian",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Spicy_Anda_Curry.jpg/330px-Spicy_Anda_Curry.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000451",
    "name": "Egg Fried Rice",
    "category": "Rice Dishes",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 17,
      "carbohydrates_g": 58,
      "fat_g": 17,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 13.5
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Fried_rice_with_chicken_and_egg.jpg/250px-Fried_rice_with_chicken_and_egg.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000452",
    "name": "Shakshuka",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 17,
      "carbohydrates_g": 16,
      "fat_g": 17,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "High Fiber",
      "Low Carb",
      "Spicy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Shakshuka_by_Calliopejen1.jpg/250px-Shakshuka_by_Calliopejen1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000453",
    "name": "Poached Eggs",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "mild",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "2 standard poached eggs"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 13,
      "carbohydrates_g": 1,
      "fat_g": 10,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 3.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Lunch"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Poached_egg_and_spaghetti.jpg/250px-Poached_egg_and_spaghetti.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000454",
    "name": "Scrambled Eggs",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "3 standard scrambled eggs"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 19,
      "carbohydrates_g": 2,
      "fat_g": 15,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 10.5
    },
    "protein": {
      "protein_g": 19
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Scrambled_eggs_with_basil.jpg/250px-Scrambled_eggs_with_basil.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000455",
    "name": "Sunny Side Up Eggs",
    "category": "Egg Dishes",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 120,
      "unit": "g",
      "description": "2 standard eggs"
    },
    "macronutrients": {
      "calories": 200,
      "protein_g": 13,
      "carbohydrates_g": 1,
      "fat_g": 16,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Lunch"
    ],
    "diet_tags": [
      "High Protein",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Fried_egg_sunny_side_up_2.jpg/250px-Fried_egg_sunny_side_up_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000456",
    "name": "French Toast",
    "category": "Breakfast",
    "type": "Egg",
    "taste": "sweet",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "2 standard slices"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 12,
      "carbohydrates_g": 42,
      "fat_g": 10,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 9,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/French_toast_001.jpg/330px-French_toast_001.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000457",
    "name": "Protein French Toast",
    "category": "High Protein Breakfast",
    "type": "Egg",
    "taste": "sweet",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "2 to 3 protein-enriched slices"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 28,
      "carbohydrates_g": 35,
      "fat_g": 10,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Breakfast",
      "Post-Workout"
    ],
    "diet_tags": [
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/The_Boston_Cooking_School_magazine_of_culinary_science_and_domestic_economics_%281913%29_%2814798394553%29.jpg/330px-The_Boston_Cooking_School_magazine_of_culinary_science_and_domestic_economics_%281913%29_%2814798394553%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000458",
    "name": "Paneer Bhurji",
    "category": "Paneer Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 20,
      "carbohydrates_g": 10,
      "fat_g": 23,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 14,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Indian",
      "Low Carb"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Homemade_Paneer_Bhurji_cooked_in_pan_India.jpg/250px-Homemade_Paneer_Bhurji_cooked_in_pan_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000459",
    "name": "Paneer Stuffed Chilla",
    "category": "Indian Breakfast",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "2 standard stuffed chillas"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 20,
      "carbohydrates_g": 35,
      "fat_g": 15,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 8,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://governmentph.com/wp-content/uploads/2026/01/Salary-Grade-2026-Third-Tranche.png"
  },
  {
    "food_id": "food_000460",
    "name": "Vegetable Chilla",
    "category": "Indian Breakfast",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "2 standard vegetable chillas"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 10,
      "carbohydrates_g": 34,
      "fat_g": 7,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/ClubSandwich_Daffodils23_Mumbai.jpg/250px-ClubSandwich_Daffodils23_Mumbai.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000461",
    "name": "Protein Chilla",
    "category": "Indian Breakfast",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "2 standard protein chillas"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 20,
      "carbohydrates_g": 30,
      "fat_g": 8,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 19
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://wallpaperbat.com/img/30310694-hanuman-ji-angry-phone-wallpaper-4k.jpg"
  },
  {
    "food_id": "food_000462",
    "name": "Moong Sprout Chaat",
    "category": "Indian Snacks",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 10,
      "carbohydrates_g": 25,
      "fat_g": 2.5,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 2.1
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Lunch"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Moong_Chaat.JPG/250px-Moong_Chaat.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000463",
    "name": "Boiled Moong",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 160,
      "protein_g": 10.5,
      "carbohydrates_g": 28,
      "fat_g": 0.8,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 18
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.6
    },
    "protein": {
      "protein_g": 10.5
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Payasa-_home_Bangalore-Karnataka-pic_16_Bisu.jpg/250px-Payasa-_home_Bangalore-Karnataka-pic_16_Bisu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000464",
    "name": "Boiled Rajma",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 13,
      "carbohydrates_g": 34,
      "fat_g": 0.8,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.6
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Rajma_Chawal%2C_from_India.jpg/250px-Rajma_Chawal%2C_from_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000465",
    "name": "Boiled Black Chana",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 13,
      "carbohydrates_g": 40,
      "fat_g": 4,
      "fiber_g": 10
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/DRY_KALA_CHANA_MASALA.jpg/250px-DRY_KALA_CHANA_MASALA.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000466",
    "name": "Boiled Green Peas",
    "category": "Legumes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 125,
      "protein_g": 8,
      "carbohydrates_g": 22,
      "fat_g": 0.6,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 9,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.5
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Boiled_green_peas.jpg/250px-Boiled_green_peas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000467",
    "name": "Boiled Edamame",
    "category": "Soy Foods",
    "type": "Vegetarian",
    "taste": "nutty",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 17,
      "carbohydrates_g": 14,
      "fat_g": 8,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Boiling_edamame_by_jonl.jpg/250px-Boiling_edamame_by_jonl.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000468",
    "name": "Edamame Salad",
    "category": "Salad",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 17,
      "carbohydrates_g": 20,
      "fat_g": 10,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 8.8
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Corn_And_Edamame_Sesame_Salad_%28140491193%29.jpeg/330px-Corn_And_Edamame_Sesame_Salad_%28140491193%29.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000469",
    "name": "Edamame Bowl",
    "category": "Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 23,
      "carbohydrates_g": 48,
      "fat_g": 12,
      "fiber_g": 10
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 29
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 10.5
    },
    "protein": {
      "protein_g": 23
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Edamame_bowl_by_habitatgirl.jpg/250px-Edamame_bowl_by_habitatgirl.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000470",
    "name": "Edamame Stir Fry",
    "category": "Soy Foods",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 270,
      "protein_g": 18,
      "carbohydrates_g": 20,
      "fat_g": 14,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Asparagus_Stir_Fry_%2849765791966%29.jpg/330px-Asparagus_Stir_Fry_%2849765791966%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000471",
    "name": "Soya Keema",
    "category": "Soy Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 260,
      "protein_g": 24,
      "carbohydrates_g": 18,
      "fat_g": 10,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 8
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Ghee_Roast_Soya_Keema_with_Mini_Parathas.jpg/250px-Ghee_Roast_Soya_Keema_with_Mini_Parathas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000472",
    "name": "Soy Keema Paratha",
    "category": "Indian Breads",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "2 standard parathas"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 24,
      "carbohydrates_g": 48,
      "fat_g": 15,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 30
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Ghee_Roast_Soya_Keema_with_Mini_Parathas.jpg/250px-Ghee_Roast_Soya_Keema_with_Mini_Parathas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000473",
    "name": "Soy Keema Roll",
    "category": "Rolls",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard roll"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 25,
      "carbohydrates_g": 43,
      "fat_g": 12,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://gahag.net/img/201605/21s/gahag-0088360481-1.jpg"
  },
  {
    "food_id": "food_000474",
    "name": "Soy Keema Rice",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 440,
      "protein_g": 25,
      "carbohydrates_g": 61,
      "fat_g": 10,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://www.101dogbreeds.com/wp-content/uploads/2023/01/Big-Dog-Breeds.jpg"
  },
  {
    "food_id": "food_000475",
    "name": "Soya Chunks Pulao",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 25,
      "carbohydrates_g": 60,
      "fat_g": 9,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 7.8
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Soya_Curry_with_Matar_rice_and_Gulab_Jamun.jpg/250px-Soya_Curry_with_Matar_rice_and_Gulab_Jamun.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000476",
    "name": "Protein Pancakes",
    "category": "Pancakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "2 to 3 standard pancakes"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 25,
      "carbohydrates_g": 35,
      "fat_g": 10,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 22
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Protein_pancakes%2C_no_carbs.jpg/250px-Protein_pancakes%2C_no_carbs.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000477",
    "name": "Oat Pancakes",
    "category": "Pancakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "2 to 3 standard pancakes"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 11,
      "carbohydrates_g": 46,
      "fat_g": 9,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Staffordshire_oatcake_breakfast.jpg/120px-Staffordshire_oatcake_breakfast.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000478",
    "name": "Banana Pancakes",
    "category": "Pancakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "2 to 3 standard pancakes"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 9,
      "carbohydrates_g": 55,
      "fat_g": 9,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Energy Rich"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Banana_pancakes_Gili_Trawangan.JPG/250px-Banana_pancakes_Gili_Trawangan.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000479",
    "name": "Banana Oat Pancakes",
    "category": "Pancakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "2 to 3 standard pancakes"
    },
    "macronutrients": {
      "calories": 340,
      "protein_g": 11,
      "carbohydrates_g": 52,
      "fat_g": 10,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 15,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://i.ytimg.com/vi/JcH1fi6kCzs/maxresdefault.jpg"
  },
  {
    "food_id": "food_000480",
    "name": "Protein Waffles",
    "category": "Waffles",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "2 standard protein waffles"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 27,
      "carbohydrates_g": 32,
      "fat_g": 12,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 21
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/MakMaster_FontError.jpeg/250px-MakMaster_FontError.jpeg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000481",
    "name": "Oat Waffles",
    "category": "Waffles",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 180,
      "unit": "g",
      "description": "2 standard waffles"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 11,
      "carbohydrates_g": 48,
      "fat_g": 9,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 29
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 7
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Red_fife_%26_rolled_oat_waffles_%288650303137%29.jpg/250px-Red_fife_%26_rolled_oat_waffles_%288650303137%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000482",
    "name": "Protein Muffins",
    "category": "Baked Goods",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard muffin"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 18,
      "carbohydrates_g": 30,
      "fat_g": 9,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 10,
      "starch_g": 17
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 6.5
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg/250px-Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000483",
    "name": "Protein Brownie",
    "category": "Desserts",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard brownie"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 18,
      "carbohydrates_g": 30,
      "fat_g": 12,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 14
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": false,
    "image_url": "https://wallpapercave.com/wp/wp10759998.jpg"
  },
  {
    "food_id": "food_000484",
    "name": "Protein Cookies",
    "category": "Baked Goods",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 60,
      "unit": "g",
      "description": "2 standard cookies"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 12,
      "carbohydrates_g": 25,
      "fat_g": 11,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 9,
      "starch_g": 13
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 12
    },
    "meal_type": [
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/John_Abraham_graces_the_launch_of_Sofit_Protein_Cookies.jpg/250px-John_Abraham_graces_the_launch_of_Sofit_Protein_Cookies.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000485",
    "name": "Protein Bars",
    "category": "Protein Snacks",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 60,
      "unit": "g",
      "description": "1 standard bar"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 20,
      "carbohydrates_g": 22,
      "fat_g": 7,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 8
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Three_protein_bars.jpg/250px-Three_protein_bars.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000486",
    "name": "Energy Balls",
    "category": "Energy Snacks",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 80,
      "unit": "g",
      "description": "3 to 4 standard energy balls"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 8,
      "carbohydrates_g": 35,
      "fat_g": 15,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Energy"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Newtons_cradle_animation_book.gif/250px-Newtons_cradle_animation_book.gif?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000487",
    "name": "Date Energy Balls",
    "category": "Energy Snacks",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 80,
      "unit": "g",
      "description": "3 to 4 standard energy balls"
    },
    "macronutrients": {
      "calories": 290,
      "protein_g": 5,
      "carbohydrates_g": 43,
      "fat_g": 11,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 30,
      "starch_g": 6
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 5
    },
    "meal_type": [
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Natural Sweetener"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Raw-energy-balls_%2849658797242%29.jpg/250px-Raw-energy-balls_%2849658797242%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000488",
    "name": "Peanut Energy Balls",
    "category": "Energy Snacks",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 80,
      "unit": "g",
      "description": "3 to 4 standard energy balls"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 11,
      "carbohydrates_g": 28,
      "fat_g": 22,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 18
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Healthy Fats"
    ],
    "is_common_food": true,
    "image_url": "https://www.thevistaara.com/images/trekking_highlight.webp"
  },
  {
    "food_id": "food_000489",
    "name": "Oat Energy Balls",
    "category": "Energy Snacks",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 80,
      "unit": "g",
      "description": "3 to 4 standard energy balls"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 8,
      "carbohydrates_g": 37,
      "fat_g": 14,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 15,
      "starch_g": 14
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Snack",
      "Breakfast"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://image.slidesdocs.com/responsive-images/docs/mockup-of-a-wedding-invitation-with-floral-design-page-border-background-word-template_4f08b6ac1e__1131_1600.jpg"
  },
  {
    "food_id": "food_000490",
    "name": "Greek Yogurt Bowl",
    "category": "Yogurt Bowls",
    "type": "Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 20,
      "carbohydrates_g": 15,
      "fat_g": 5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 10,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Kid_friendly_green_smoothie_in_a_personalized_glass_with_spinach%2C_Greek_yogurt%2C_frozen_blueberries%2C_blackberries_and_strawberries_and_berries%2C_banana_in_a_glass_bowl_on_a_wood_table_%2816225943125%29.jpg/330px-thumbnail.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000491",
    "name": "Protein Yogurt Bowl",
    "category": "Yogurt Bowls",
    "type": "Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 30,
      "carbohydrates_g": 24,
      "fat_g": 8,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 4.5
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://1.bp.blogspot.com/-m7wF7-vMr5g/UrVAIPqO-fI/AAAAAAAAC7A/Zqr8-Ln94ec/s1600/amaging+car+wallpaper.jpg"
  },
  {
    "food_id": "food_000492",
    "name": "Protein Pudding",
    "category": "Protein Desserts",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 25,
      "carbohydrates_g": 12,
      "fat_g": 4,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Snack",
      "Dessert",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Protein_pudding_and_coffee.jpg/250px-Protein_pudding_and_coffee.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000493",
    "name": "Chocolate Protein Pudding",
    "category": "Protein Desserts",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 200,
      "protein_g": 25,
      "carbohydrates_g": 15,
      "fat_g": 5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Snack",
      "Dessert",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/020260501_Chocolate-covered_strawberries.jpg/250px-020260501_Chocolate-covered_strawberries.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000494",
    "name": "Vanilla Protein Pudding",
    "category": "Protein Desserts",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 25,
      "carbohydrates_g": 13,
      "fat_g": 4,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Snack",
      "Dessert",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://statico.profootballnetwork.com/wp-content/uploads/2023/11/20082558/philadelphia-eagles-kansas-city-chiefs-injury-update-nfl-week-11-caplan-2023.jpg"
  },
  {
    "food_id": "food_000495",
    "name": "Protein Chia Pudding",
    "category": "Puddings",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 220,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 260,
      "protein_g": 24,
      "carbohydrates_g": 20,
      "fat_g": 11,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Healthy Fats"
    ],
    "is_common_food": false,
    "image_url": "https://3.bp.blogspot.com/-ksUe299zFhU/UEfVwc510RI/AAAAAAAAMx4/dH3lRddoH4Q/s1600/the_new_dragon_ghoul_by_sparks220stars-d58kkc6.png"
  },
  {
    "food_id": "food_000496",
    "name": "Casein Pudding",
    "category": "Protein Desserts",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 28,
      "carbohydrates_g": 12,
      "fat_g": 4,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Snack",
      "Dessert",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Slow Digesting Protein"
    ],
    "is_common_food": false,
    "image_url": "https://static.mercdn.net/item/detail/orig/photos/m21633264939_1.jpg?1673127720"
  },
  {
    "food_id": "food_000497",
    "name": "Whey Protein",
    "category": "Protein Supplements",
    "type": "Vegetarian",
    "taste": "neutral",
    "serving_size": {
      "amount": 30,
      "unit": "g",
      "description": "1 standard scoop"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 24,
      "carbohydrates_g": 3,
      "fat_g": 2,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 1
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Prote%C3%ADna_de_suero_de_leche.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
  },
  {
    "food_id": "food_000498",
    "name": "Whey Protein Isolate",
    "category": "Protein Supplements",
    "type": "Vegetarian",
    "taste": "neutral",
    "serving_size": {
      "amount": 30,
      "unit": "g",
      "description": "1 standard scoop"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 27,
      "carbohydrates_g": 1,
      "fat_g": 0.5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.3
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Low Carb",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Prote%C3%ADna_de_suero_de_leche.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
  },
  {
    "food_id": "food_000499",
    "name": "Whey Protein Concentrate",
    "category": "Protein Supplements",
    "type": "Vegetarian",
    "taste": "neutral",
    "serving_size": {
      "amount": 30,
      "unit": "g",
      "description": "1 standard scoop"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 24,
      "carbohydrates_g": 3,
      "fat_g": 2,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 1
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/7/7c/Prote%C3%ADna_de_suero_de_leche.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled"
  },
  {
    "food_id": "food_000500",
    "name": "Casein Protein",
    "category": "Protein Supplements",
    "type": "Vegetarian",
    "taste": "neutral",
    "serving_size": {
      "amount": 30,
      "unit": "g",
      "description": "1 standard scoop"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 24,
      "carbohydrates_g": 3,
      "fat_g": 1,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 0.5
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Slow Digesting Protein",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Casein.jpg/120px-Casein.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000501",
    "name": "Plant Protein Powder",
    "category": "Protein Supplements",
    "type": "Vegan",
    "taste": "neutral",
    "serving_size": {
      "amount": 30,
      "unit": "g",
      "description": "1 standard scoop"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 23,
      "carbohydrates_g": 4,
      "fat_g": 2,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 1,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 23
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegan",
      "High Protein",
      "Plant Based",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Protein_Powder_Mix_%2844547187900%29.jpg/330px-Protein_Powder_Mix_%2844547187900%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000502",
    "name": "Pea Protein",
    "category": "Protein Supplements",
    "type": "Vegan",
    "taste": "neutral",
    "serving_size": {
      "amount": 30,
      "unit": "g",
      "description": "1 standard scoop"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 24,
      "carbohydrates_g": 2,
      "fat_g": 2,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 0.5
    },
    "fat": {
      "saturated_g": 0.4,
      "unsaturated_g": 1.6
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegan",
      "High Protein",
      "Plant Based",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Chocolate_Pea_Protein_Powder.jpg/250px-Chocolate_Pea_Protein_Powder.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000503",
    "name": "Soy Protein Powder",
    "category": "Protein Supplements",
    "type": "Vegan",
    "taste": "neutral",
    "serving_size": {
      "amount": 30,
      "unit": "g",
      "description": "1 standard scoop"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 25,
      "carbohydrates_g": 2,
      "fat_g": 1,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 0.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.8
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegan",
      "High Protein",
      "Plant Based",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg/250px-Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000504",
    "name": "Rice Protein",
    "category": "Protein Supplements",
    "type": "Vegan",
    "taste": "neutral",
    "serving_size": {
      "amount": 30,
      "unit": "g",
      "description": "1 standard scoop"
    },
    "macronutrients": {
      "calories": 115,
      "protein_g": 24,
      "carbohydrates_g": 3,
      "fat_g": 1.5,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.3,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegan",
      "High Protein",
      "Plant Based",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Chicken_Gravy_%22Jhol%22.jpg/250px-Chicken_Gravy_%22Jhol%22.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000505",
    "name": "Mass Gainer",
    "category": "Sports Supplements",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 100,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 380,
      "protein_g": 20,
      "carbohydrates_g": 65,
      "fat_g": 5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 45
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Calorie",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Grady_Gaines_and_The_Texas_Upsetters_%2821787070379%29.jpg/330px-Grady_Gaines_and_The_Texas_Upsetters_%2821787070379%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000506",
    "name": "Creatine Monohydrate",
    "category": "Sports Supplements",
    "type": "Vegetarian",
    "taste": "neutral",
    "serving_size": {
      "amount": 5,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 0,
      "protein_g": 0,
      "carbohydrates_g": 0,
      "fat_g": 0,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0
    },
    "protein": {
      "protein_g": 0
    },
    "meal_type": [
      "Post-Workout",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Performance Supplement",
      "Workout Supplement"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Creatine_monohydrate_supplement.jpg/250px-Creatine_monohydrate_supplement.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000507",
    "name": "BCAA",
    "category": "Sports Supplements",
    "type": "Vegetarian",
    "taste": "neutral",
    "serving_size": {
      "amount": 10,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 40,
      "protein_g": 10,
      "carbohydrates_g": 0,
      "fat_g": 0,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Pre-Workout",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "Workout Supplement",
      "Amino Acids"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Standard_Pr%C3%A4parate_von_BCAA_%28%2B_Vitamin_B6%29_2014-07-01_21-18.jpg/120px-Standard_Pr%C3%A4parate_von_BCAA_%28%2B_Vitamin_B6%29_2014-07-01_21-18.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000508",
    "name": "EAA",
    "category": "Sports Supplements",
    "type": "Vegetarian",
    "taste": "neutral",
    "serving_size": {
      "amount": 10,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 40,
      "protein_g": 10,
      "carbohydrates_g": 0,
      "fat_g": 0,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Pre-Workout",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "Workout Supplement",
      "Amino Acids"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Ecluses_de_la_Vallee_du_Malvran_-_Les_Travaux_Publics_de_la_France_Bis.jpg/250px-Ecluses_de_la_Vallee_du_Malvran_-_Les_Travaux_Publics_de_la_France_Bis.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000509",
    "name": "Pre Workout",
    "category": "Sports Supplements",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 15,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 20,
      "protein_g": 0,
      "carbohydrates_g": 4,
      "fat_g": 0,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0
    },
    "protein": {
      "protein_g": 0
    },
    "meal_type": [
      "Pre-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "Workout Supplement",
      "Pre Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adonis_Men%27s_Pre-workout.jpg/250px-Adonis_Men%27s_Pre-workout.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000510",
    "name": "Electrolyte Powder",
    "category": "Sports Supplements",
    "type": "Vegetarian",
    "taste": "salty",
    "serving_size": {
      "amount": 10,
      "unit": "g",
      "description": "1 standard serving mixed with water"
    },
    "macronutrients": {
      "calories": 25,
      "protein_g": 0,
      "carbohydrates_g": 6,
      "fat_g": 0,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0,
      "unsaturated_g": 0
    },
    "protein": {
      "protein_g": 0
    },
    "meal_type": [
      "Pre-Workout",
      "Post-Workout",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Hydration",
      "Electrolytes",
      "Workout Supplement"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Zinc_powder_particles_obtained_by_electroextraction.jpg/250px-Zinc_powder_particles_obtained_by_electroextraction.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000511",
    "name": "Protein Shake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 350,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 25,
      "carbohydrates_g": 20,
      "fat_g": 5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 10,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Protein_shake.jpg/250px-Protein_shake.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000512",
    "name": "Whey Protein Shake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 350,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 28,
      "carbohydrates_g": 18,
      "fat_g": 5,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 9,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg/250px-Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000513",
    "name": "Casein Shake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 350,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 220,
      "protein_g": 27,
      "carbohydrates_g": 18,
      "fat_g": 5,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 9,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Slow Digesting Protein"
    ],
    "is_common_food": false,
    "image_url": "https://periodictable.me/wp-content/uploads/2018/08/periodic-table-full-names-and-symbols-new-what-is-an-element-symbol-of-periodic-table-full-names-and-symbols.jpg"
  },
  {
    "food_id": "food_000514",
    "name": "Plant Protein Shake",
    "category": "Protein Shakes",
    "type": "Vegan",
    "taste": "sweet",
    "serving_size": {
      "amount": 350,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 210,
      "protein_g": 24,
      "carbohydrates_g": 20,
      "fat_g": 5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 4
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegan",
      "High Protein",
      "Plant Based",
      "High Fiber",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Barrel_fruit_%286505718445%29.jpg/330px-Barrel_fruit_%286505718445%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000515",
    "name": "Mass Gainer Shake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 450,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 600,
      "protein_g": 30,
      "carbohydrates_g": 85,
      "fat_g": 12,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 55
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Calorie",
      "Post Workout"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Hubble_Gives_Unprecedented%2C_Early_View_of_a_Doomed_Star%27s_Destruction_-_Flickr_-_NASA_Hubble.png/250px-Hubble_Gives_Unprecedented%2C_Early_View_of_a_Doomed_Star%27s_Destruction_-_Flickr_-_NASA_Hubble.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000516",
    "name": "Protein Coffee",
    "category": "Protein Beverages",
    "type": "Vegetarian",
    "taste": "bitter",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 20,
      "carbohydrates_g": 10,
      "fat_g": 3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Caffeinated"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Protein_quark_and_coffee_at_the_office_in_June_2024.jpg/250px-Protein_quark_and_coffee_at_the_office_in_June_2024.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000517",
    "name": "Protein Hot Chocolate",
    "category": "Protein Beverages",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard cup"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 20,
      "carbohydrates_g": 18,
      "fat_g": 5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 10,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/2016_Fiat_Ducato_42_Maxi_West_Midlands_Ambulance_Service_3.0.jpg/250px-2016_Fiat_Ducato_42_Maxi_West_Midlands_Ambulance_Service_3.0.jpg"
  },
  {
    "food_id": "food_000518",
    "name": "Protein Milkshake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 350,
      "unit": "ml",
      "description": "1 standard milkshake"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 25,
      "carbohydrates_g": 35,
      "fat_g": 7,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 20,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Protein_shake.jpg/250px-Protein_shake.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000519",
    "name": "Peanut Butter Protein Shake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 400,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 32,
      "carbohydrates_g": 30,
      "fat_g": 17,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Healthy Fats",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg/250px-Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000520",
    "name": "Banana Whey Shake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 400,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 30,
      "carbohydrates_g": 42,
      "fat_g": 5,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 20,
      "starch_g": 12
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout",
      "Energy Rich"
    ],
    "is_common_food": true,
    "image_url": "https://www.crank-in.net/img/db/1317279_1200.jpg"
  },
  {
    "food_id": "food_000521",
    "name": "Chocolate Whey Shake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 400,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 30,
      "carbohydrates_g": 38,
      "fat_g": 7,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 20,
      "starch_g": 10
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg/250px-Food_sources_of_magnesium_%28magnesium-rich_foods%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000522",
    "name": "Strawberry Whey Shake",
    "category": "Protein Shakes",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 400,
      "unit": "ml",
      "description": "1 standard shake"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 29,
      "carbohydrates_g": 35,
      "fat_g": 5,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 19,
      "starch_g": 7
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 29
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout"
    ],
    "is_common_food": true,
    "image_url": "https://media.slidesgo.com/storage/45687826/responsive-images/2-biology-subject-for-high-school-darwins-theory-of-natural-selection-infographics___media_library_original_1600_900.jpg"
  },
  {
    "food_id": "food_000523",
    "name": "Low Fat Milk",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 8.5,
      "carbohydrates_g": 12,
      "fat_g": 4,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 8.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/72Magnolia_Low_Fat_Milk.jpg/250px-72Magnolia_Low_Fat_Milk.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000524",
    "name": "Skimmed Milk",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 85,
      "protein_g": 8.5,
      "carbohydrates_g": 12,
      "fat_g": 0.2,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 0.1,
      "unsaturated_g": 0.1
    },
    "protein": {
      "protein_g": 8.5
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Low Fat",
      "Low Calorie"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Skim_milk_poured_into_cereal_bowl.jpg/330px-Skim_milk_poured_into_cereal_bowl.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000525",
    "name": "High Protein Milk",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 250,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 15,
      "carbohydrates_g": 12,
      "fat_g": 4,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 11,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Myo-Inositol_Is_a_Dynamic_Component_of_Human_Milk_That_Peaks_Early_in_Lactation.jpg/500px-Myo-Inositol_Is_a_Dynamic_Component_of_Human_Milk_That_Peaks_Early_in_Lactation.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000526",
    "name": "High Protein Curd",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 15,
      "carbohydrates_g": 10,
      "fat_g": 5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Aaloo_ki_sabji_%26_Kuttu_ki_puri_-_Gujarat_-_SHAILI_016.jpg/250px-Aaloo_ki_sabji_%26_Kuttu_ki_puri_-_Gujarat_-_SHAILI_016.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000527",
    "name": "High Protein Greek Yogurt",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 145,
      "protein_g": 20,
      "carbohydrates_g": 8,
      "fat_g": 3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 1
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://www.askchefdennis.com/wp-content/uploads/2023/10/fried-chicken-wings-hero-10.jpg"
  },
  {
    "food_id": "food_000528",
    "name": "Low Fat Greek Yogurt",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 18,
      "carbohydrates_g": 8,
      "fat_g": 3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1.8,
      "unsaturated_g": 1.2
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://i.pinimg.com/474x/79/0e/6c/790e6c597d634f9934faa76ef8caef63.jpg?nii=t"
  },
  {
    "food_id": "food_000529",
    "name": "Cottage Cheese Bowl",
    "category": "Dairy Bowls",
    "type": "Vegetarian",
    "taste": "mild",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 250,
      "protein_g": 28,
      "carbohydrates_g": 12,
      "fat_g": 10,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Cottagecheese200px.jpg/250px-Cottagecheese200px.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000530",
    "name": "Paneer Bowl",
    "category": "Protein Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 27,
      "carbohydrates_g": 30,
      "fat_g": 23,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 16
    },
    "fat": {
      "saturated_g": 13,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/A_bowl_of_chili_paneer_during_dinner_at_a_household.jpg/250px-A_bowl_of_chili_paneer_during_dinner_at_a_household.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000531",
    "name": "Tofu Bowl",
    "category": "Protein Bowls",
    "type": "Vegan",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 24,
      "carbohydrates_g": 35,
      "fat_g": 14,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegan",
      "High Protein",
      "High Fiber",
      "Plant Based"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Salt_%26_Pepper_Tofu_Rice_Bowl_-_Tiger_Bites_Pig_2025-11-20.jpg/250px-Salt_%26_Pepper_Tofu_Rice_Bowl_-_Tiger_Bites_Pig_2025-11-20.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000532",
    "name": "Chicken Bowl",
    "category": "Protein Bowls",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 38,
      "carbohydrates_g": 40,
      "fat_g": 14,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 10.5
    },
    "protein": {
      "protein_g": 38
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Oyakodon_003.jpg/330px-Oyakodon_003.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000533",
    "name": "Egg Bowl",
    "category": "Protein Bowls",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 24,
      "carbohydrates_g": 35,
      "fat_g": 17,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 12.5
    },
    "protein": {
      "protein_g": 24
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Egg_Bowl_Trophy_Mississippi_Sports_Network.jpg/250px-Egg_Bowl_Trophy_Mississippi_Sports_Network.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000534",
    "name": "Tuna Bowl",
    "category": "Protein Bowls",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 360,
      "protein_g": 38,
      "carbohydrates_g": 32,
      "fat_g": 10,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 38
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Uwajimaya_Poke_Bowl_with_salmon%2C_tuna%2C_ginger%2C_and_2_scoops_of_rice.jpg/250px-Uwajimaya_Poke_Bowl_with_salmon%2C_tuna%2C_ginger%2C_and_2_scoops_of_rice.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000535",
    "name": "Salmon Bowl",
    "category": "Protein Bowls",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 500,
      "protein_g": 35,
      "carbohydrates_g": 40,
      "fat_g": 22,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 18
    },
    "protein": {
      "protein_g": 35
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Omega-3",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Salmon_Poke_Bowl_%28S%29_with_Spicy_mayo_sauce_-_Kitokito.jpg/250px-Salmon_Poke_Bowl_%28S%29_with_Spicy_mayo_sauce_-_Kitokito.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000536",
    "name": "Prawn Bowl",
    "category": "Protein Bowls",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 32,
      "carbohydrates_g": 38,
      "fat_g": 8,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Prawns_Ramen_Bowl.jpg/120px-Prawns_Ramen_Bowl.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000537",
    "name": "Turkey Bowl",
    "category": "Protein Bowls",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 40,
      "carbohydrates_g": 40,
      "fat_g": 10,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 40
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/SETAF-AF_Turkey_Bowl_2021_%286953349%29.jpg/330px-SETAF-AF_Turkey_Bowl_2021_%286953349%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000538",
    "name": "Lentil Bowl",
    "category": "Protein Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 18,
      "carbohydrates_g": 52,
      "fat_g": 7,
      "fiber_g": 12
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Kar%C3%A1dy_Katalin_%C3%A9s_J%C3%A1vor_P%C3%A1l%2C_Egy_t%C3%A1l_lencse_%28Film_Sz%C3%ADnh%C3%A1z_Irodalom_1941%29.jpg/250px-Kar%C3%A1dy_Katalin_%C3%A9s_J%C3%A1vor_P%C3%A1l%2C_Egy_t%C3%A1l_lencse_%28Film_Sz%C3%ADnh%C3%A1z_Irodalom_1941%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000539",
    "name": "Rajma Bowl",
    "category": "Protein Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 370,
      "protein_g": 18,
      "carbohydrates_g": 55,
      "fat_g": 8,
      "fiber_g": 12
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 33
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A_North-Indian_Dinner.jpg/330px-A_North-Indian_Dinner.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000540",
    "name": "Black Bean Salad",
    "category": "Salads",
    "type": "Vegan",
    "taste": "fresh",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 15,
      "carbohydrates_g": 42,
      "fat_g": 7,
      "fiber_g": 12
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 1,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegan",
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Warm_Black_Bean_Salad_with_Kale_and_Tomatoes.jpg/250px-Warm_Black_Bean_Salad_with_Kale_and_Tomatoes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000541",
    "name": "Lentil Salad",
    "category": "Salads",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 280,
      "protein_g": 16,
      "carbohydrates_g": 42,
      "fat_g": 6,
      "fiber_g": 11
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 0.8,
      "unsaturated_g": 5.2
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Lentil_salad_with_black_olives%2C_carrot%2C_tomatoand_red_pepper_%287520199672%29.jpg/250px-Lentil_salad_with_black_olives%2C_carrot%2C_tomatoand_red_pepper_%287520199672%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000542",
    "name": "Masoor Salad",
    "category": "Salads",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 260,
      "protein_g": 16,
      "carbohydrates_g": 40,
      "fat_g": 5,
      "fiber_g": 10
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 24
    },
    "fat": {
      "saturated_g": 0.7,
      "unsaturated_g": 4.3
    },
    "protein": {
      "protein_g": 16
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Shepuchi_bhaji_with_masoor_dal_bhakri_salad_dahi_garlic_pickel.jpg/250px-Shepuchi_bhaji_with_masoor_dal_bhakri_salad_dahi_garlic_pickel.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000543",
    "name": "Moong Salad",
    "category": "Salads",
    "type": "Vegetarian",
    "taste": "fresh",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 14,
      "carbohydrates_g": 37,
      "fat_g": 4,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 20
    },
    "fat": {
      "saturated_g": 0.5,
      "unsaturated_g": 3.5
    },
    "protein": {
      "protein_g": 14
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Chapati_rice_fry_moong_dal_fry_fruit_salad-Masai_mara-Kenya-14.jpg/330px-Chapati_rice_fry_moong_dal_fry_fruit_salad-Masai_mara-Kenya-14.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000544",
    "name": "Quinoa Chicken Bowl",
    "category": "Protein Bowls",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 480,
      "protein_g": 42,
      "carbohydrates_g": 45,
      "fat_g": 14,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 42
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Our_favorite_quinoa_bowl_with_beef_and_lamb_plus_a_spicy_chicken_wrap%21_SO_GOOD%21_-TasteVERTS_%2829322059930%29.jpg/250px-Our_favorite_quinoa_bowl_with_beef_and_lamb_plus_a_spicy_chicken_wrap%21_SO_GOOD%21_-TasteVERTS_%2829322059930%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000545",
    "name": "Quinoa Paneer Bowl",
    "category": "Protein Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 500,
      "protein_g": 28,
      "carbohydrates_g": 45,
      "fat_g": 22,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 25
    },
    "fat": {
      "saturated_g": 11,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://www.positivemed.com/wp-content/uploads/2020/09/5815-Pilates-Butt-Workout-1024x536.jpg"
  },
  {
    "food_id": "food_000546",
    "name": "Quinoa Tofu Bowl",
    "category": "Protein Bowls",
    "type": "Vegan",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 27,
      "carbohydrates_g": 48,
      "fat_g": 14,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 28
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegan",
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Plant Based"
    ],
    "is_common_food": true,
    "image_url": "https://s.yimg.com/ny/api/res/1.2/gcvv6WEoUVAwb7_BxggtBw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTE0NDA-/https://media.zenfs.com/en/town_country_721/2413759e1d00f62b2cddfb1ebd1c303f"
  },
  {
    "food_id": "food_000547",
    "name": "Quinoa Egg Bowl",
    "category": "Protein Bowls",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 25,
      "carbohydrates_g": 45,
      "fat_g": 18,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 27
    },
    "fat": {
      "saturated_g": 4.5,
      "unsaturated_g": 13.5
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://grannygame.org/data/image/options/granny-game-fearture-image.jpg"
  },
  {
    "food_id": "food_000548",
    "name": "Brown Rice Chicken Bowl",
    "category": "Protein Bowls",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 470,
      "protein_g": 40,
      "carbohydrates_g": 50,
      "fat_g": 11,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 32
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 40
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Liat_Portal_for_Foodie_Disorder_-_Roasted_chicken_with_cauliflower_broccoli_potatoes_rice_and_salad.jpg/250px-Liat_Portal_for_Foodie_Disorder_-_Roasted_chicken_with_cauliflower_broccoli_potatoes_rice_and_salad.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000549",
    "name": "Brown Rice Paneer Bowl",
    "category": "Protein Bowls",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 510,
      "protein_g": 28,
      "carbohydrates_g": 50,
      "fat_g": 21,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 32
    },
    "fat": {
      "saturated_g": 11,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Halibut_with_mango_salsa_on_coconut_brown_rice_%28434662467%29.jpg/330px-Halibut_with_mango_salsa_on_coconut_brown_rice_%28434662467%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000550",
    "name": "Brown Rice Tofu Bowl",
    "category": "Protein Bowls",
    "type": "Vegan",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 25,
      "carbohydrates_g": 52,
      "fat_g": 13,
      "fiber_g": 8
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 34
    },
    "fat": {
      "saturated_g": 1.8,
      "unsaturated_g": 11.2
    },
    "protein": {
      "protein_g": 25
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegan",
      "Vegetarian",
      "High Protein",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Harmony_Bowl_at_Laughing_Seed_Cafe.jpg/250px-Harmony_Bowl_at_Laughing_Seed_Cafe.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000551",
    "name": "Brown Rice Egg Bowl",
    "category": "Protein Bowls",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 440,
      "protein_g": 23,
      "carbohydrates_g": 50,
      "fat_g": 15,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 32
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 23
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/American_homes_and_gardens_%281911%29_%2817971224479%29.jpg/960px-American_homes_and_gardens_%281911%29_%2817971224479%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000552",
    "name": "Vegetable Pulao",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 7,
      "carbohydrates_g": 55,
      "fat_g": 9,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 39
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 7.8
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/VEGETABLE_PULAO_~_An_Indian_cuisine_made_from_fried_rice_mixed_with_fried_vegetables.jpg/330px-VEGETABLE_PULAO_~_An_Indian_cuisine_made_from_fried_rice_mixed_with_fried_vegetables.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000553",
    "name": "Chicken Pulao",
    "category": "Rice Dishes",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 28,
      "carbohydrates_g": 55,
      "fat_g": 11,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 42
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Chicken_with_Yemeni_mandi_spices_over_rice_and_knafeh.jpg/250px-Chicken_with_Yemeni_mandi_spices_over_rice_and_knafeh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000554",
    "name": "Paneer Pulao",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 20,
      "carbohydrates_g": 53,
      "fat_g": 17,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 40
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 8
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Paneer_pulao_and_raita.jpg/250px-Paneer_pulao_and_raita.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000555",
    "name": "Egg Pulao",
    "category": "Rice Dishes",
    "type": "Egg",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 410,
      "protein_g": 18,
      "carbohydrates_g": 54,
      "fat_g": 13,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 41
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 9.5
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pulao_and_Egg_Curry.jpg/330px-Pulao_and_Egg_Curry.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000556",
    "name": "Peas Pulao",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 9,
      "carbohydrates_g": 56,
      "fat_g": 8,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 38
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 6.8
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Polu.jpg/330px-Polu.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000557",
    "name": "Quinoa Pulao",
    "category": "Grain Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 11,
      "carbohydrates_g": 48,
      "fat_g": 10,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 29
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 8.8
    },
    "protein": {
      "protein_g": 11
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Protein",
      "High Fiber",
      "Whole Grain"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=quinoa+pulao"
  },
  {
    "food_id": "food_000558",
    "name": "Millet Pulao",
    "category": "Grain Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 9,
      "carbohydrates_g": 48,
      "fat_g": 9,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 31
    },
    "fat": {
      "saturated_g": 1.2,
      "unsaturated_g": 7.8
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Whole Grain",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Millet_pulao.jpg/250px-Millet_pulao.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000559",
    "name": "Vegetable Biryani",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 420,
      "protein_g": 9,
      "carbohydrates_g": 65,
      "fat_g": 13,
      "fiber_g": 6
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 47
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 9
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Vegetable_Biryani_IMG_001.jpg/330px-Vegetable_Biryani_IMG_001.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000560",
    "name": "Paneer Biryani",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 500,
      "protein_g": 21,
      "carbohydrates_g": 62,
      "fat_g": 20,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 45
    },
    "fat": {
      "saturated_g": 10,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 21
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Biryani_in_Hyderabad.jpg/330px-Biryani_in_Hyderabad.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000561",
    "name": "Mutton Biryani",
    "category": "Rice Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 520,
      "protein_g": 27,
      "carbohydrates_g": 58,
      "fat_g": 20,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/A_home_made_plate_of_mutton_biryani_served_with_chicken_kassa_cooked_in_the_bengali_style.jpg/250px-A_home_made_plate_of_mutton_biryani_served_with_chicken_kassa_cooked_in_the_bengali_style.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000562",
    "name": "Fish Biryani",
    "category": "Rice Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 450,
      "protein_g": 27,
      "carbohydrates_g": 58,
      "fat_g": 13,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 44
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Fish_Biryani.JPG/250px-Fish_Biryani.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000563",
    "name": "Prawn Biryani",
    "category": "Rice Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 460,
      "protein_g": 29,
      "carbohydrates_g": 60,
      "fat_g": 12,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 45
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 29
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Prawn_Biryani%2C_Hyderabad.jpg/330px-Prawn_Biryani%2C_Hyderabad.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000564",
    "name": "Brown Rice Biryani",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 10,
      "carbohydrates_g": 65,
      "fat_g": 13,
      "fiber_g": 7
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 45
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 11
    },
    "protein": {
      "protein_g": 10
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Whole Grain",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Late_supper_with_biryani_of_the_Empty_House_14-10-2025.jpg/250px-Late_supper_with_biryani_of_the_Empty_House_14-10-2025.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000565",
    "name": "Chicken Korma",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 30,
      "carbohydrates_g": 12,
      "fat_g": 25,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 8,
      "unsaturated_g": 17
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Chicken_Korma.JPG/250px-Chicken_Korma.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000566",
    "name": "Chicken Tikka Masala",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 32,
      "carbohydrates_g": 15,
      "fat_g": 19,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 13
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Chicken_Tikka_Masala_KellySue.JPG/330px-Chicken_Tikka_Masala_KellySue.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000567",
    "name": "Butter Chicken",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "creamy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 30,
      "carbohydrates_g": 16,
      "fat_g": 29,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 8,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 12,
      "unsaturated_g": 17
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Chicken_makhani.jpg/330px-Chicken_makhani.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000568",
    "name": "Methi Chicken",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 320,
      "protein_g": 32,
      "carbohydrates_g": 10,
      "fat_g": 18,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Methi_chicken.jpg/250px-Methi_chicken.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000569",
    "name": "Palak Chicken",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 310,
      "protein_g": 34,
      "carbohydrates_g": 10,
      "fat_g": 16,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 12.5
    },
    "protein": {
      "protein_g": 34
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Palak_chapathi_with_chicken_gravy.jpg/120px-Palak_chapathi_with_chicken_gravy.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000570",
    "name": "Kadai Chicken",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 32,
      "carbohydrates_g": 12,
      "fat_g": 18,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 14
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Kadai_chicken_%28karahi%29.jpg/120px-Kadai_chicken_%28karahi%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000571",
    "name": "Chicken Do Pyaza",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 32,
      "carbohydrates_g": 14,
      "fat_g": 17,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 13.5
    },
    "protein": {
      "protein_g": 32
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Do_pyaza_chicken.jpg/330px-Do_pyaza_chicken.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000572",
    "name": "Chicken Saag",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 300,
      "protein_g": 33,
      "carbohydrates_g": 11,
      "fat_g": 15,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 12
    },
    "protein": {
      "protein_g": 33
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Lamb_Saag_and_Chicken_Korma_-_Northern_Indian%2C_Palms_Food_Court.jpg/250px-Lamb_Saag_and_Chicken_Korma_-_Northern_Indian%2C_Palms_Food_Court.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000573",
    "name": "Chicken Keema",
    "category": "Chicken Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 35,
      "carbohydrates_g": 12,
      "fat_g": 23,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 5
    },
    "fat": {
      "saturated_g": 6,
      "unsaturated_g": 17
    },
    "protein": {
      "protein_g": 35
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Chicken_Keema_Paratha.JPG/250px-Chicken_Keema_Paratha.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000574",
    "name": "Mutton Curry",
    "category": "Mutton Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 410,
      "protein_g": 30,
      "carbohydrates_g": 10,
      "fat_g": 28,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 10,
      "unsaturated_g": 18
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mutton_Curry_%2844786%29.jpg/250px-Mutton_Curry_%2844786%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000575",
    "name": "Mutton Keema",
    "category": "Mutton Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard serving"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 29,
      "carbohydrates_g": 9,
      "fat_g": 32,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 3,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 11,
      "unsaturated_g": 21
    },
    "protein": {
      "protein_g": 29
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Mutton-Keema_2.jpg/250px-Mutton-Keema_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000576",
    "name": "Mutton Kebab",
    "category": "Kebabs",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "3 to 4 standard kebabs"
    },
    "macronutrients": {
      "calories": 350,
      "protein_g": 27,
      "carbohydrates_g": 8,
      "fat_g": 24,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 4
    },
    "fat": {
      "saturated_g": 8,
      "unsaturated_g": 16
    },
    "protein": {
      "protein_g": 27
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/4th_October_2012_Shami_Kebab.jpg/330px-4th_October_2012_Shami_Kebab.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000577",
    "name": "Mutton Seekh Kebab",
    "category": "Kebabs",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 150,
      "unit": "g",
      "description": "3 to 4 standard seekh kebabs"
    },
    "macronutrients": {
      "calories": 370,
      "protein_g": 28,
      "carbohydrates_g": 7,
      "fat_g": 27,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 2,
      "starch_g": 3
    },
    "fat": {
      "saturated_g": 9,
      "unsaturated_g": 18
    },
    "protein": {
      "protein_g": 28
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mutton_Seekh_Kebabs.jpg/250px-Mutton_Seekh_Kebabs.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000578",
    "name": "Fish Curry Rice",
    "category": "Rice Dishes",
    "type": "Non-Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 480,
      "protein_g": 30,
      "carbohydrates_g": 58,
      "fat_g": 15,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 5,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 30
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Rice_and_fish_curry.jpg/330px-Rice_and_fish_curry.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000579",
    "name": "Prawn Rice",
    "category": "Rice Dishes",
    "type": "Non-Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 300,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 29,
      "carbohydrates_g": 58,
      "fat_g": 10,
      "fiber_g": 3
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 44
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 29
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Non-Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Prawn_fried_rice_shrimp_bowls.jpg/250px-Prawn_fried_rice_shrimp_bowls.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000580",
    "name": "Vegetable Raita",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 7,
      "carbohydrates_g": 10,
      "fat_g": 5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Raita_with_cucumber_and_mint.jpg/250px-Raita_with_cucumber_and_mint.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000581",
    "name": "Cucumber Raita",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 6,
      "carbohydrates_g": 9,
      "fat_g": 5,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 3,
      "unsaturated_g": 2
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Cucumber-raita.jpg/250px-Cucumber-raita.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000582",
    "name": "Boondi Raita",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 7,
      "carbohydrates_g": 18,
      "fat_g": 10,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 9
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 6
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Boondi_Raita.jpg/250px-Boondi_Raita.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000583",
    "name": "Greek Yogurt Raita",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 15,
      "carbohydrates_g": 9,
      "fat_g": 4,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=greek+yogurt+raita"
  },
  {
    "food_id": "food_000584",
    "name": "Mint Raita",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 105,
      "protein_g": 6,
      "carbohydrates_g": 9,
      "fat_g": 4.5,
      "fiber_g": 1
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 2.7,
      "unsaturated_g": 1.8
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Raita_with_cucumber_and_mint.jpg/250px-Raita_with_cucumber_and_mint.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000585",
    "name": "Fruit Raita",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 150,
      "protein_g": 6,
      "carbohydrates_g": 24,
      "fat_g": 3.5,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 1
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 1.5
    },
    "protein": {
      "protein_g": 6
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Raita_with_cucumber_and_mint.jpg/250px-Raita_with_cucumber_and_mint.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000586",
    "name": "Plain Yogurt Bowl",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 200,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 7,
      "carbohydrates_g": 9,
      "fat_g": 6,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 9,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Lakh_au_yaourt.jpg/250px-Lakh_au_yaourt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000587",
    "name": "Lassi",
    "category": "Dairy Beverages",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 180,
      "protein_g": 8,
      "carbohydrates_g": 20,
      "fat_g": 7,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 18,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lassi_1.jpg/250px-Lassi_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000588",
    "name": "Sweet Lassi",
    "category": "Dairy Beverages",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 240,
      "protein_g": 8,
      "carbohydrates_g": 34,
      "fat_g": 7,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 31,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Lassi_%28Sweet%29.JPG/330px-Lassi_%28Sweet%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000589",
    "name": "Salted Lassi",
    "category": "Dairy Beverages",
    "type": "Vegetarian",
    "taste": "salty",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 130,
      "protein_g": 8,
      "carbohydrates_g": 10,
      "fat_g": 6,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 9,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 3.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Salt_lassi.jpg/250px-Salt_lassi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000590",
    "name": "Mango Lassi",
    "category": "Dairy Beverages",
    "type": "Vegetarian",
    "taste": "sweet",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 230,
      "protein_g": 8,
      "carbohydrates_g": 35,
      "fat_g": 7,
      "fiber_g": 2
    },
    "carbohydrates": {
      "sugar_g": 29,
      "starch_g": 2
    },
    "fat": {
      "saturated_g": 4,
      "unsaturated_g": 3
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Dessert"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Mango_Lassi_and_Butter_Milk_-_Vel_South_Indian_Kitchen_%2B_Bar.jpg/250px-Mango_Lassi_and_Butter_Milk_-_Vel_South_Indian_Kitchen_%2B_Bar.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000591",
    "name": "Protein Lassi",
    "category": "Dairy Beverages",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 190,
      "protein_g": 20,
      "carbohydrates_g": 15,
      "fat_g": 5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 12,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 2.5,
      "unsaturated_g": 2.5
    },
    "protein": {
      "protein_g": 20
    },
    "meal_type": [
      "Breakfast",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Post Workout",
      "Indian"
    ],
    "is_common_food": false,
    "image_url": "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=protein+lassi"
  },
  {
    "food_id": "food_000592",
    "name": "Protein Buttermilk",
    "category": "Dairy Beverages",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 300,
      "unit": "ml",
      "description": "1 standard glass"
    },
    "macronutrients": {
      "calories": 110,
      "protein_g": 15,
      "carbohydrates_g": 8,
      "fat_g": 2.5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 1
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Snack",
      "Post-Workout"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Protein",
      "Low Fat",
      "Indian"
    ],
    "is_common_food": false,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Buttermilk_fried_chicken_with_croffle.jpg/250px-Buttermilk_fried_chicken_with_croffle.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000593",
    "name": "Chole Bhature",
    "category": "Indian Main Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard plate with chole and bhature"
    },
    "macronutrients": {
      "calories": 650,
      "protein_g": 18,
      "carbohydrates_g": 85,
      "fat_g": 27,
      "fiber_g": 10
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 65
    },
    "fat": {
      "saturated_g": 7,
      "unsaturated_g": 20
    },
    "protein": {
      "protein_g": 18
    },
    "meal_type": [
      "Breakfast",
      "Lunch"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Chole_Bhature_6.jpg/250px-Chole_Bhature_6.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000594",
    "name": "Rajma Chawal",
    "category": "Indian Main Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 480,
      "protein_g": 17,
      "carbohydrates_g": 78,
      "fat_g": 10,
      "fiber_g": 12
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 54
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 8.5
    },
    "protein": {
      "protein_g": 17
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Rajma_Chawal_Thali.jpg/120px-Rajma_Chawal_Thali.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000595",
    "name": "Dal Chawal",
    "category": "Indian Main Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 430,
      "protein_g": 15,
      "carbohydrates_g": 72,
      "fat_g": 9,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 51
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 15
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "High Protein",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Dal_Bhat_Tarkari_Machha.jpg/250px-Dal_Bhat_Tarkari_Machha.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail"
  },
  {
    "food_id": "food_000596",
    "name": "Kadhi Chawal",
    "category": "Indian Main Dishes",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 460,
      "protein_g": 13,
      "carbohydrates_g": 70,
      "fat_g": 14,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 48
    },
    "fat": {
      "saturated_g": 5,
      "unsaturated_g": 9
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=kadhi+chawal"
  },
  {
    "food_id": "food_000597",
    "name": "Palak Rice",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 330,
      "protein_g": 8,
      "carbohydrates_g": 56,
      "fat_g": 9,
      "fiber_g": 5
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 40
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=palak+rice"
  },
  {
    "food_id": "food_000598",
    "name": "Sambar Rice",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "spicy",
    "serving_size": {
      "amount": 350,
      "unit": "g",
      "description": "1 standard bowl"
    },
    "macronutrients": {
      "calories": 400,
      "protein_g": 13,
      "carbohydrates_g": 68,
      "fat_g": 9,
      "fiber_g": 9
    },
    "carbohydrates": {
      "sugar_g": 7,
      "starch_g": 48
    },
    "fat": {
      "saturated_g": 1.5,
      "unsaturated_g": 7.5
    },
    "protein": {
      "protein_g": 13
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "High Fiber",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=sambar+rice"
  },
  {
    "food_id": "food_000599",
    "name": "Tamarind Rice",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "tangy",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 390,
      "protein_g": 8,
      "carbohydrates_g": 65,
      "fat_g": 12,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 6,
      "starch_g": 47
    },
    "fat": {
      "saturated_g": 2,
      "unsaturated_g": 10
    },
    "protein": {
      "protein_g": 8
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=tamarind+rice"
  },
  {
    "food_id": "food_000600",
    "name": "Coconut Rice",
    "category": "Rice Dishes",
    "type": "Vegetarian",
    "taste": "savory",
    "serving_size": {
      "amount": 250,
      "unit": "g",
      "description": "1 standard plate"
    },
    "macronutrients": {
      "calories": 410,
      "protein_g": 7,
      "carbohydrates_g": 59,
      "fat_g": 17,
      "fiber_g": 4
    },
    "carbohydrates": {
      "sugar_g": 4,
      "starch_g": 43
    },
    "fat": {
      "saturated_g": 12,
      "unsaturated_g": 5
    },
    "protein": {
      "protein_g": 7
    },
    "meal_type": [
      "Lunch",
      "Dinner"
    ],
    "diet_tags": [
      "Vegetarian",
      "Vegan",
      "Indian"
    ],
    "is_common_food": true,
    "image_url": "https://commons.wikimedia.org/wiki/Special:MediaSearch?type=image&search=coconut+rice"
  }
]