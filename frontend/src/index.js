import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "pages/Home";
import AllRecipes from "pages/AllRecipes";
import NewRecipe from "pages/NewRecipe";
import EditRecipe from "pages/EditRecipe";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="recipes" element={<AllRecipes />}>
            <Route path="new" element={<NewRecipe />} />
            <Route path=":recipeId/edit" element={<EditRecipe />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
