import React, { useState, useEffect } from 'react';

function RecipeCategories() {
  const [recipeCategories, setRecipeCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/recipe_categories') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => setRecipeCategories(data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Recipe Categories</h2>
      
        <ul>
          {recipeCategories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
     
    </div>
  );
}

export default RecipeCategories;