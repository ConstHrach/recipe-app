const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: { type: Number, required: true},
  title: { type: String, required: true },
  image: { type: String },
  cuisines: { type: String, required: true },
  instructions: { type: String },
  ingredients: { type: String },
  cookingMinutes: {type: Number },
  preparationMinutes: { type: Number },
  readyInMinutes: {type: Number },
  servings: { type: Number },
  glutenFree: { type: Boolean },
  dairyFree: {type: Boolean },
  vegan: { type: Boolean },
  vegetarian: { type: Boolean },
});

module.exports = recipeSchema;
