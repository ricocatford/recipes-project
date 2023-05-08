module.exports = app => {
    const recipes = require("../controllers/recipe.controller.js");

    var router = require("express").Router();

    // Create a new Recipe
    router.post("/", recipes.create);

    // Retrieve all Recipes
    router.get("/", recipes.findAll);

    // Retrieve single Recipe by id
    router.get("/:id", recipes.findOne);

    // Update a Recipe by id
    router.put("/:id", recipes.update);

    // Delete a Recipe by id
    router.delete("/:id", recipes.delete);

    app.use('/api/recipes', router);
}