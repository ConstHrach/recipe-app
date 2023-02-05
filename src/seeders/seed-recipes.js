const mongoose = require("mongoose");
const fetch = require("node-fetch");
const { Recipes } = require("../models/server");
const db = require("./models").mongoURI;

let resultData;
let saveCounter = 0;

mongoose.connect(db)
.then(() => console.log("mongodb connection successful"))
.catch(error => console.log(error));
const url = ['https://api.spoonacular.com/recipes/complexSearch?apikey=${process.env.REACT_APP_API_KEY}&query=${name}']
url.map(async url => {
try{

   const response = await fetch(url);
   const json = await response.json();
   resultData = [...json];

   for (let i = 0; i < resultData.length; i++) {
      let recipe = new Recipes({
         id: resultData[i].id,
         title: resultData[i].title,
         image: resultData[i].image,
         cuisines: resultData[i].cuisines,
         instructions: resultData[i].instructions,
         extendedIngredients: [resultData[i].extendedIngredients],
         cookingMinutes: resultData[i].cookingMinutes,
         preparationMinutes: resultData[i].preparationMinutes,
         readyInMinutes: resultData[i].readyInMinutes,
         servings: resultData[i].servings,
         glutenFree: resultData[i].glutenFree,
         dairyFree: resultData[i].dairyFree,
         vegan: resultData[i].vegan,
         vegetarian: resultData[i].vegetarian,
      })

   Recipes.save(() => {
      console.log("saved" + Recipes)
      
      saveCounter++;
  
      if (saveCounter === resultData.length) {
         mongoose.disconnect()
         .then(() => console.log("saved succesfully and mongodb disconnected"))
         .catch(error => console.log(error));
         }
      });
   }
} catch (error) {
   console.log(error);
}
})