import config from "src/config";

export default async function searchRecipes(searchQuery) {
    const response = await fetch(
        `${config.API_URL}/api/recipes?search=${searchQuery}`,
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    const payload = await response.json();

    return {
        status: response.status,
        payload: payload,
    };
}
