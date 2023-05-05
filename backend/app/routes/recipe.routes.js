module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");

    var router = require("express").Router();

    // Create a new Recipe
    router.post("/", recipes.create);

    // Retrieve all Recipes
    router.get("/", recipes.findAll);

    // Retrieve all published Recipes
    router.get("/published", recipes.findAllPublished);

    // Retrieve single Recipe by id
    router.get("/:id", recipes.findOne);

    // Update a Recipe by id
    router.put("/:id", recipes.update);

    // Delete a Recipe by id
    router.delete("/:id", recipes.delete);

    // Delete all Recipes
    router.delete("/", recipes.deleteAll);

    app.use('/api/recipes', router);
}