const db = require("../db/dbConfig.js");

const getAllCurrencies = async() => {
    try {
        const allCurrencies = await db.any("SELECT * FROM currencies");
        return allCurrencies;
    } catch (error){
        return error;
    }
}

// const getOneCurrency = async(currency_userid) => {
//     try {
//         const oneCurrency = await db.one("SELECT * FROM currencies WHERE currency_userid=$1",
//         currency_userid);
//         return oneCurrency;
//     } catch (error){
//         return error;
//     }
// }

module.exports = {
    getAllCurrencies,
    // getOneCurrency
}