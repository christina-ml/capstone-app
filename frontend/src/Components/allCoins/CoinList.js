import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from './Coin';
import LoadingSpinner from '../../cryptotalkComponents/buttons/LoadingSpinner';

// SCSS & react icons
import './CoinList.scss';

// User Login information
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

const API = process.env.REACT_APP_API_URL;

const CoinList = ({ loggedIn }) => {
  const [allCoins, setAllCoins] = useState([]);

  // const jwtDecodeUser = jwt_decode(Cookies.get('accessToken'));
  // console.log(jwtDecodeUser)
	// console.log(jwtDecodeUser.uid)
  

  /*
    if jwtDecodeUser has a value, there is an access token
    Then I want to fetch from the backend with coins and favorites
  */


  // get all coins that exist in the database
  useEffect(() => {
    axios.get(`${API}/coins`)
        .then((res) => {
            // console.log("res.data:", res.data)
            setAllCoins(res.data);
        }).catch((err) => {
            console.log(err);
        })
  }, []);

  // useEffect(() => {
  //   axios.get(`${API}/coins`, {
  //     headers: {
  //       authorization: `Bearer ${Cookies.get("accessToken")}`
  //     }
  //   })
  //       .then((res) => {
  //           console.log("res.data:", res.data)
  //           setAllCoins(res.data);
  //       }).catch((err) => {
  //           console.log(err);
  //       })
  // }, []);

  // console.log("allCoins", allCoins)

  // make `allCoins` sorted alphabetically
  const sortedCoinsAsc = allCoins.sort((a,b) => {
    return (a.name > b.name) ? 1 : -1;
  })

  return (
    <div className="coinList">
      <h2>Cryptocurrencies ({allCoins.length})</h2>
      {allCoins.length === 0 ? 
        <LoadingSpinner spinnerLabel="Loading..." />
      :
        <div className="coinList__collection">
          {sortedCoinsAsc.map((coin) => {
            return (
              <Coin 
                coin={coin} 
                key={coin.name + coin.cid}
                loggedIn={loggedIn}
              />
            )
          })}
        </div>
      }
    </div>
  )
}

export default CoinList;