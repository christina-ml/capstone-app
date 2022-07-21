const db = require("../db/dbConfig.js");

const getAllCurrencies = async() => {
    try {
        const allCurrencies = await db.any("SELECT * FROM currencies");
        return allCurrencies;
    } catch (error){
        return error;
    }
}

module.exports = {
    getAllCurrencies
}