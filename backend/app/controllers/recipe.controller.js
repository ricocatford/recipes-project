const db = require("../models");
const Recipe = db.recipes;
const Op = db.Sequelize.Op;

// Create and Save a new Recipe
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content cannot be empty."
        });
        return;
    }
    // Create a Recipe
    const recipe = {
        title: req.body.title,
        description: req.body.description,
        ingredients: req.body.ingredients.join(";"),
    }

    // Save Recipe in the db
    Recipe.create(recipe)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Recipe."
            });
    });
};

// Retrieve all Recipes
exports.findAll = (req, res) => {
    const search = req.query.search;
    let condition = search ? 
        { 
            [Op.or]: [
                {title: {[Op.like]: `%${search}%`}},
                {description: {[Op.like]: `%${search}%`}},
            ] 
        } 
        : null;

    Recipe.findAll( { where: condition } )
        .then(recipes => {
            recipes = recipes.map(recipe => {
                recipe.dataValues.ingredients = recipe.dataValues.ingredients.split(";");
                return recipe;
            })
            res.send(recipes);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving Recipes." 
            });
    })
};

// Find specific Recipe by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Recipe.findByPk(id)
        .then(recipe => {
            if (recipe) {
                recipe.dataValues.ingredients = recipe.dataValues.ingredients.split(";");
                res.send(recipe);
            } else {
                res.status(404).send({
                    message: `Cannot find Recipe with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Recipe with id=" + id
            });
        });
};

// Update speicific Recipe by id
exports.update = (req, res) => {
    const id = req.params.id;

    Recipe.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Recipe was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Recipe with id=${id}. Perhaps Recipe was not found or req.body is empty.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Recipe with id=" + id
            });
        });
};

// Delete specific Recipe by id
exports.delete = (req, res) => {
    const id = req.params.id;

    Recipe.destroy({
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Recipe was deleted successfully."
                });
            } else {
                res.send({
                    message: `Cannot delete Recipe with id=${id}. Perhaps Recipe was not found.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Cannot delete Recipe with id=" + id
            });
        });
};
