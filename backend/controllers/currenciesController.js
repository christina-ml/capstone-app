const express = require("express");
const currencies = express.Router({ mergeParams: true });
const {
    getAllCurrencies,
    // createUser,
    // getOneUser,
    // updateUser,
    // deleteUser,
    // getOneUserByUsername,
} = require("../queries/currencies.js");

// get all users (not using, but can't get a list for the frontend to be able to .map over them)
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


// users.post("/", async(req, res) => {
//     const { body } = req;
//     try{
//         const createdUser = await createUser(body);
//         if(createdUser.id){
//             res.status(200).json(createdUser);
//         } else {
//             res.status(422).json("Error: User creation error");
//         }
//     } catch(err){
//         console.log(err);
//     }
// });

// // Get user by username
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

// users.get("/:id", async(req, res) => {
//     const { id } = req.params;
//     try{
//         const oneUser = await getOneUser(id);
//         if(oneUser.id){
//             res.status(200).json(oneUser);
//         } else {
//             res.status(404).json("Error: User ID not found");
//         }
//     } catch(err){
//         return err;
//     }
// });

// users.put("/:id", async(req, res) => {
//     const { id } = req.params;
//     const { body } = req;
//     const updatedUser = await updateUser(id, body);
//     if(updatedUser.id){
//         res.status(200).json(updatedUser);
//     } else {
//         res.status(404).json("Error: Unable to update User");
//     }
// });

// users.delete("/:id", async(req, res) => {
//     const { id } = req.params;
//     const deletedUser = await deleteUser(id);
//     try {
//         if(deletedUser.id){
//             res.status(200).json(deletedUser);
//         } else {
//             res.status(404).json("Error: User not found");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// });

module.exports = currencies;