import React from 'react';
import { Link } from 'react-router-dom';

import './CoinList.scss';

// helpers - displaying price with commas
import addCommas from '../../helpers/AddCommas';

// chart js for coin changes
import ChartJsCoin from './chartjs/ChartJsCoin';

const Coin = ({coin}) => {

  return (
    <div className="coin">
      <Link to={`/coins/${coin.cid}`}> 
        <div className="coin__card">
          <div className="coin__card__logo">
            <img src={coin.logo} alt="coin logo" />
            <div className="coin__card__logo__coinName">
              {coin.name} <span className="coin__card__logo__coinName__symbol">{coin.symbol}</span>
            </div>
          </div>
          <hr />
          <div className="coin__card__basicInfo">
            <div className="coin__card__basicInfo__price">Price: ${addCommas(coin.price)}</div>
            <div className="coin__card__basicInfo__price">Market Cap: ${addCommas(coin.market_cap)}</div>
            
            <ChartJsCoin coin={coin} />
            
            <div className="coin__card__basicInfo__lastUpdated">Last Updated: {new Date(coin.last_updated).toLocaleString('en-US')}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Coin;