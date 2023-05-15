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
        <Container className="container--custom mt-2">
            <Row className="gx-4">
                {recipes.map((recipe) => (
                    <Col
                        sm={12}
                        md={6}
                        lg={4}
                        key={recipe.id}
                        className="recipe__wrapper my-2 p-3"
                    >
                        <RecipeCard recipe={recipe} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default RecipeList;
