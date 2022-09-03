import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

import Coin from './Coin';
import './CoinList.scss';

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

      {/* <select onChange={handleChange}>
        <option>--Select--</option>
        <option value="asc">Name Asc.</option>
        <option value="desc">Name Desc.</option>
        <option value="popular">Popular</option>
      </select> */}

      <div className="coinList__collection">
        {sortedCoinsAsc.map((coin) => {
          return (
            <Coin coin={coin} />
          )
        })}
      </div>
    </div>
  )
}

export default CoinList;