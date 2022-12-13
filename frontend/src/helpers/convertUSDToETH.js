function convertUSDToETH(priceInUSD) {
    // you have USD and want to convert your USD to ETH
    let startingAmtUSD = 1313.062;
    let endingAmtETH = 1;

    // The formula is: Starting Amount (Original Currency) / Ending Amount (New Currency) = Exchange Rate.
    let exchangeRate = startingAmtUSD / endingAmtETH;
    
    let costOfNFTInUSD = priceInUSD;
    let convertedUSDToETH = costOfNFTInUSD/exchangeRate;
    
    return convertedUSDToETH.toFixed(3);
}

export default convertUSDToETH;