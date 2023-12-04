import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

import { Col, Button } from "react-bootstrap";

export default function RecipeForm({
    recipeFormMode,
    recipeId = null,
    recipeTitleData = "",
    recipeDescriptionData = "",
    recipeIngredientsData = [],
}) {
    const [recipeTitle, setRecipeTitle] = useState(recipeTitleData);
    const [recipeDescription, setRecipeDescription] = useState(
        recipeDescriptionData
    );
    const [recipeIngredients, setRecipeIngredients] = useState(
        recipeIngredientsData
    );
    const newIngredientInputElement = useRef();
    const navigate = useNavigate();
    const handleOnKeyDownNewIngredientInput = (event) => {
        const { key } = event;
        const trimmedInput = event.target.value.trim();
        event.target.setCustomValidity("");

        if (["Enter", ","].includes(key) && trimmedInput.length) {
            event.preventDefault();
            if (recipeIngredients.includes(trimmedInput)) {
                event.target.setCustomValidity(
                    "This ingredient is already in the list!"
                );
            } else {
                setRecipeIngredients((previousState) => [
                    ...previousState,
                    trimmedInput,
                ]);
                event.target.value = "";
            }
        }
        event.target.reportValidity();
    };

    const deleteIngredientTag = (index) => {
        setRecipeIngredients((previousState) =>
            previousState.filter((_, i) => i !== index)
        );
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        newIngredientInputElement.current.setCustomValidity("");

        if (recipeIngredients.length == 0) {
            newIngredientInputElement.current.setCustomValidity(
                "You must add at least one ingredient!"
            );
            newIngredientInputElement.current.reportValidity();
            return;
        }

        const baseUrl = "http://localhost:8080/api/recipes/";
        let fetchedUrl = "";
        let method = "";

        switch (recipeFormMode) {
            case "NEW":
                fetchedUrl = baseUrl;
                method = "POST";
                break;
            case "EDIT":
                fetchedUrl = baseUrl + recipeId;
                method = "PUT";
                break;
        }

        fetch(fetchedUrl, {
            method: method,
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: recipeTitle,
                description: recipeDescription,
                ingredients: recipeIngredients,
            }),
        }).then((response) => {
            if (recipeFormMode === "EDIT") {
                navigate(`/recipes/${recipeId}`);
            }
        });
        if (recipeFormMode !== "EDIT") {
            window.location.reload();
        }
    };

    return (
        <>
            <form
                className="form form--recipe col-sm-12 col-md-6 col-lg-4 mx-auto"
                onSubmit={handleSubmitForm}
            >
                <Col>
                    <label htmlFor="title">Title</label>
                    <input
                        required
                        className="form-control"
                        autoFocus
                        type="text"
                        value={recipeTitle}
                        name="title"
                        onChange={(event) => setRecipeTitle(event.target.value)}
                    />
                </Col>
                <Col>
                    <label htmlFor="description">Description</label>
                    <textarea
                        required
                        className="form-control"
                        type="text"
                        value={recipeDescription}
                        name="description"
                        onChange={(event) =>
                            setRecipeDescription(event.target.value)
                        }
                    />
                </Col>
                <Col>
                    <label htmlFor="description">Ingredients</label>
                    <input
                        className="form-control input--custom"
                        autoComplete="off"
                        ref={newIngredientInputElement}
                        type="text"
                        name="ingredients"
                        onKeyDown={handleOnKeyDownNewIngredientInput}
                    />
                </Col>
                <Col className="d-flex flex-wrap">
                    {recipeIngredients.map((recipeIngredient, index) => (
                        <div
                            className="tag__wrapper d-flex me-2 my-1"
                            key={crypto.randomUUID()}
                        >
                            <p className="my-auto">{recipeIngredient}</p>
                            <button
                                type="button"
                                className="tag__btn ms-2"
                                onClick={() => deleteIngredientTag(index)}
                            >
                                <i className="fa-solid fa-times" />
                            </button>
                        </div>
                    ))}
                </Col>
                <Col>
                    <Button className="btn btn-lg mt-2" type="submit">
                        Submit
                    </Button>
                </Col>
            </form>
        </>
    );
}
