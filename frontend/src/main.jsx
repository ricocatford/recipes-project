import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Recipes from "src/pages/Recipes";
import NewRecipe from "src/pages/NewRecipe";
import EditRecipe from "src/pages/EditRecipe";
import RecipeList from "src/components/RecipeList";
import DisplayRecipe from "src/pages/DisplayRecipe";
import Home from "src/pages/Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<Recipes />}>
            <Route index element={<RecipeList />} />
            <Route path=":recipeId" element={<DisplayRecipe />} />
            <Route path="new" element={<NewRecipe />} />
            <Route path=":recipeId/edit" element={<EditRecipe />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
