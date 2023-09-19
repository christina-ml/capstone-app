const db = require("../db/dbConfig.js");

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
    deleteFavorite,
}