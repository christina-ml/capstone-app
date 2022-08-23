import React from 'react';
import { Link } from 'react-router-dom';

const Coin = ({coin}) => {
  return (
    <div>
        <div>
            <Link to={`/coins/${coin.cid}`}>
                See coin details for {coin.name}
            </Link>
        </div>

    </div>
  )
}

export default Coin;