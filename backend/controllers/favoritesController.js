const express = require("express");
const favorites = express.Router();
const {
    deleteFavorite,
} = require("../queries/favorites.js");

// delete one favorite
favorites.delete("/:fid", async(req, res) => {
    const { fid } = req.params;
    const deletedFavorite = await deleteFavorite(fid);
    try {
        if(deletedFavorite.fid){
            res.status(200).json(deletedFavorite);
        } else {
            res.status(404).json("Error: Favorite not found");
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = favorites;