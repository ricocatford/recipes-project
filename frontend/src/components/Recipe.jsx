import React from "react";

import { Col } from "react-bootstrap";

export const Recipe = (props) => {
    const recipes = props.recipes;

    return (
        <>
            {recipes.map(recipe => (
                <Col sm={12} md={6} lg={4} key={recipe.id} className="recipe__wrapper my-2 p-3">
                    <h2>
                        {recipe.title}
                    </h2>
                    <p>
                        {recipe.createdAt}
                    </p>
                    <p>
                        {recipe.description}
                    </p>
                </Col>
            ))}
        </>
    );
}