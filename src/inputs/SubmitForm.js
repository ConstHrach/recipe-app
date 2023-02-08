


import React, { useContext } from "react";


export default function SubmitForm() {
  return (
    <div style={{display: "flex"}}>
      <form >
      <div>
      <label>
        Title:
        <input type="text" name="title"   />
      </label>
    </div>
    <div>
      <label>
        Image:
        <input type="text" name="image"   />
      </label>
    </div>
    <div>
      <label>
        Cuisine:
        <input type="text" name="cuisine"   />
      </label>
    </div>
    <div>
      <label>
        Instructions:
        <textarea name="instructions"   />
      </label>
    </div>
<div>
      <label>
        Ingredients:
        <textarea name="ingredients"  />
      </label>
    </div>
    <div>
      <label>
        Cooking Minutes:
        <input type="number" name="cooking-minutes"   />
      </label>
    </div>
    <div>
      <label>
        Preparation Minutes:
        <input type="number" name="preparation-minutes"  />
      </label>
    </div>
    <div>
      <label>
        Ready in Minutes:
        <input type="number" name="ready-in-minutes"   />
      </label>
    </div>
<div>
      <label>
        Servings:
        <input type="number" name="servings"   />
      </label>
    </div>
    <div>
      <label>
        Gluten Free:
        <input type="checkbox" name="gluten-free"   />
      </label>
    </div>
    <div>
      <label>
        Dairy Free:
        <input type="checkbox" name="dairy-free"   />
      </label>
    </div>
    <div>
      <label>
        Vegan:
        <input type="checkbox" name="vegan"   />
      </label>
    </div>
<div>
      <label>
        Vegetarian:
        <input type="checkbox" name="vegetarian"  />
      </label>
    </div>
    <button type="submit">Submit</button>
  </form>
    </div>
  );
 }