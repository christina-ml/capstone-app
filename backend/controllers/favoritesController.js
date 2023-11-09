const express = require("express");
const favorites = express.Router();
const {
    // getAllFavorites,
    createFavorite,
    deleteFavorite,
} = require("../queries/favorites.js");

// get all favorites (to check in Postman)
// favorites.get("/", async(req, res) => {
//     try {
//         const allFavorites = await getAllFavorites();
//         if (allFavorites[0]){
//             res.status(200).json(allFavorites);
//         } else {
//             res.status(500).json({ error: "Error: there are no favorites" });
//         }
//     } catch (err) {
//         console.log(err);
//     }
// })

// create one favorite
favorites.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdFavorite = await createFavorite(body);
        if(createdFavorite){
            // console.log(createdFavorite)
            res.status(200).json(createdFavorite);
        } else {
            res.status(422).json("Error: Favorite creation error");
        }
    } catch(err){
        console.log(err);
    }
});

// delete one favorite by favorites_uid and favorites_cid
favorites.delete("/:favorites_uid/:favorites_cid", async(req, res) => {
    const { favorites_uid, favorites_cid } = req.params;
    const deletedFavorite = await deleteFavorite(favorites_uid, favorites_cid);
    try {
        if (favorites_uid && favorites_cid){
            res.status(200).json(deletedFavorite);
        } else {
            res.status(404).json("Error: Favorite not found");
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = favorites;