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
            <div className="d-flex justify-content-between">
                <i
                    className="fa-solid fa-trash-can cursor-pointer"
                    onClick={() => deleteRecipe()}
                />
                <Link to={`${recipe.id}/edit`}>
                    <i className="fa-solid fa-pencil cursor-pointer" />
                </Link>
            </div>
            <Link to={`${recipe.id}`}>
                <h2>{recipe.title}</h2>
            </Link>
            <p className="text-muted">
                Created at: {formatDate(recipe.createdAt)}
            </p>
            <p>{recipe.description}</p>
        </>
    );
};

export default RecipeCard;
