// Dependencies
const express = require("express");
const cors = require("cors");

// for using JWT tokens - checks if our code is running in production
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// Configuration
const app = express();

// Controllers
const usersController = require("./controllers/usersController.js");
const allCoinsController = require("./controllers/allCoinsController.js");
const nftsController = require("./controllers/nftsController.js");
const accountsController = require("./controllers/accountsController.js");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/users", usersController);
app.use("/coins", allCoinsController);
app.use('/nfts', nftsController);
app.use('/accounts', accountsController);

// Routes
app.get("/", (_req, res) => {
    res.send("Welcome to our Capstone Project");
});

app.get("*", (_req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;