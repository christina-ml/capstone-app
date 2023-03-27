// import db
const db = require("../db/dbConfig.js");

// import query for getting all tags by currency id
const { getAllTagsByCurrencyId } = require('./tags');

// =================================================
// ============ allCoinsController.js ==============
// =================================================
// allCoinsController.js below:
// Get list of all coins in the currencies table
// Example: http://localhost:3333/coins
const getAllCurrencies = async () => {
    try {
        const everyCurrency = await db.any("SELECT * FROM currencies");
        return everyCurrency;
    } catch (error) {
        return error;
    }
}

// Get all currencies with tags included
// Example: http://localhost:3333/coins?include=tags
const getAllCurrenciesWithTags = async () => {
    // get all currencies
    const currencies = await getAllCurrencies();
    // for each currency...
    for (const currency of currencies) {
      // get the currency's id
      const { cid } = currency;
      // call `getAllTagsByCurrencyId` to get that currency's tags
      const tags = await getAllTagsByCurrencyId(cid);

      // add tags to `currency`
      currency.tags = tags;
    }
  
    // return results
    return currencies;
};
  

// Get one coin by cid
// Example: http://localhost:3333/coins/2
const getOneCurrencyById = async (cid) => {
    try {
        const oneCurrency = await db.oneOrNone(
            "SELECT * FROM currencies WHERE cid = $1",
            [cid]
        );
        return oneCurrency;
    } catch (error){
        return error;
    }
}

// Get one coin by {cid} with tags
// Example: http://localhost:3333/coins/2?include=tags
/*
SELECT *
FROM currencies
INNER JOIN tags
ON currencies.cid=tags.currency_id
WHERE cid = 2;
*/
const getOneCurrencyByIdWithTags = async (cid) => {
    try {
        const oneCurrencyWithTags = await getOneCurrencyById(cid);

        // for each tag...(tag is not iterable, so no loop)
        // call `getAllTagsByCurrencyId` to get one currency's tags
        const tags = await getAllTagsByCurrencyId(cid);

        // add tags to `oneCurrencyWithTags`
        oneCurrencyWithTags.tags = tags;

        return oneCurrencyWithTags;
    } catch (error){
        return error;
    }
}

// =================================================
// =========== currenciesController.js =============
// =================================================
// currenciesController.js below:
// Get all coins by user ID
// Example: http://localhost:3333/users/1/currencies
const getAllCurrenciesByUserId = async (currency_uid) => {
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

// Get all coins by user ID WITH TAGS
// Example: http://localhost:3333/users/1/currencies?include=tags
const getAllCurrenciesByUserIdWithTags = async (currency_uid) => {
    try {
        const allCurrenciesWithTags = await getAllCurrenciesByUserId(currency_uid);

        // for each currency...
        for (const currency of allCurrenciesWithTags) {
            // get the currency's id
            const { cid } = currency;
            // call `getAllTagsByCurrencyId` to get that currency's tags
            const tags = await getAllTagsByCurrencyId(cid);
    
            // add tags to `currency`
            currency.tags = tags;
        }

        return allCurrenciesWithTags;
    } catch (error){
        return error;
    }
}


// =================================================
// ====== C,U,D of `CRUD` for currencies table =====
// =================================================
// CREATE
// Create a new coin
const createCurrency = async (currency) => {
    const {coinmarketcap_id, name, symbol, logo, slug, num_market_pairs, date_added, max_supply, circulating_supply, total_supply, token_address, cmc_rank, self_reported_circulating_supply, self_reported_market_cap, tvl_ratio, last_updated, price, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance, fully_diluted_market_cap, tvl, currency_uid} = currency;
    try {
        const newCurrency = await db.one(
            "INSERT INTO currencies (coinmarketcap_id, name, symbol, logo, slug, num_market_pairs, date_added, max_supply, circulating_supply, total_supply, token_address, cmc_rank, self_reported_circulating_supply, self_reported_market_cap, tvl_ratio, last_updated, price, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance, fully_diluted_market_cap, tvl, currency_uid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30) RETURNING *", 
            [
                coinmarketcap_id, 
                name, 
                symbol, 
                logo,
                slug,
                num_market_pairs,
                date_added,
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
    const {coinmarketcap_id, name, symbol, logo, slug, num_market_pairs, date_added, max_supply, circulating_supply, total_supply, token_address, cmc_rank, self_reported_circulating_supply, self_reported_market_cap, tvl_ratio, last_updated, price, volume_24h, volume_change_24h, percent_change_1h, percent_change_24h, percent_change_7d, percent_change_30d, percent_change_60d, percent_change_90d, market_cap, market_cap_dominance, fully_diluted_market_cap, tvl, currency_uid} = currency;
    try {
        const updatedCurrency = await db.one(
            "UPDATE currencies SET coinmarketcap_id=$1, name=$2, symbol=$3, logo=$4, slug=$5, num_market_pairs=$6, date_added=$7, max_supply=$8, circulating_supply=$9, total_supply=$10, token_address=$11, cmc_rank=$12, self_reported_circulating_supply=$13, self_reported_market_cap=$14, tvl_ratio=$15, last_updated=$16, price=$17, volume_24h=$18, volume_change_24h=$19, percent_change_1h=$20, percent_change_24h=$21, percent_change_7d=$22, percent_change_30d=$23, percent_change_60d=$24, percent_change_90d=$25, market_cap=$26, market_cap_dominance=$27, fully_diluted_market_cap=$28, tvl=$29, currency_uid=$30 WHERE cid=$31 RETURNING *",
            [
                coinmarketcap_id, 
                name, 
                symbol, 
                logo,
                slug,
                num_market_pairs,
                date_added,
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
    getAllCurrenciesWithTags,
    getAllCurrenciesByUserId,
    getAllCurrenciesByUserIdWithTags,
    getOneCurrencyById,
    getOneCurrencyByIdWithTags,
    createCurrency,
    updateCurrency,
    deleteCurrency
}