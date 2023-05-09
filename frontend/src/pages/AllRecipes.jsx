import React, { useState, useEffect } from "react";

import { Container, Row } from "react-bootstrap";

import getRecipes from "../requests/getRecipes";
import { RecipeList } from "components/RecipeList";

const AllRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
    async function requestGetRecipes() {
        const recipes = await getRecipes();
        setRecipes(recipes);
    }
    requestGetRecipes();
    }, []);

    return (
        <Container className="container--custom mt-2">
            <Row className="p-3">
                <RecipeList recipes={recipes} />
            </Row>
        </Container>
    );
};

export default AllRecipes;