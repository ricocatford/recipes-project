import React, { useState, useEffect } from "react";

import { Container, Col, Row } from "react-bootstrap";

import RecipeCard from "./RecipeCard";
import getRecipes from "src/requests/getRecipes";

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function requestGetRecipes() {
            const recipes = await getRecipes();
            setRecipes(recipes.payload);
        }
        requestGetRecipes();
    }, []);

    return (
        <Container className="custom--container mt-2">
            <Row className="g-3">
                {recipes.map((recipe) => (
                    <Col sm={12} md={6} lg={4} key={recipe.id}>
                        <RecipeCard recipe={recipe} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RecipeList;
