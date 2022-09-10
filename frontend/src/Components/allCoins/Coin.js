import React from 'react';
import { Link } from 'react-router-dom';

import './CoinList.scss';

const Coin = ({coin}) => {
  return (
    <div className="coin">
      <Link to={`/coins/${coin.cid}`}> 
        <div className="coin__card">
          <div className="coin__card__logo">
            <img src={coin.logo} alt="coin logo" />
            <div className="coin__card__logo__coinName">
              {coin.name}
            </div>
          </div>
          <hr />
          <div className="coin__card__basicInfo">
            <div>Price: ${coin.price}</div>
            <div>24h% {coin.percent_change_24h}%</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Coin;