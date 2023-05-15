import { Container, Row } from "react-bootstrap";

import RecipeForm from "../components/RecipeForm";

const NewRecipe = () => {
    return (
        <Container className="container--custom mt-2">
            <Row>
                <RecipeForm recipeFormMode="NEW" />
            </Row>
        </Container>
    );
};

export default NewRecipe;
