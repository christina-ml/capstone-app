import React from 'react';
import './Currencies.scss';

const Currency = ({ currency }) => {
  return (
    <div className="currency">
        <div className="currency__coinName">
            <div className="currency__coinName__coinLogo">
                <img src={currency.logo} alt={currency.name} />
            </div>
            <div className="currency__coinName__coinNameHeader">
                <h2>{currency.name}</h2>
            </div>
        </div>
        <div className="currency__details">
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
            <div>
                added to backend (needs testing):
            </div>
            <div>
                token address: {currency.token_address}
                self reported circulating supply: {currency.self_reported_circulating_supply}
                self reported market cap: {currency.self_reported_market_cap}
            </div>
            <div>
                tvl ratio: {currency.tvl_ratio}
                last updated: {currency.last_updated}
                price: {currency.price}
            </div>
            <div>
                volume 24h: {currency.volume_24h}
                volume change 24h: {currency.volume_change_24h}
            </div>
            <div>
                percent change 1h: {currency.percent_change_1h }
                percent change 24h: {currency.percent_change_24h} 
                <br />
                percent change 7d: {currency.percent_change_7d }
                percent change 30d: {currency.percent_change_30d} 
                percent change 60d: {currency.percent_change_60d} 
                percent change 90d: {currency.percent_change_90d} 
            </div>
            <div>
                marketcap: {currency.market_cap}
                market cap dominance: {currency.market_cap_dominance}
            </div>
            <div>
                fully diluted market cap: {currency.fully_diluted_market_cap}
                tvl: {currency.tvl}
            </div>
        </div>
    </div>
  )
}

export default Currency;