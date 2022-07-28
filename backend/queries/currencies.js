const db = require("../db/dbConfig.js");

const getAllCurrencies = async (currency_uid) => {
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
    getOneCurrency,
    createCurrency,
    updateCurrency,
    deleteCurrency
}