import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

import getRecipe from "src/requests/getRecipe";

const DisplayRecipe = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        async function requestGetRecipe() {
            const recipe = await getRecipe(recipeId);
            if (recipe.status === 200) {
                setRecipe(recipe.payload);
            }
        }
        requestGetRecipe();
    }, []);

    return (
        <Container className="container--custom mt-2">
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <ul>
                {recipe.ingredients?.map((recipeIngredient) => (
                    <li key={crypto.randomUUID()}>{recipeIngredient}</li>
                ))}
            </ul>
        </Container>
    );
};

export default DisplayRecipe;
