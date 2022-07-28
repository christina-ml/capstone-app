const express = require("express");
const users = express.Router();
const {
    getAllUsers,
    createUser,
    getOneUser,
    updateUser,
    deleteUser,
    // getOneUserByUsername,
} = require("../queries/users.js");

// Controllers
const currenciesController = require("./currenciesController.js");
users.use("/:userId/currencies", currenciesController);

// get all users (not using, but can't get a list for the frontend to be able to .map over them)
users.get("/", async (req, res)=> {
    try {
        const allUsers = await getAllUsers();
        if (allUsers[0]){
            res.status(200).json(allUsers);
        } else {
            res.status(500).json({ error: "Error: there are no users" });
        }
    } catch (err) {
        console.log(err);
    }
})


users.post("/", async(req, res) => {
    const { body } = req;
    try{
        const createdUser = await createUser(body);
        if(createdUser.uid){
            res.status(200).json(createdUser);
        } else {
            res.status(422).json("Error: User creation error");
        }
    } catch(err){
        console.log(err);
    }
});

// Get user by username
// users.get("/login/:username", async(req, res) => {
//     const { username } = req.params;
//     try{
//         const oneUserByUsername = await getOneUserByUsername(username);
//         if(oneUserByUsername.uid){
//             res.status(200).json(oneUserByUsername);
//         } else {
//             res.status(404).json("Error: Username not found");
//         }
//     } catch(err){
//         return err;
//     }
// });

users.get("/:uid", async(req, res) => {
    const { uid } = req.params;
    try{
        const oneUser = await getOneUser(uid);
        if(oneUser.uid){
            res.status(200).json(oneUser);
        } else {
            res.status(404).json("Error: User ID not found");
        }
    } catch(err){
        return err;
    }
});

users.put("/:uid", async(req, res) => {
    const { uid } = req.params;
    const { body } = req;
    const updatedUser = await updateUser(uid, body);
    if(updatedUser.uid){
        res.status(200).json(updatedUser);
    } else {
        res.status(404).json("Error: Unable to update User");
    }
});

users.delete("/:uid", async(req, res) => {
    const { uid } = req.params;
    const deletedUser = await deleteUser(uid);
    try {
        if(deletedUser.uid){
            res.status(200).json(deletedUser);
        } else {
            res.status(404).json("Error: User not found");
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = users;