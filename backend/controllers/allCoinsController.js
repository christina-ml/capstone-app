const express = require("express");
const allCoins = express.Router();
const {
    getAllCurrencies,
    getOneCurrency
} = require("../queries/currencies.js");

// Controllers
const reviewsController = require("./reviewsController.js");
allCoins.use('/:currencyId/reviews', reviewsController);

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



// making a new route -> to re-use `getOneCurrency` query, but change route to:
// /coins/{cid}
// GET - get each coin by ID (to see details for every coin existing in the database)
// Example: http://localhost:3333/coins/1, http://localhost:3333/coins/3
allCoins.get("/:cid", async(req, res) => {
    const { cid } = req.params;
    try{
        const oneCoin = await getOneCurrency(cid);
        if(oneCoin.cid){
            res.status(200).json(oneCoin);
        } else {
            res.status(404).json("Error: Coin ID not found");
        }
    } catch(err){
        return err;
    }
});


module.exports = allCoins;