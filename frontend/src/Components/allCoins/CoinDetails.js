import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import './CoinList.scss';

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

        <div className="coinDetails__coinCard">
            <div className="coinDetails__coinCard__logo">
                <img src={oneCoin.logo} alt="coin logo" />
                <div className="coinDetails__coinCard__logo__coinName">
                {oneCoin.name} ({oneCoin.symbol})
                </div>
            </div>
            <div className="coinDetails__coinCard__details">
                <div>
                    cid: {oneCoin.cid}
                </div>
                <div>
                    coinmarketcap ID: {oneCoin.coinmarketcap_id}
                </div>
                <div>
                    slug: {oneCoin.slug}
                </div>
                <div>
                    num market pairs: {oneCoin.num_market_pairs}
                </div>
                <div>
                    date added: {oneCoin.date_added}
                </div>
                <div>
                    max supply: {oneCoin.max_supply}
                </div>
                <div>
                    circulating supply: {oneCoin.circulating_supply}
                </div>
                <div>
                    total supply: {oneCoin.total_supply}
                </div>
                <div>
                    cmc rank: {oneCoin.cmc_rank}
                </div>
                <div>
                    coin uid: {oneCoin.coin_uid}
                </div>
                <div>
                    tags: {oneCoin.tags}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoinDetails;