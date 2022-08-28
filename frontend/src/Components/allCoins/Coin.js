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
          </div>
          <div>
            {coin.name}
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Coin;