// Dependencies
const express = require("express");
const cors = require("cors");

// Configuration
const app = express();

// Controllers
const usersController = require("./controllers/usersController.js");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/users", usersController);

// Routes
app.get("/", (_req, res) => {
    res.send("Welcome to our Capstone Project");
});

app.get("*", (_req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;