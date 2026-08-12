const foodDatabase = [
    {
    "food_id": "food_000001",
    "name": "Paneer",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "salty",
    "image_url": "https://distrapi.blob.core.windows.net/strapi-uploads/assets/shutterstock_2607441321_991f9c6ff3.jpg",
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
        "saturated_g": 13.0,
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
    "is_common_food": true
    },
  {
    "food_id": "food_000004",
    "name": "Curd",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "sour",
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
      "unsaturated_g": 1.0
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
      "Dairy"
    ],
    "is_common_food": true,
    "image_url": "https://tiimg.tistatic.com/fp/1/004/498/pure-curd-647.jpg"
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
      "protein_g": 3.15,
      "carbohydrates_g": 4.8,
      "fat_g": 3.25,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 4.8,
      "starch_g": 0
    },
    "fat": {
      "saturated_g": 1.86,
      "unsaturated_g": 1.39
    },
    "protein": {
      "protein_g": 3.15
    },
    "meal_type": [
      "Breakfast",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Dairy",
      "Calcium Rich"
    ],
    "is_common_food": true,
    "image_url": "https://www.beybeyfarms.com/cdn/shop/files/red_cheddar_cheese_grated_beybey_farms.png?v=1718858873"
  },
  {
    "food_id": "food_000006",
    "name": "Buttermilk",
    "category": "Dairy",
    "type": "Vegetarian",
    "taste": "sour",
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
      "saturated_g": 0.6,
      "unsaturated_g": 0.3
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
      "Dairy",
      "Low Fat"
    ],
    "is_common_food": true,
    "image_url": "https://www.lifestylefoodies.com/wp-content/uploads/2023/01/buttermilk1.jpg"
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
      "calories": 350,
      "protein_g": 22.0,
      "carbohydrates_g": 2.2,
      "fat_g": 28.5,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.5,
      "starch_g": 0.3
    },
    "fat": {
      "saturated_g": 18.0,
      "unsaturated_g": 10.5
    },
    "protein": {
      "protein_g": 22.0
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Dairy",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://images.deliveryhero.io/image/talabat/MenuItems/slice_cheese_s_637498385931123854.jpg"
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
      "starch_g": 0.2
    },
    "fat": {
      "saturated_g": 10.1,
      "unsaturated_g": 6.3
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
      "Dairy",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://media-assets.lacucinaitaliana.it/photos/61fae67de56cd2ed267bcbd0/1%3A1/w_1280%2Cc_limit/7b86129c-75a0-49ba-8251-d06b42e9ad84.jpg"
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
      "protein_g": 22.9,
      "carbohydrates_g": 3.4,
      "fat_g": 33.3,
      "fiber_g": 0
    },
    "carbohydrates": {
      "sugar_g": 0.48,
      "starch_g": 0.4
    },
    "fat": {
      "saturated_g": 18.9,
      "unsaturated_g": 12.5
    },
    "protein": {
      "protein_g": 22.9
    },
    "meal_type": [
      "Breakfast",
      "Lunch",
      "Dinner",
      "Snack"
    ],
    "diet_tags": [
      "Vegetarian",
      "Dairy",
      "High Protein"
    ],
    "is_common_food": true,
    "image_url": "https://kalber.exportdepartment.ir/export-brands/uploads/images/cheddar-cheese.jpg"
  },
  {
    "food_id": "food_000010",
    "name": "Tofu",
    "category": "Soy Products",
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
      "starch_g": 0.1
    },
    "fat": {
      "saturated_g": 1.3,
      "unsaturated_g": 6.5
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
      "Plant Based"
    ],
    "is_common_food": true,
    "image_url": "https://www.worldofvegan.com/wp-content/uploads/2023/02/raw-tofu.jpg"
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
      "description": "1 standard serving of cooked and rehydrated soy chunks"
    },
    "macronutrients": {
      "calories": 120,
      "protein_g": 18.0,
      "carbohydrates_g": 10.0,
      "fat_g": 0.8,
      "fiber_g": 5.5
    },
    "carbohydrates": {
      "sugar_g": 1.0,
      "starch_g": 1.5
    },
    "fat": {
      "saturated_g": 0.2,
      "unsaturated_g": 0.6
    },
    "protein": {
      "protein_g": 18.0
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
      "Plant Based",
      "High Fiber"
    ],
    "is_common_food": true,
    "image_url": "https://www.sharmispassions.com/wp-content/uploads/2016/03/Soyachunks2.jpg"
  }
]