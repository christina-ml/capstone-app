const db = require("../db/dbConfig.js");

// Get all reviews by currency ID
const getAllReviewsById = async (review_cid) => {
    try {
        const allReviews = await db.any(
            "SELECT * FROM reviews WHERE review_cid=$1", 
            review_cid
        );
        return allReviews;
    } catch (error){
        return error;
    }
}

module.exports = {
    getAllReviewsById,
}