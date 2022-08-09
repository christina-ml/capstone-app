const db = require("../db/dbConfig.js");

// allCoinsController.js below:
// Get list of all coins in the currencies table
const getAllCurrencies = async() => {
    try {
        const everyCurrency = await db.any("SELECT * FROM currencies");
        return everyCurrency;
    } catch (error) {
        return error;
    }
}

// currenciesController.js below:
// Get all coins by user ID
const getAllCurrenciesById = async (currency_uid) => {
    try {
        const allCurrencies = await db.any(
            "SELECT * FROM currencies WHERE currency_uid=$1", 
            currency_uid
        );
        return allCurrencies;
    } catch (error){
        return error;
    }
}

// Get one coin by cid
const getOneCurrency = async (cid) => {
    try {
        const oneCurrency = await db.one(
            "SELECT * FROM currencies WHERE cid=$1",
            cid
        );
        return oneCurrency;
    } catch (error){
        return error;
    }
}

// CREATE
// Create a new coin
const createCurrency = async (currency) => {
    const {coinmarketcap_id, name, symbol, slug, num_market_pairs, date_added, tags, max_supply, circulating_supply, total_supply, cmc_rank, currency_uid} = currency;
    try {
        const newCurrency = await db.one(
            "INSERT INTO currencies (coinmarketcap_id, name, symbol, slug, num_market_pairs, date_added, tags, max_supply, circulating_supply, total_supply, cmc_rank, currency_uid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *", 
            [
                coinmarketcap_id, 
                name, 
                symbol, 
                slug,
                num_market_pairs,
                date_added,
                tags,
                max_supply,
                circulating_supply,
                total_supply,
                cmc_rank,
                currency_uid,
            ]
        );
        return newCurrency;
    } catch (error){
        return error;
    }
}


// UPDATE
// Update a coin by cid
const updateCurrency = async (cid, currency) => {
    const {coinmarketcap_id, name, symbol, slug, num_market_pairs, date_added, tags, max_supply, circulating_supply, total_supply, cmc_rank, currency_uid} = currency;
    try {
        const updatedCurrency = await db.one(
            "UPDATE currencies SET coinmarketcap_id=$1, name=$2, symbol=$3, slug=$4, num_market_pairs=$5, date_added=$6, tags=$7, max_supply=$8, circulating_supply=$9, total_supply=$10, cmc_rank=$11, currency_uid=$12 WHERE cid=$13 RETURNING *",
            [
                coinmarketcap_id, 
                name, 
                symbol, 
                slug,
                num_market_pairs,
                date_added,
                tags,
                max_supply,
                circulating_supply,
                total_supply,
                cmc_rank,
                currency_uid,
                cid
            ]
        );
        return updatedCurrency;
    } catch (error){
        return error;
    }
}

// DELETE
// delete a coin by cid
const deleteCurrency = async (cid) => {
    try {
        const deletedCurrency = await db.one(
            "DELETE FROM currencies WHERE cid=$1 RETURNING *",
            cid
        );
        return deletedCurrency;
    } catch (error){
        return error;
    }

}

module.exports = {
    getAllCurrencies,
    getAllCurrenciesById,
    getOneCurrency,
    createCurrency,
    updateCurrency,
    deleteCurrency
}