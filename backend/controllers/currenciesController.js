const express = require("express");
const currencies = express.Router({ mergeParams: true });
const {
    getAllCurrencies,
    getOneCurrency,
    createCurrency,
    updateCurrency,
    deleteCurrency
} = require("../queries/currencies.js");

// INDEX
// Example: http://localhost:3333/users/1/currencies, http://localhost:3333/users/2/currencies
currencies.get("/", async (req, res)=> {
    const { userId } = req.params;

    try {
        const allCurrencies = await getAllCurrencies(userId);
        if (allCurrencies[0]){
            res.status(200).json(allCurrencies);
        } else {
            res.status(500).json({ error: "Error: there are no currencies for this userID" });
        }
    } catch (err) {
        console.log(err);
    }
})

// SHOW
// Example: http://localhost:3333/users/2/currencies/3, http://localhost:3333/users/2/currencies/4
currencies.get("/:cid", async(req, res) => {
    const { cid } = req.params;
    try{
        const oneCurrency = await getOneCurrency(cid);
        if(oneCurrency.cid){
            res.status(200).json(oneCurrency);
        } else {
            res.status(404).json("Error: Currency ID not found");
        }
    } catch(err){
        return err;
    }
});

// A user can create new currencies
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

// A user can update a currency
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

// A user can delete a currency
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