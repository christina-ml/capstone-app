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

module.exports = jwtTokens;