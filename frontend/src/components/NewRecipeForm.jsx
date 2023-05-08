import React, { useState } from "react";

import { Col, Button } from "react-bootstrap";

export const NewRecipeForm = () => {
    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")

    const handleSubmitForm = () => {
        fetch('http://localhost:8080/api/recipes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "title": recipeTitle,
                "description": recipeDescription
            })
        })
            .then(response => console.log(response.status));
    }

    return (
        <form className="form col-sm-12 col-md-6 col-lg-4" onSubmit={handleSubmitForm}>
            <Col>
                <label htmlFor="title">
                    Title
                </label>
                <input className="form-control" type="text" value={recipeTitle} name="title" onChange={(e) => setRecipeTitle(e.target.value)}/>
            </Col>
            <Col>
                <label htmlFor="description">
                    Description
                </label>
                <input className="form-control" type="text" value={recipeDescription} name="description" onChange={(e) => setRecipeDescription(e.target.value)}/>
            </Col>
            <Col>
                <Button className="btn btn-lg mt-2" type="submit">
                    Submit
                </Button>
            </Col>
        </form>
    );
}