// TODO: function to generate tokens
const jwt = require('jsonwebtoken');

function jwtTokens({ uid, username, user_email }){
    // sets up our user
    const user = { uid, username, user_email };

    // passes in our user to give it the tokens, to be good for 30 days
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn: '30d'});
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, {expiresIn: '30d'});

    return ({accessToken, refreshToken});
}


// Creating Randomness - why we use a secret key:
// secret token of 8 characters
// function generateToken (secretKey){
//     let token = '';

//     for (let i = 0; i < 8; i++){
//         token += String.fromCharCode(97 + secretKey.charCodeAt(i));
//     }

//     // token = 'aaaaaaaa'

//     return token;
// }


module.exports = jwtTokens;