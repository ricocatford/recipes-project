import { useState, useEffect } from "react";
import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import getRecipes from "./requests/getRecipes";

import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
