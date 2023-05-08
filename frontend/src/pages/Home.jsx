import React, { useState, useEffect } from "react";

import getRecipes from "../requests/getRecipes";
import { Recipe } from "components/Recipe";
import { Container, Row } from "react-bootstrap";

const Home = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    async function requestGetRecipes() {
        const recipes = await getRecipes();
        setRecipes(recipes);
    }
    requestGetRecipes();
    }, []);

    const [recipeTitle, setRecipeTitle] = useState("")
    const [recipeDescription, setRecipeDescription] = useState("")

    const Test = () => {
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
    <Container>
        <Row className="p-3">
            <Recipe recipes={recipes} />
        </Row>
        <form onSubmit={Test}>
            <label htmlFor="title">
                Title
            </label>
            <input type="text" value={recipeTitle} name="title" onChange={(e) => setRecipeTitle(e.target.value)}/>

            <label htmlFor="description">
                Description
            </label>
            <input type="text" value={recipeDescription} name="description" onChange={(e) => setRecipeDescription(e.target.value)}/>
            <button type="submit">
                Submit
            </button>
        </form>
    </Container>
    );
};

export default Home;
