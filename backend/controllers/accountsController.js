const express = require("express");
const accounts = express.Router();

// middleware
const authenticateToken = require('../middleware/authorization');

// *** You need to be logged in to acccess this route ***
// Example: http://localhost:3333/accounts
// get all accounts of all of our users
// json object has an `number` and `balance` for each user as an array
// this information is not in our database, want to make sure we can only get it if we are logged in
// middleware - will be in the middle of our route and callback function, call it "authenticateToken"
    // if the token is authenticated, continue with our route
accounts.get('/', authenticateToken, (req, res) => {
    res.json([
        {
            'number' : '4309435345',
            'balance' : '100.00'
        },
        {
            'number' : '4709455347',
            'balance' : '900.00'
        },
    ])
});

module.exports = accounts;