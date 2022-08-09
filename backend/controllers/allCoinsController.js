const express = require("express");
const allCoins = express.Router();
const {
    getAllCurrencies
} = require("../queries/currencies.js");

// get all coins - All coins existing in the database from currencies table
// Example: http://localhost:3333/coins
allCoins.get("/", async (req, res)=> {
    try {
        const allCoins = await getAllCurrencies();
        if (allCoins[0]){
            res.status(200).json(allCoins);
        } else {
            res.status(500).json({ error: "Error: there are no coins" });
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = allCoins;