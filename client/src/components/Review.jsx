import React, { useState, useEffect } from 'react';

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/reviews') 
      .then((response) => {
        if (!response.ok) {
          throw Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => setReviews(data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Reviews</h2>
     
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>{review.comment}</li>
          ))}
        </ul>
    </div>
  );
}

export default Reviews;