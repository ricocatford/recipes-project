import React, { useState, useRef } from "react";

import { Col, Button } from "react-bootstrap";

export const NewRecipeForm = () => {
    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")
    const [ingredientsInputField, setIngredientsInputField] = useState("")
    const [recipeIngredients, setRecipeIngredients] = useState([])
    const newIngredientInputElement = useRef(); 

    const handleOnChangeNewIngredientInput = event => {
        const { value } = event.target;
        event.target.setCustomValidity("");
        event.target.reportValidity();
        setIngredientsInputField(value);
    }

    const handleOnKeyDownNewIngredientInput = event => {
        const { key } = event;
        const trimmedInput = ingredientsInputField.trim();

        if (["Enter", ","].includes(key) && trimmedInput.length) {
            event.preventDefault();
            event.target.setCustomValidity("");
            if (recipeIngredients.includes(trimmedInput)) {
                event.target.setCustomValidity("This ingredient is already in the list!");
            } else {
                setRecipeIngredients(previousState => [...previousState, trimmedInput]);
                setIngredientsInputField("");
            }
        }
        event.target.reportValidity();
    }

    const deleteIngredientTag = index => {
        setRecipeIngredients(previousState => previousState.filter((recipeIngredient, i) => i !== index));
    }

    const handleSubmitForm = (event) => {
        event.preventDefault();
        newIngredientInputElement.current.setCustomValidity("");

        if (recipeIngredients.length == 0) {
            newIngredientInputElement.current.setCustomValidity("You must add at least one ingredient!");
            newIngredientInputElement.current.reportValidity();
            return;
        }

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
        });

        event.currentTarget.submit();
    }

    return (
        <>
            <form className="form form--recipe col-sm-12 col-md-6 col-lg-4" onSubmit={handleSubmitForm}>
                <Col>
                    <label htmlFor="title">
                        Title
                    </label>
                    <input required className="form-control" autoFocus type="text" value={recipeTitle} name="title" onChange={(e) => setRecipeTitle(e.target.value)}/>
                </Col>
                <Col>
                    <label htmlFor="description">
                        Description
                    </label>
                    <textarea required className="form-control" type="text" value={recipeDescription} name="description" onChange={(e) => setRecipeDescription(e.target.value)}/>
                </Col>
                <Col>
                    <label htmlFor="description">
                        Ingredients
                    </label>
                    <input className="form-control input--custom" autoComplete="off" ref={newIngredientInputElement} type="text" value={ingredientsInputField} name="ingredients" onChange={handleOnChangeNewIngredientInput} onKeyDown={handleOnKeyDownNewIngredientInput}/>
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