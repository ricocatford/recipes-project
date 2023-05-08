import { Link } from "react-router-dom";

import { formatDate } from "./FormatDate";

export const Recipe = ({ recipe }) => {
    const deleteRecipe = () => {
        fetch(`http://localhost:8080/api/recipes/${recipe.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(() => window.location.reload(false));
    };

    return (
        <>
            <i className="fa-solid fa-trash-can" onClick={() => deleteRecipe()} />
            <a as={Link}>
                <i className="fa-solid fa-pencil"/>
            </a>
            <h2>
                {recipe.title}
            </h2>
            <p className="text-muted">
                Created at: {formatDate(recipe.createdAt)}
            </p>
            <p>
                {recipe.description}
            </p>
        </>
    );
};