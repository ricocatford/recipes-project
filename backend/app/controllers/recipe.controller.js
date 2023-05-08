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
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

    Recipe.findAll( { where: condition } )
        .then(data => {
            res.send(data);
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
        .then(data => {
            if (data) {
                res.send(data);
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
