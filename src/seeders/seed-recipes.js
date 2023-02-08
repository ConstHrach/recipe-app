require('dotenv').config();
const mongoose = require('mongoose');
const recipeSchema = require('../models/recipes');

const Recipes = mongoose.model('Recipes', recipeSchema)

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB.");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

const recipes = [
  {
    id: 1,
    title: "Vegetable Stir Fry",
    image: "https://spoonacular.com/recipeImages/681151-556x370.jpg",
    cuisines: "Chinese",
    instructions: "1. Heat the oil in a large frying pan or wok.\n2. Add the garlic and ginger and stir fry for 1 minute.\n3. Add the vegetables and stir fry for 3-4 minutes.\n4. Stir in the soy sauce and serve.",
    ingredients: "123",
    cookingMinutes: 5,
    preparationMinutes: 10,
    readyInMinutes: 15,
    servings: 4,
    glutenFree: true,
    dairyFree: true,
    vegan: true,
    vegetarian: true,
  },
  // Add more recipes here
];

Recipes.create(recipes)
  .then(() => {
    console.log("Data seeded successfully.");
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error("Error seeding data:", error);
    mongoose.connection.close();
  });

