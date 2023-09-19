const express = require("express");
const currencies = express.Router({ mergeParams: true });
const {
    getAllCurrenciesByUserId,
    getAllCurrenciesByUserIdWithTags,
    getOneCurrencyById,
    createCurrency,
    updateCurrency,
    deleteCurrency
} = require("../queries/currencies.js");

// INDEX
// GET - A user can see all currencies that belong to their profile
// Example: http://localhost:3333/users/1/currencies
// Example: http://localhost:3333/users/3/currencies?include=tags
currencies.get("/", async (req, res)=> {
    const { userId } = req.params;
    const { include } = req.query;
    // console.log("include:", include)

    try {
        if (include === 'tags'){
            // embed the tags
            const allCurrencies = await getAllCurrenciesByUserIdWithTags(userId);
            return res.status(200).json(allCurrencies);
        } else {
            // get all currencies without tags included
            const allCurrencies = await getAllCurrenciesByUserId(userId);
            return res.status(200).json(allCurrencies);
        }
    } catch (err) {
        res.status(500).json(`Error: ${err.message}`);
    }
})

// SHOW
// GET - A user can see one specific currencies that belong to their profile
// Example: http://localhost:3333/users/2/currencies/3, http://localhost:3333/users/2/currencies/4
currencies.get("/:cid", async(req, res) => {
    const { cid } = req.params;
    try{
        const oneCurrency = await getOneCurrencyById(cid);
        if(oneCurrency.cid){
            res.status(200).json(oneCurrency);
        } else {
            res.status(404).json("Error: Currency ID not found");
        }
    } catch(err){
        return err;
    }
});

// CREATE - A user can create new currencies that belongs to them (for any user's ID)
currencies.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdCurrency = await createCurrency(body);
        if(createdCurrency.cid){
            res.status(200).json(createdCurrency);
        } else {
            res.status(422).json("Error: Currency creation error");
        }
    } catch(err){
        console.log(err);
    }
});

// UPDATE - A user can update a currency that belongs to them
// Example: localhost:3333/users/2/currencies, localhost:3333/users/4/currencies
currencies.put("/:cid", async(req, res) => {
    const { cid } = req.params;
    const { body } = req;
    const updatedCurrency = await updateCurrency(cid, body);
    if(updatedCurrency.cid){
        res.status(200).json(updatedCurrency);
    } else {
        res.status(404).json("Error: Unable to update Currency");
    }
});

// DELETE - A user can delete a currency that belongs to them
// Example: localhost:3333/users/4/currencies/6, localhost:3333/users/4/currencies/23
currencies.delete("/:cid", async(req, res) => {
    const { cid } = req.params;
    const deletedCurrency = await deleteCurrency(cid);
    try {
        if(deletedCurrency.cid){
            res.status(200).json(deletedCurrency);
        } else {
            res.status(404).json("Error: Currency not found");
        }
    } catch (error) {
        console.log(error);
    }
});


// // Get currency by name
// users.get("/login/:username", async(req, res) => {
//     const { username } = req.params;
//     try{
//         const oneUserByUsername = await getOneUserByUsername(username);
//         if(oneUserByUsername.id){
//             res.status(200).json(oneUserByUsername);
//         } else {
//             res.status(404).json("Error: Username not found");
//         }
//     } catch(err){
//         return err;
//     }
// });

module.exports = currencies;