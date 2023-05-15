import React, { useState } from "react";

import { Button, Container, Form, Row, Col } from "react-bootstrap";

import RecipeCard from "src/components/RecipeCard";
import searchRecipes from "src/requests/searchRecipes";

const SearchRecipe = () => {
    const [search, setSearch] = useState("");
    const [recipes, setRecipes] = useState([]);

    const handleSubmitForm = (event) => {
        event.preventDefault();
        async function requestSearchRecipes() {
            const recipes = await searchRecipes(search);
            setRecipes(recipes.payload);
        }
        requestSearchRecipes();
        console.log(recipes);
    };

    return (
        <Container className="container--custom mt-2">
            <Row>
                <Form
                    className="d-flex col-sm-12 col-md-8 col-lg-6 mx-auto"
                    onSubmit={handleSubmitForm}
                >
                    <input
                        className="form-control"
                        name="search"
                        onChange={(event) => setSearch(event.target.value)}
                    />
                    <Button type="submit" className="ms-2">
                        <i className="fa-solid fa-magnifying-glass" />
                    </Button>
                </Form>
            </Row>
            <Row>
                <h4 className="text-center my-4">
                    <span className="fw-bold">{recipes.length} results</span>{" "}
                    found matching your search criteria.
                </h4>
            </Row>
            <Row className="mx-auto">
                {recipes.map((recipe) => (
                    <Col
                        sm={12}
                        md={4}
                        key={recipe.id}
                        className="recipe__wrapper offset-md-1 my-2 p-3"
                    >
                        <RecipeCard recipe={recipe} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default SearchRecipe;
