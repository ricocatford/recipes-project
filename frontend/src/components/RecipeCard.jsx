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
        <div className="shadow rounded border-1 h-100 p-3 d-flex flex-column justify-content-between">
            <div className="">
                <Link to={`/recipes/${recipe.id}`} className="link--custom">
                    <h2>{recipe.title}</h2>
                </Link>
                <p className="text-muted">
                    Created on: {formatDate(recipe.createdAt)}
                </p>
                <p>{recipe.description}</p>
            </div>
            <div className="d-flex justify-content-end align-items-center mb-0">
                <i
                    className="fa-solid fa-trash-can cursor-pointer fs-3 link--custom"
                    onClick={() => deleteRecipe()}
                />
                <Link to={`/recipes/${recipe.id}/edit`}>
                    <i className="fa-solid fa-pencil cursor-pointer ms-3 fs-3 link--custom" />
                </Link>
            </div>
        </div>
    );
};

export default RecipeCard;
