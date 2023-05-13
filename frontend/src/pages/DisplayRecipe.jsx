import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

const DisplayRecipe = () => {
    const { recipeId } = useParams();

    const [recipe, setRecipe] = useState();

    // useEffect(() => {
    // async function requestGetRecipe() {
    //     const recipe = await getRecipe();
    //     setRecipe(recipe);
    // }
    // requestGetRecipe();
    // }, []);
    console.log(`RECIPE ID: ${recipeId}`);

    return (
        <Container className="container--custom mt-2">
            <h1>asd</h1>
        </Container>
    );
};

export default DisplayRecipe;