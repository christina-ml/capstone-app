const  jwt_decode = require('jwt-decode');
const express = require('express');
const allCoins = express.Router();
const {
    getAllCurrencies,
    getAllCurrenciesWithTags,
    getOneCurrencyById,
    getOneCurrencyByIdWithTags
} = require('../queries/currencies');
const {
    getAllTagsByCurrencyId,
} = require('../queries/tags');

// get all coins - All coins existing in the database from currencies table
// Example WITHOUT "include" query for tags: http://localhost:3333/coins
// Example WITH tags: http://localhost:3333/coins?include=tags
allCoins.get("/", async (req, res)=> {
    try {
        const { authorization } = req.headers;
        /*
            check for authorization/user login, so that the favorites button can be implemented
        */
        if (authorization){
            // get rid of bearer
            // const authorizationWithoutBearer = authorization.slice(7);
            const [bearer, token] = authorization.split(' ');
            // jwt-decode
            const jwtDecodeUser = jwt_decode(token);
            // get user id
            const userId = jwtDecodeUser.uid;

            // get all currencies with tags included
            const { include } = req.query;
            // console.log("include:", include)

            // if include query is "tags"
            if (include === 'tags'){
                // embed the tags
                const allCoins = await getAllCurrenciesWithTags(userId);
                return res.status(200).json(allCoins);
            } else {
                // get all currencies without tags included
                const allCoins = await getAllCurrencies(userId);
                return res.status(200).json(allCoins);
            }
   } else {
    /*
        when there is no user authorization
        continue as regular GET all coins with tags
        (without ability to add favorites)
    */
        // get all currencies with tags included
        const { include } = req.query;
        // console.log("include:", include)

        // if include query is "tags"
        if (include === 'tags'){
            // embed the tags
            const allCoins = await getAllCurrenciesWithTags();
            return res.status(200).json(allCoins);
        } else {
            // get all currencies without tags included
            const allCoins = await getAllCurrencies();
            return res.status(200).json(allCoins);
        }
   }

    } catch (err) {
        res.status(500).json(`Error: ${err.message}`);
    }
});



// making a new route -> to re-use `getOneCurrencyById` query, but change route to:
// /coins/{cid}
// GET - get each coin by ID (to see details for every coin existing in the database)
// Example WITHOUT tags: http://localhost:3333/coins/1, http://localhost:3333/coins/3
// TODO: Example WITH "include" query for tags: http://localhost:3333/coins/3?include=tags
allCoins.get("/:cid", async (req, res) => {
    try{
        // get one currency with tags included
        const { include } = req.query;
        const { cid } = req.params;

        // if include query is "tags"
        if (include === "tags"){
            // embed the tags
            const oneCoinWithTags = await getOneCurrencyByIdWithTags(cid);
            // console.log(oneCoinWithTags)
            if (oneCoinWithTags){
                return res.status(200).json(oneCoinWithTags);
            }
            // return 404
            res.status(404).json(`Error: Could not find coin with id ${cid}`);
        } else {
            // get one coin without tags included
            const oneCoin = await getOneCurrencyById(cid);
            if (oneCoin){
                // return 200
                return res.status(200).json(oneCoin);
            }
            // return 404
            res.status(404).json(`Error: Could not find coin with id ${cid}`);
        }
        
    } catch(err){
        res.status(500).json(`Error: ${err.message}`);
    }
});

// GET /coins/:cid/tags to see all tags for one currency
// Example: http://localhost:3333/coins/1/tags, http://localhost:3333/coins/3/tags
allCoins.get('/:cid/tags', async (request, response) => {
    try {
      const { cid } = request.params;
      const currencies = await getOneCurrencyById(cid);
  
      if (currencies) {
        // return 200
        // if currencies, get the currencies's tags
        const tags = await getAllTagsByCurrencyId(cid);
        return response.status(200).json(tags);
      }
      // return 404
      response
        .status(404)
        .json({ error: `Could not find currency with id ${cid}` });
    } catch (err) {
      response.status(500).json(`Error: ${err.message}`);
    }
  });

module.exports = allCoins;