import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

import Coin from './Coin';
import './CoinList.scss';

// cryptoTalk component
import CryptoButton from '../../cryptotalkComponents/buttons/CryptoButton';

const API = process.env.REACT_APP_API_URL;

const CoinList = () => {
  const [allCoins, setAllCoins] = useState([]);
  
  // get all coins that exist in the database
  useEffect(() => {
    axios.get(API + "/coins")
        .then((res) => {
            console.log("res.data:", res.data)
            setAllCoins(res.data);
        }).catch((err) => {
            console.log(err);
        })
  }, []);

  // make `allCoins` sorted alphabetically
  const sortedCoinsAsc = allCoins.sort((a,b) => {
    return (a.name > b.name) ? 1 : -1;
  })

  return (
    <div className="coinList">
      <h2>All Coins</h2>
      {allCoins.length === 0 ? 
        <div className="coinList__missingCollection">
          <div>...waiting for backend data to load</div>
          <div>If problem persists for more than a few minutes,
            please contact site admin here:
            <br />
            <CryptoButton buttonText="Contact Info"></CryptoButton>

          </div>

        </div> 
      :
        <div className="coinList__collection">
          {sortedCoinsAsc.map((coin) => {
            return (
              <Coin coin={coin} key={coin.name + coin.cid}/>
            )
          })}
        </div>
      }
    </div>
  )
}

export default CoinList;