const express = require("express");
const reviews = express.Router({ mergeParams: true });
const {
    getAllReviewsById,
} = require("../queries/reviews.js");

// get all reviews by currency id
// Examples: http://localhost:3333/coins/1/reviews, http://localhost:3333/coins/13/reviews
reviews.get("/", async (req, res)=> {
    const { currencyId } = req.params;
    try {
        const allReviews = await getAllReviewsById(currencyId);
        if (allReviews[0]){
            res.status(200).json(allReviews);
        } else {
            res.status(500).json({ error: "Error: there are no reviews" });
        }
    } catch (err) {
        console.log(err);
    }
})

module.exports = reviews;