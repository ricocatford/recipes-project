import { Link } from "react-router-dom";

import { formatDate } from "src/functions/formatDate";

const RecipeCard = ({ recipe }) => {
    const deleteRecipe = () => {
        fetch(`http://localhost:8080/api/recipes/${recipe.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => window.location.reload(false));
    };

    return (
        <>
            <Link to={`/recipes/${recipe.id}`}>
                <h2>{recipe.title}</h2>
            </Link>
            <p className="text-muted">
                Created at: {formatDate(recipe.createdAt)}
            </p>
            <p>{recipe.description}</p>
            <div className="d-flex justify-content-end align-items-center">
                <i
                    className="fa-solid fa-trash-can cursor-pointer"
                    onClick={() => deleteRecipe()}
                />
                <Link to={`/recipes/${recipe.id}/edit`}>
                    <i className="fa-solid fa-pencil cursor-pointer ms-2" />
                </Link>
            </div>
        </>
    );
};

export default RecipeCard;
