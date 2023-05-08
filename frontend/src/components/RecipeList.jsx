import React from "react";

import { Col } from "react-bootstrap";

export const RecipeList = (props) => {
    const recipes = props.recipes;

    const currentDate = (date) => new Date(date).toLocaleDateString(
        undefined,
        {
            year: "numeric",
            month: "short",
            day: "numeric",
        }
    );

    return (
        <>
            {recipes.map(recipe => (
                <Col sm={12} md={6} key={recipe.id} className="recipe__wrapper offset-md-1 my-2 p-3">
                    <h2>
                        {recipe.title}
                    </h2>
                    <p className="text-muted">
                        Created at: {currentDate(recipe.createdAt)}
                    </p>
                    <p>
                        {recipe.description}
                    </p>
                </Col>
            ))}
        </>
    );
};