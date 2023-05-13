import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import getRecipes from "src/requests/getRecipes";
import RecipeList from "src/components/RecipeList";
import SideNavbar from "src/components/SideNavbar";

const Recipes = () => {
    return (
        <div className="d-flex">
            <SideNavbar />
            <Outlet />
        </div>
    );
};

export default Recipes;