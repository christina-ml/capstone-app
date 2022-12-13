function convertUSDToETH(priceInUSD) {
    // you have USD and want to convert your USD to ETH
    let startingAmtUSD = 1313.062;
    let endingAmtETH = 1;

    // The formula is: Starting Amount (Original Currency) / Ending Amount (New Currency) = Exchange Rate.
    let exchangeRate = startingAmtUSD / endingAmtETH;
    // console.log(exchangeRate);
    
    let costOfNFTInUSD = priceInUSD;
    let convertedUSDToETH = costOfNFTInUSD/exchangeRate;

    // console.log("convertedUSDToETH:", convertedUSDToETH.toFixed(3))
    return convertedUSDToETH.toFixed(3);
}

// convertUSDToETH(1313); // => 0.9999527821230072
// convertUSDToETH(4000); // => 3.0463146447007072
// convertUSDToETH(100); // => 0.07615786611751768
// https://wallethub.com/answers/cc/how-to-calculate-exchange-rates-2140664228/#:~:text=The%20formula%20is%3A%20Starting%20Amount,Calculate%20the%20foreign%20currency%20amount.

export default convertUSDToETH;