const express = require("express");
const favorites = express.Router();
const {
    createFavorite,
    deleteFavorite,
} = require("../queries/favorites.js");

// create one favorite
favorites.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdFavorite = await createFavorite(body);
        if(createdFavorite.fid){
            res.status(200).json(createdFavorite);
        } else {
            res.status(422).json("Error: Favorite creation error");
        }
    } catch(err){
        console.log(err);
    }
});

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