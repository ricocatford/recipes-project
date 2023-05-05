const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./app/models");
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
});

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlenconded
app.use(express.urlencoded({extended: true}));

// Simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to Recipes App, by Rico Catford."});
});

require("./app/routes/recipe.routes")(app);

// Set port and listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});