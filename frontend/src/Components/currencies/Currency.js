import React from 'react'

const Currency = ({ currency }) => {
  return (
    <div>
        <h3>Currency Name: {currency.name}</h3>
        <div>
            cid: {currency.cid}
            coinmarketcap ID: {currency.coinmarketcap_id}
        </div>
        <div>
            name: {currency.name}
            symbol: {currency.symbol}
            slug: {currency.slug}
        </div>
        <div>
            num market pairs: {currency.num_market_pairs}
            date added: {currency.date_added}
        </div>
        <div>
            Tags: {currency.tags}
        </div>
        <div>
            max supply: {currency.max_supply}
        </div>
        <div>
            circulating supply: {currency.circulating_supply}
            total supply: {currency.total_supply}
        </div>
        <div>
            cmc rank: {currency.cmc_rank}
        </div>
        <div>
            currency uid: {currency.currency_uid}
        </div>
        
        
        
        
       
        
        

    </div>
  )
}

export default Currency;