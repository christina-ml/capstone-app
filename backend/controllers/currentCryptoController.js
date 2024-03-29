const express = require("express");
const currentCrypto = express.Router();
const axios = require('axios');

// CoinMarketCap API key
const CoinMarketCapAPIKey = process.env.COINMARKETCAP_API_KEY;

// get Current Crypto
currentCrypto.get('/', async (req, res) => {
    try {
        // Make a request to the CoinMarketCap API
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': `${CoinMarketCapAPIKey}`,
                'Accept': 'application/json'
            }
        });
        
        // Send the data back to the client
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from CoinMarketCap:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = currentCrypto;