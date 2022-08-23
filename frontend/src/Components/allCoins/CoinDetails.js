import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';

const API = process.env.REACT_APP_API_URL;

const CoinDetails = () => {
    const [oneCoin, setOneCoin] = useState([]);
    let { cid } = useParams();

    useEffect(() => {
        axios.get(`${API}/coins/${cid}`)
            .then((res) => {
                setOneCoin(res.data);
            }).catch((err) => {
                console.log(err);
            })
    })

  return (
    <div className="allCoins__coin">
      <div>
        Coin Details:
        {oneCoin.name}{oneCoin.cid}
      </div>

      {/* <h3>coin Name: {coin.name}</h3>
        <div>
            cid: {coin.cid}
            coinmarketcap ID: {coin.coinmarketcap_id}
        </div>
        <div>
            name: {coin.name}
            symbol: {coin.symbol}
            slug: {coin.slug}
        </div>
        <div>
            num market pairs: {coin.num_market_pairs}
            date added: {coin.date_added}
        </div>
        <div>
            Tags: {coin.tags}
        </div>
        <div>
            max supply: {coin.max_supply}
        </div>
        <div>
            circulating supply: {coin.circulating_supply}
            total supply: {coin.total_supply}
        </div>
        <div>
            cmc rank: {coin.cmc_rank}
        </div>
        <div>
            coin uid: {coin.coin_uid}
        </div> */}
    </div>
  )
}

export default CoinDetails;