import React, {useState, useEffect} from 'react';

function RecipeList(){
    const[recipes, setRecipes]= useState([]);

    useEffect(() =>{
        fetch('/recipes')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Request failed with status: ' + response.status);
          }
          return response.json();
        })
        .then((data) => setRecipes(data))
        .catch((error) => {
          console.error('Error fetching recipes:', error.message);
        });
    },[]);
    return (
        <div>
            <h1>Recipe List</h1>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                        <p>{recipe.ingredients}</p>
                        <p>{recipe.preparation}</p>
                        <img src={recipe.image_url}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RecipeList;