const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  id: { type: Number, required: true},
  title: { type: String, required: true },
  image: { type: String },
  cuisines: { type: String, required: true },
  instructions: { type: String },
  extendedIngredients: { type: Array },
  cookingMinutes: {type: Number },
  preparationMinutes: { type: Number },
  readyInMinutes: {type: Number },
  servings: { type: Number },
  glutenFree: { type: Boolean },
  dairyFree: {type: Boolean },
  vegan: { type: Boolean },
  vegetarian: { type: Boolean },
});

recipeSchema.methods.showSnippet = function () {
  return `${this.title} takes ${this.readyInMinutes} to prepare and serves ${this.servings}.`;
};

module.exports = recipe = mongoose.model("Recipes", recipeSchema);