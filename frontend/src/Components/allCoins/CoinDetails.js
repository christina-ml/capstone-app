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
    <div className="coinDetails">

    <h3>coin Name: {oneCoin.name}</h3>
        <div>
            cid: {oneCoin.cid}
            coinmarketcap ID: {oneCoin.coinmarketcap_id}
        </div>
        <div>
            name: {oneCoin.name}
            symbol: {oneCoin.symbol}
            slug: {oneCoin.slug}
        </div>
        <div>
            num market pairs: {oneCoin.num_market_pairs}
            date added: {oneCoin.date_added}
        </div>
        <div>
            Tags: {oneCoin.tags}
        </div>
        <div>
            max supply: {oneCoin.max_supply}
        </div>
        <div>
            circulating supply: {oneCoin.circulating_supply}
            total supply: {oneCoin.total_supply}
        </div>
        <div>
            cmc rank: {oneCoin.cmc_rank}
        </div>
        <div>
            coin uid: {oneCoin.coin_uid}
        </div>
    </div>
  )
}

export default CoinDetails;