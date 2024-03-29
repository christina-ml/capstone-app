// Dependencies
const express = require("express");
const cors = require("cors");
// for cookies
var cookieParser = require('cookie-parser');

// for using JWT tokens - checks if our code is running in production
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}

// Configuration
const app = express();

// Controllers
const usersController = require("./controllers/usersController.js");
const allCoinsController = require("./controllers/allCoinsController.js");
const currentCryptoController = require("./controllers/currentCryptoController.js");
const favoritesController = require("./controllers/favoritesController.js");
const nftsController = require("./controllers/nftsController.js");
const accountsController = require("./controllers/accountsController.js");
const signupController = require("./controllers/signupController.js");

// Middleware
app.use(cors());
app.use(express.json());
// for cookies
app.use(cookieParser());
app.use("/users", usersController);
app.use("/coins", allCoinsController);
app.use("/currentCrypto", currentCryptoController);
app.use('/favorites', favoritesController);
app.use('/nfts', nftsController);
app.use('/accounts', accountsController); // protected route
app.use('/signup', signupController); // newsletter sign up with mailchimp

// Routes
app.get("/", (_req, res) => {
    res.send("Welcome to our Capstone Project");
});

app.get("*", (_req, res)=>{
    res.status(404).json({error: "404 Page not found."});
});

module.exports = app;