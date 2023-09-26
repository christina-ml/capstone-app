import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

// User Login information
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

import './Coin.scss';

// helpers - displaying price with commas
import addCommas from '../../helpers/AddCommas';

// chart js for coin changes
import ChartJsCoin from './chartjs/ChartJsCoin';

// react icons
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const API = process.env.REACT_APP_API_URL;

const Coin = ({coin}) => {
  // const jwtDecodeUser = jwt_decode(Cookies.get('accessToken'));
  // console.log(jwtDecodeUser)
  // console.log(jwtDecodeUser.uid)

  // need to POST to: favorites_uid, favorites_cid
  const addFavorite = (e) => {        
    const jwtDecodeUser = jwt_decode(Cookies.get('accessToken'));
    e.preventDefault();

    // check if accessToken exists in cookies
    if (Cookies.get('accessToken')){
      // user is logged in and can favorite this coin
      axios.post(`${API}/favorites`, {
        favorites_uid: `${jwtDecodeUser.uid}`,
        favorites_cid: `${coin.cid}`
      })
      .then((res) => {

      }).catch((err) => {
          console.log(err);
      })
    }
  }

  return (
    <div className="coin">
      <Link to={`/coins/${coin.cid}`}> 
        <div className="coin__card">
          <div className="coin__card__logo">
            <img src={coin.logo} alt="coin logo" />
            <div className="coin__card__logo__coinName">
              {coin.name} <span className="coin__card__logo__coinName__symbol">{coin.symbol}</span>
            </div>
            <button 
                       className="coin__card__logo__favoriteCoin"
                        onClick={addFavorite}
                    >
                        <FaRegHeart></FaRegHeart>
                    </button>
          </div>
          <hr />
          <div className="coin__card__basicInfo">
            <div className="coin__card__basicInfo__price">Price: ${addCommas(coin.price)}</div>
            <div className="coin__card__basicInfo__price">Market Cap: ${addCommas(coin.market_cap)}</div>
            
            <ChartJsCoin coin={coin}/>
            
            <div className="coin__card__basicInfo__lastUpdated">Last Updated: {new Date(coin.last_updated).toLocaleString('en-US')}</div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Coin;