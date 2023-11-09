const db = require("../db/dbConfig.js");

// get all favorites (to check in Postman)
// const getAllFavorites = async () => {
// 	try {
// 		const allFavorites = await db.any("SELECT * FROM favorites");
// 		return allFavorites;
// 	} catch (error) {
// 		return error;
// 	}
// };

// create one favorite
const createFavorite = async (favorites) => {
	const { favorites_uid, favorites_cid } = favorites;
	try {
		const newFavorite = await db.one(
			"INSERT INTO favorites (favorites_uid, favorites_cid) VALUES ($1, $2) RETURNING *",
			[favorites_uid, favorites_cid]
		);
		return newFavorite;
	} catch (error) {
		console.log("favorite creation err msg:", error);
		return error;
	}
};

// delete one favorite by favorites_uid and favorites_cid
const deleteFavorite = async (favorites_uid, favorites_cid) => {
	try {
		const deletedFavorite = await db.one(
			`DELETE FROM favorites 
            WHERE favorites_uid = $1 
            AND favorites_cid = $2 
            RETURNING *`,
			[favorites_uid, favorites_cid]
		);
		return deletedFavorite;
	} catch (err) {
		return err;
	}
};

module.exports = {
	// getAllFavorites,
	createFavorite,
	deleteFavorite,
};
