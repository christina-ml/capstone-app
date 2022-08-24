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


  return (
    <div className="coinList">
      <h2>All Coins</h2>
      <div className="coinList__collection">
        {allCoins.map((coin) => {
          return (
            <Coin coin={coin} />
          )
        })}
      </div>
    </div>
  )
}

export default CoinList;