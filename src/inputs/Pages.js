import React, { useState } from 'react';

const customRecipe = () => {
  const [formData, setFormData] = useState({
    title: '',
    image: '',
    cuisine: '',
    instructions: '',
    ingredients: '',
    cookingMinutes: '',
    preparationMinutes: '',
    readyInMinutes: '',
    servings: '',
    glutenFree: false,
    dairyFree: false,
    vegan: false,
    vegetarian: false
  });
const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };
return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Image:
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Cuisine:
          <input type="text" name="cuisine" value={formData.cuisine} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Instructions:
          <textarea name="instructions" value={formData.instructions} onChange={handleChange} />
        </label>
      </div>
<div>
        <label>
          Ingredients:
          <textarea name="ingredients" value={formData.ingredients} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Cooking Minutes:
          <input type="number" name="cooking-minutes" value={formData.cookingMinutes} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Preparation Minutes:
          <input type="number" name="preparation-minutes" value={formData.preparationMinutes} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Ready in Minutes:
          <input type="number" name="ready-in-minutes" value={formData.readyInMinutes} onChange={handleChange} />
        </label>
      </div>
<div>
        <label>
          Servings:
          <input type="number" name="servings" value={formData.servings} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Gluten Free:
          <input type="checkbox" name="gluten-free" value={formData.glutenFree} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Dairy Free:
          <input type="checkbox" name="dairy-free" value={formData.dairyFree} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Vegan:
          <input type="checkbox" name="vegan" value={formData.vegan} onChange={handleChange} />
        </label>
      </div>
<div>
        <label>
          Vegetarian:
          <input type="checkbox" name="vegetarian" value={formData.vegetarian} onChange={handleChange} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default customRecipe;