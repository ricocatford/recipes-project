import { Container, Row } from "react-bootstrap";

import { NewRecipeForm } from "../components/NewRecipeForm";

const AddRecipes = () => {
    return (
        <Container className="container--custom mt-2">
            <Row>
                <NewRecipeForm />
            </Row>
        </Container>
    );
};

export default AddRecipes;