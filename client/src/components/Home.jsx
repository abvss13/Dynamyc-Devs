import React from "react";

const Home = ({ recipes = [] }) => {
    return (
      <div>
        <h1>Welcome to DynamicEats</h1>
        <h2>A place to get more recipes of your choice</h2>
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <h2>{recipe.title}</h2>
              <p>{recipe.description}</p>
              <p>{recipe.ingredients}</p>
              <p>{recipe.preparation}</p>
              <img src={recipe.image_url} alt={recipe.title} />
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default Home