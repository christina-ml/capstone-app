import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({coin}) => {
  return (
    <div>
        <div>
            <Link to={`/coins/${coin.cid}`}>
                {coin.name}
            </Link>
        </div>

    </div>
  )
}

export default Coin;