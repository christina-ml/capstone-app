// const express = require("express");
// const platforms = express.Router({ mergeParams: true });

// const {
//     getAllPlatformsById,
//     getOnePlatform,
//     // createCurrency,
//     // updateCurrency,
//     // deleteCurrency
// } = require("../queries/platforms.js");



// // Controllers
// // const currenciesController = require("./currenciesController.js");
// // platforms.use("/:currId/platforms", currenciesController);

// // const allCoinsController = require("./allCoinsController.js");
// // platforms.use("/:currId/platforms", allCoinsController);


// // INDEX
// // GET - Can see all platforms that belong to a currency
// // Example: http://localhost:3333/users/1/currencies/1/platforms, http://localhost:3333/users/2/currencies/2/platforms
// platforms.get("/", async (req, res)=> {
//     const { currId } = req.params;

//     try {
//         const allPlatforms = await getAllPlatformsById(currId);
//         if (allPlatforms[0]){
//             res.status(200).json(allPlatforms);
//         } else {
//             res.status(500).json({ error: "Error: there are no platforms for this token_address/currId" });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// })

// // SHOW
// // GET - A user can see one specific currencies that belong to their profile
// // Example: http://localhost:3333/users/2/currencies/3/platforms/ <token_address>, http://localhost:3333/users/2/currencies/4/platforms/ <token_address>
// platforms.get("/:token_address", async(req, res) => {
//     const { token_address } = req.params;
//     try{
//         const onePlatform = await getOnePlatform(token_address);
//         if(onePlatform.cid){
//             res.status(200).json(onePlatform);
//         } else {
//             res.status(404).json("Error: Platform ID token_address not found");
//         }
//     } catch(err){
//         return err;
//     }
// });

// module.exports = platforms;