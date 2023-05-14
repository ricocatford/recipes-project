import React, { useState } from "react";

import { Col, Button } from "react-bootstrap";

export const NewRecipeForm = () => {
    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")
    const [ingredientsInputField, setIngredientsInputField] = useState("")
    const [recipeIngredients, setRecipeIngredients] = useState([])

    const handleOnChange = e => {
        const { value } = e.target;
        setIngredientsInputField(value);
    }

    const handleOnKeyDown = e => {
        const { key } = e;
        const trimmedInput = ingredientsInputField.trim();

        if (key === "Enter" && trimmedInput.length && !recipeIngredients.includes(trimmedInput)) {
            e.preventDefault();
            setRecipeIngredients(previousState => [...previousState, trimmedInput]);
            setIngredientsInputField("");
        }
    }

    const deleteIngredientTag = index => {
        setRecipeIngredients(previousState => previousState.filter((recipeIngredient, i) => i !== index));
    }

    const handleSubmitForm = () => {
        fetch('http://localhost:8080/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": recipeTitle,
                "description": recipeDescription,
                "ingredients": recipeIngredients
            })
        })
            .then(response => console.log(response.status));
    }

    return (
        <>
            <form className="form col-sm-12 col-md-6 col-lg-4" onSubmit={handleSubmitForm}>
                <Col>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input className="form-control" autoFocus type="text" value={recipeTitle} name="title" onChange={(e) => setRecipeTitle(e.target.value)}/>
                </Col>
                <Col>
                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea className="form-control" type="text" value={recipeDescription} name="description" onChange={(e) => setRecipeDescription(e.target.value)}/>
                </Col>
                <Col>
                    <label htmlFor="description">
                        Ingredients
                    </label>
                    <input className="form-control" type="text" value={ingredientsInputField} name="ingredients" onChange={handleOnChange} onKeyDown={handleOnKeyDown}/>
                </Col>
                <Col className="d-flex flex-wrap">
                    {recipeIngredients.map((recipeIngredient, index) => (
                        <div className="tag__wrapper d-flex me-2 my-1" key={crypto.randomUUID()}>
                            <p className="my-auto">
                                {recipeIngredient}
                            </p>
                            <button type="button" className="tag__btn ms-2" onClick={() => deleteIngredientTag(index)}>
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