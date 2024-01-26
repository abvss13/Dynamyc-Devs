import React, { useState, useEffect } from 'react';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/recipes') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => setRecipes(data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Recipes</h2>
      
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
    </div>
  );
}

export default Recipes;