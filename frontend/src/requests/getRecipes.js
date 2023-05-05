const API_URL = "http://localhost:8080"

export default async function getRecipes() {
    const response = await fetch(`${API_URL}/api/recipes`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const payload = await response.json();
    return payload;
}