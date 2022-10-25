// get all users (not using, but can't get a list for the frontend to be able to .map over them)
const db = require("../db/dbConfig.js");

const getAllUsers = async() => {
    try {
        const allUsers = await db.any("SELECT * FROM users");
        return allUsers;
    } catch (error) {
        return error;
    }
}

const createUser = async(user) => {
    try{
        const newUser = await db.one(
            "INSERT INTO users (firstname, lastname, username, user_password, user_email, user_admin, user_interests, user_city, user_state, photo) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *",
            [
                user.firstname,
                user.lastname,
                user.username,
                user.user_password,
                user.user_email,
                user.user_admin,
                user.user_interests,
                user.user_city,
                user.user_state,
                user.photo
            ]
        );
        return newUser;
    } catch(err){
        return err;
    };
};

const getOneUser = async(uid) => {
    try{
        const oneUser = await db.one("SELECT * FROM users WHERE uid=$1", uid);
        return oneUser;
    } catch(err){
        return err;
    };
};

// const getOneUserByUsername = async(username) => {
//     try{
//         const oneUserByUsername = await db.one("SELECT * FROM users WHERE username=$1", username);
//         return oneUserByUsername;
//     } catch(err){
//         return err;
//     };
// };

const updateUser = async(uid, user) => {
    try{
        const updatedUser = await db.one(
            "UPDATE users SET firstname=$1, lastname=$2, username=$3, user_password=$4, user_email=$5, user_admin=$6, user_interests=$7, user_city=$8, user_state=$9, photo=$10 WHERE uid=$11 RETURNING *",
            [
                user.firstname,
                user.lastname,
                user.username,
                user.user_password,
                user.user_email,
                user.user_admin,
                user.user_interests,
                user.user_city,
                user.user_state,
                user.photo,
                uid
            ]
        );
        return updatedUser;
    } catch(err){
        return err;
    };
};

const deleteUser = async(uid) => {
    try{
        const deletedUser = await db.one(
            "DELETE FROM users WHERE uid=$1 RETURNING *",
            uid
        );
        return deletedUser;
    } catch(err){
        return err;
    }
};

module.exports = {
    getAllUsers,
    getOneUser,
    // getOneUserByUsername,
    createUser,
    updateUser,
    deleteUser
};