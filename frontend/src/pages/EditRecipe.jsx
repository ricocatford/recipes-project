import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
        <>
            {recipe && (
                <RecipeForm
                    recipeFormMode="EDIT"
                    recipeTitleData={recipe.title}
                    recipeDescriptionData={recipe.description}
                    recipeIngredientsData={recipe.ingredients}
                />
            )}
        </>
    );
};

export default EditRecipe;
