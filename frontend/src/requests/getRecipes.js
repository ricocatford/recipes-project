import config from "src/config";

export default async function getRecipes() {
    const response = await fetch(`${config.API_URL}/api/recipes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const payload = await response.json();
    
    return {
        status: response.status,
        payload: payload
    };
}