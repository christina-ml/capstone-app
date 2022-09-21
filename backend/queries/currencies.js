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
    const {coinmarketcap_id, name, symbol, logo, slug, num_market_pairs, date_added, tags, max_supply, circulating_supply, total_supply, token_address, cmc_rank, self_reported_circulating_supply, self_reported_market_cap, tvl_ratio, last_updated, price, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance, fully_diluted_market_cap, tvl, currency_uid} = currency;
    try {
        const newCurrency = await db.one(
            "INSERT INTO currencies (coinmarketcap_id, name, symbol, logo, slug, num_market_pairs, date_added, tags, max_supply, circulating_supply, total_supply, token_address, cmc_rank, self_reported_circulating_supply, self_reported_market_cap, tvl_ratio, last_updated, price, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance, fully_diluted_market_cap, tvl, currency_uid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31) RETURNING *", 
            [
                coinmarketcap_id, 
                name, 
                symbol, 
                logo,
                slug,
                num_market_pairs,
                date_added,
                tags,
                max_supply,
                circulating_supply,
                total_supply,
                token_address,
                cmc_rank,
                self_reported_circulating_supply,
                self_reported_market_cap,
                tvl_ratio,
                last_updated,
                price,
                volume_24h,
                volume_change_24h,
                percent_change_1h,
                percent_change_24h,
                percent_change_7d,
                percent_change_30d,
                percent_change_60d,
                percent_change_90d,
                market_cap,
                market_cap_dominance,
                fully_diluted_market_cap,
                tvl,
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
    const {coinmarketcap_id, name, symbol, logo, slug, num_market_pairs, date_added, tags, max_supply, circulating_supply, total_supply, token_address, cmc_rank, self_reported_circulating_supply, self_reported_market_cap, tvl_ratio, last_updated, price, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance, fully_diluted_market_cap, tvl, currency_uid} = currency;
    try {
        const updatedCurrency = await db.one(
            "UPDATE currencies SET coinmarketcap_id=$1, name=$2, symbol=$3, logo=$4, slug=$5, num_market_pairs=$6, date_added=$7, tags=$8, max_supply=$9, circulating_supply=$10, total_supply=$11, token_address=$12, cmc_rank=$13, self_reported_circulating_supply=$14, self_reported_market_cap=$15, tvl_ratio=$16, last_updated=$17, price=$18, volume_24h=$19, volume_change_24h=$20, percent_change_1h=$21, percent_change_24h=$22, percent_change_7d=$23, percent_change_30d=$24, percent_change_60d=$25, percent_change_90d=$26, market_cap=$27, market_cap_dominance=$28, fully_diluted_market_cap=$29, tvl=$30, currency_uid=$31 WHERE cid=$32 RETURNING *",
            [
                coinmarketcap_id, 
                name, 
                symbol, 
                logo,
                slug,
                num_market_pairs,
                date_added,
                tags,
                max_supply,
                circulating_supply,
                total_supply,
                token_address,
                cmc_rank,
                self_reported_circulating_supply,
                self_reported_market_cap,
                tvl_ratio,
                last_updated,
                price,
                volume_24h,
                volume_change_24h,
                percent_change_1h,
                percent_change_24h,
                percent_change_7d,
                percent_change_30d,
                percent_change_60d,
                percent_change_90d,
                market_cap,
                market_cap_dominance,
                fully_diluted_market_cap,
                tvl,
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