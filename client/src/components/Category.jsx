import React, { useState, useEffect } from 'react';

function Categories() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/categories') 
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => setCategories(data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;