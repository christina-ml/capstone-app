import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import './CoinList.scss';

// helpers - displaying price with commas
import addCommas from '../../helpers/AddCommas';

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
                {oneCoin.name} ({oneCoin.symbol}) {oneCoin.slug}
                </div>
            </div>
            <div className="coinDetails__coinCard__details">
                <div>
                    date added: {new Date(oneCoin.date_added).toLocaleString('en-US')}
                </div>
                <div>
                    max supply: {addCommas(oneCoin.max_supply)}
                    <br />
                    circulating supply: {addCommas(oneCoin.circulating_supply)}
                    <br />
                    total supply: {addCommas(oneCoin.total_supply)}
                </div>
                <div>
                    <div>Volume(24h): ${addCommas(oneCoin.volume_24h)}</div>
                    <div>Circulating Supply: {addCommas(oneCoin.circulating_supply)} {oneCoin.symbol}</div>
                </div>
                <div>
                    num market pairs {oneCoin.num_market_pairs}
                    <br />
                    tags {oneCoin.tags}
                    <br />
                    token address {oneCoin.token_address}
                    <br />
                    cmc rank {oneCoin.cmc_rank}
                    <br />
                    self reported circulating supply {addCommas(oneCoin.self_reported_circulating_supply)}
                    <br />
                    self reported market cap {addCommas(oneCoin.self_reported_market_cap)}
                    <br />
                    tvl ratio {addCommas(oneCoin.tvl_ratio)}
                    <br />
                    last updated: {new Date(oneCoin.last_updated).toLocaleString('en-US')}
                    <br />
                    price: {addCommas(oneCoin.price)}
                    <br />
                    volume 24h {addCommas(oneCoin.volume_24h)}
                    <br />
                    volume change 24h {addCommas(oneCoin.volume_change_24h)}
                    <br />
                    market cap {addCommas(oneCoin.market_cap)}
                    <br />
                    market cap dominance {addCommas(oneCoin.market_cap_dominance)}
                    <br />
                    fully diluted market cap {addCommas(oneCoin.fully_diluted_market_cap)}
                    <br />
                    tvl {addCommas(oneCoin.tvl)}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoinDetails;