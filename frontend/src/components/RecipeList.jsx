import React from "react";
import { Outlet } from "react-router-dom";

import { Col } from "react-bootstrap";
import { Recipe } from "./Recipe";

export const RecipeList = ({ recipes }) => {
    return (
        <>
            {recipes.map(recipe => (
                <Col sm={12} md={4} key={recipe.id} className="recipe__wrapper offset-md-1 my-2 p-3">
                    <Recipe recipe={recipe}/>
                </Col>
            ))}
            <Outlet />
        </>
    );
};