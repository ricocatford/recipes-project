import config from "src/config";

export default async function getRecipe(id) {
    const response = await fetch(`${config.API_URL}/api/recipes/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const payload = await response.json();
    
    return {
        status: response.status,
        payload: payload,
    };
}
