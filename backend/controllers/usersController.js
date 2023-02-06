const express = require("express");
const users = express.Router();
const db = require("../db/dbConfig.js");

// bcrypt - A library to help you hash passwords (encrypt our passwords)
const bcrypt = require('bcrypt');
// json web token (JWT)
const jwt = require('jsonwebtoken');
const jwtTokens = require('../utils/jwt-helpers');

/*
 * jwt token returns something like this (an object with longer strings):
 * {accessToken: 'eyJhbewrGciOiJIUzI1NiIsInRY', 
 * refreshToken: 'eyJhbGciOiJIwefUzI1yJ1aWQiOjFpc'}
*/

const {
    getAllUsers,
    // createUser,
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

// for login account form (frontend)
users.post('/login', async (req, res) => {
    try {
        let {username, password} = req.body;
        console.log("backend->username, password:", username, password);

        // can't check the password since the password is encrypted in the database
        const user = await db.one('SELECT * FROM users WHERE username=$1', [username]);
        console.log("backend->user:", user);


        // if theres no user
        if (!user){
            res.status(401).send({error: "username is not correct"});
            return;        }

        // taking user.password the one from our database thats encrypted
        // and password that we just got (not encrypted) - going to wait until it checks that they're both the same
        // in the compare: `bcrypt.compare(password the user sent, password we have in database)`
        const validPassword = await bcrypt.compare(password, user.user_password);

         if(!validPassword){
            res.status(401).send({status: 'error', message: "Invalid password for this user."})
            return;
        }

        if (user && validPassword){
            // make a token for them
            // passing in the user - same as we did when we logged them in
            let data = jwtTokens(user);

            res.json(data);
        }

    } catch(error) {
        res.send({
            status: 'error',
            message: error.message
        })
    }
})


// create new user
// encrypt our password -> (UNIQUE username is required in `schema`!!)
// users.post("/", async(req, res) => {
//     try{
//         // const { body } = req;
//         let { firstname, lastname, username, user_password, user_email, user_admin, user_interests, user_city, user_state, photo } = req.body;

//         // validate data
//         if (username.length < 4){
//             throw({message: 'Username must be 4 characters or more'})
//         }

//         // await for bcrypt (password, how far to take it away from original)
//         // always save emails as lowercase
//         const hashedPassword = await bcrypt.hash(user_password, 10);
//         const emailToLowerCase = user_email.toLowerCase();

//         // console.log("hashedPassword:", hashedPassword)

//         // insert data into the users
//         // --> moving query here (commented out in queries folder)
//         const createdUser = await db.one(
//             "INSERT INTO users (firstname, lastname, username, user_password, user_email, user_admin, user_interests, user_city, user_state, photo) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
//             [
//                 firstname,
//                 lastname,
//                 username,
//                 hashedPassword,
//                 emailToLowerCase,
//                 user_admin,
//                 user_interests,
//                 user_city,
//                 user_state,
//                 photo
//             ]
//         );

//         // if user was created successfully
//         if(createdUser){
//             // generate JWT Token for this user
//             let data = jwtTokens(createdUser)
            
//             // send successful response (with jwt token) - the data is the token itself
//             // console.log("jwtTokendata:", data)
//             res.status(200).json(data);
//             // res.status(200).json(createdUser);
//         } else {
//             res.status(422).json("Error: User creation error");
//         }
//     } catch(err){
//         res.send({
//             status: 'error',
//             message: err.message
//         })
//     }
// });
// create new user
users.post('/', async (req, res) => {

    try {
      // get data from request
      let {username, email, password, photo} = req.body;

      // set a default photo if no photo exists when user is created
      // example: photo = https://robohash.org/ and username = blueberrypie
      // example: https://robohash.org/blueberrypie
      const defaultPhoto = photo+username;
  
      // validate data
      if(username.length < 4){
        throw({message: 'Username must be 4 characters or more'})
      }
  
      if(password.length < 6){
        throw({message: 'Password must be 6 characters or more'})
      }
  
      //validate email with validateemail function
    //   if(!validateEmail(email)){
    //     throw({message: 'Please provide a valid email'})
    //   }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const emailToLowerCase = email.toLowerCase();
  
      // insert data in users table
      const  user = await db.one('INSERT INTO users (username, user_email, user_password, photo) VALUES ($1, $2, $3, $4) RETURNING uid, username, user_email, photo', [username, emailToLowerCase, hashedPassword, defaultPhoto]);
  
      if(user){
        // Generate JWT Token
        let data = jwtTokens(user);
  
        // send successful response 
        res.json(data);
      }
  
    } catch (error) {
      res.send({
        status: 'error',
        message: error.message
      })
    }
  })

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


// AUTHENTICATE route - for `/users/authenticate`
// new route for protected route that can only be accessed if user is logged in
// get jwt token
users.get('/authenticate', async (req, res) => {
    try {
        console.log("what are our headers:", req.headers)
        // let { accessToken } = req.headers;

        console.log("authenticateBEroute-accessToken:", accessToken);
        res.send({});

    } catch (error){
        res.send('error');
    }
});

module.exports = users;