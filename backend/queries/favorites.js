const db = require("../db/dbConfig.js");

// create one favorite
const createFavorite = async (favorites) => {
    const {favorites_uid, favorites_cid} = favorites;
    try {
        const newFavorite = await db.one(
            "INSERT INTO favorites (favorites_uid, favorites_cid) VALUES ($1, $2) RETURNING *", 
            [
                favorites_uid,
                favorites_cid
            ]
        );
        return newFavorite;
    } catch (error){
        return error;
    }
}

// delete one favorite
const deleteFavorite = async(fid) => {
    try{
        const deletedFavorite = await db.one(
            "DELETE FROM favorites WHERE fid=$1 RETURNING *",
            fid
        );
        return deletedFavorite;
    } catch(err){
        return err;
    }
};

module.exports = {
    createFavorite,
    deleteFavorite,
}