// const db = require("../db/dbConfig.js");

// // for allCoinsController.js below:
// // Get list of all platforms in the currencies table
// const getAllPlatforms = async() => {
//     try {
//         const everyPlatform = await db.any("SELECT * FROM platforms");
//         return everyPlatform;
//     } catch (error) {
//         return error;
//     }
// }

// // for currenciesController.js below:
// // Get all platforms by curr ID
// const getAllPlatformsById = async (token_address) => {
//     try {
//         const allPlatforms = await db.any(
//             "SELECT * FROM platforms WHERE token_address=$1", 
//             token_address
//         );
//         return allPlatforms;
//     } catch (error){
//         return error;
//     }
// }

// // Get one platform by token_address
// const getOnePlatform = async (token_address) => {
//     try {
//         const onePlatform = await db.one(
//             "SELECT * FROM platforms WHERE token_address=$1",
//             token_address
//         );
//         return onePlatform;
//     } catch (error){
//         return error;
//     }
// }


// module.exports = {
//     getAllPlatforms,
//     getAllPlatformsById,
//     getOnePlatform,
//     // createCurrency,
//     // updateCurrency,
//     // deleteCurrency
// }