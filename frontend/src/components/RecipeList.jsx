import React from "react";

import { Col } from "react-bootstrap";

export const RecipeList = ({ recipes }) => {
    const deleteRecipe = (id) => {
        fetch("http://localhost:8080/api/recipes/" + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => window.location.reload(false));
    }

    const formatDate = (date) => new Date(date).toLocaleDateString(
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
                    <i className="fa-solid fa-trash-can" onClick={(event) => deleteRecipe(recipe.id)}/>
                    <h2>
                        {recipe.title}
                    </h2>
                    <p className="text-muted">
                        Created at: {formatDate(recipe.createdAt)}
                    </p>
                    <p>
                        {recipe.description}
                    </p>
                </Col>
            ))}
        </>
    );
};