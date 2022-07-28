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

// const getOneCurrency = async(currency_uid) => {
//     try {
//         const oneCurrency = await db.one("SELECT * FROM currencies WHERE currency_uid=$1",
//         currency_uid);
//         return oneCurrency;
//     } catch (error){
//         return error;
//     }
// }

module.exports = {
    getAllCurrencies,
    // getOneCurrency
}