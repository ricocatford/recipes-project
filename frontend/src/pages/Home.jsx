import React from "react";

import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <Container className="container--custom mt-2">
            <h1 className="text-center">Welcome to Recipes App!</h1>
            <h2>
                This is a simple application for saving your favourite recipes.
            </h2>
        </Container>
    );
};

export default Home;
