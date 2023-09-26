import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

import { ImSpinner2 } from 'react-icons/im';

import Coin from './Coin';
import './CoinList.scss';

const API = process.env.REACT_APP_API_URL;

const CoinList = () => {
  const [allCoins, setAllCoins] = useState([]);
  
  // get all coins that exist in the database
  useEffect(() => {
    axios.get(`${API}/coins`)
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
      <h2>Cryptocurrencies ({allCoins.length})</h2>
      {allCoins.length === 0 ? 
        <div className="coinList__missingCollection">
          <div className="coinList__missingCollection__spinner">
            <ImSpinner2 />
          </div>
          <div>
            Loading...
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