const express = require("express");
const cors = require("cors");
const app = express();
const usersController = require("./controllers/usersController.js");
const currenciesController = require("./controllers/currenciesController.js");

app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/currencies", currenciesController);

app.get("/", (_req, res) => {
    res.send("Welcome to our Capstone Project");
});

app.get("*", (_req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;