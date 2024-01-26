import React, { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/users') // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Request failed with status: ' + response.status);
        }
        return response.json();
      })
      .then((data) => setUsers(data))
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Users</h2>
        
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      
    </div>
  );
}

export default Users;