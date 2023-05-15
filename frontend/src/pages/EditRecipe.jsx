import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Row } from "react-bootstrap";

import RecipeForm from "src/components/RecipeForm";
import getRecipe from "src/requests/getRecipe";

const EditRecipe = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState(null);

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
            <Row>
                {recipe && (
                    <RecipeForm
                        recipeFormMode="EDIT"
                        recipeTitleData={recipe.title}
                        recipeDescriptionData={recipe.description}
                        recipeIngredientsData={recipe.ingredients}
                        recipeId={recipe.id}
                    />
                )}
            </Row>
        </Container>
    );
};

export default EditRecipe;
