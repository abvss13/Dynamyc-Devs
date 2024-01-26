import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link
} from 'react-router-dom';

import RecipeCategories from './components/Recipe_Category';
import Recipes from './components/Recipe'; 
import RecipeList from './components/RecipeList';
import Users from './components/User';
import Home from  './components/Home';
import Footer from './components/Footer'; 
import Contact from './components/Contact';
import About from './components/About'; 
import './App.css'; 

function App() {
  return (
    <Router>

      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/clientrecipe-categories">Recipe Categories</Link></li>
            <li><Link to="/clientrecipes">Recipes</Link></li>
            <li><Link to="/clientrecipe_list">Recipe List</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clientrecipe-categories" element={<RecipeCategories />} />
        <Route path="/clientrecipes" element={<Recipes />} />
        <Route path="/clientrecipe_list" element={<RecipeList />} />
        <Route path="/users" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <footer>
        &copy; 2024 DynamicEats
      </footer>

    </Router>
  );
}

export default App;