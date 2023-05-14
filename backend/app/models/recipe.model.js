module.exports = (sequelize, Sequelize) => {
    const Recipe = sequelize.define("recipe", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        ingredients: {
            type: Sequelize.STRING
        },
    });

    return Recipe;
}