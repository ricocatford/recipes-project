import { useState, useEffect } from "react";
import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import getRecipes from "./requests/getRecipes";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function requestGetRecipes() {
      const recipes = await getRecipes();
      setRecipes(recipes);
    }
    requestGetRecipes();
  }, []);
  
  return (
    <>
      <Navbar />
      <Outlet />
      {recipes.map((recipe) => (<p key={recipe.id}>{recipe.title}</p>))}
    </>
  );
}

export default App;
