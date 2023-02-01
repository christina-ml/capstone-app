const jwt = require('jsonwebtoken');

// make sure what we generate is a real jwt token
function authenticateToken(req, res, next) {
    // get the token out of the header  // authorization is the key, the value is everything after it (bearer, token.)
    const authHeader = req.headers['authorization'];
    // check if authHeader exists && the null token - we will need to access this through our app (on frontend)
    const token = authHeader && authHeader.split(' ')[1];

    // if token is null - checking if it exists
    if (!token){
        // return 401 status
        return res.status(401).json({error: 'Null Token'});
    }

    // verify token
    // jwt is figuring out what the `error` and `user` are by us passing in the `token`
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        // if not verified
        if (error){
            // set response to 401
            return res.status(401).json({error: 'Invalid Token'});
        }

        // if verified()
        req.user = user;
        // continue on! // go back to what you were going to do
        next();
    })

}

module.exports = authenticateToken;