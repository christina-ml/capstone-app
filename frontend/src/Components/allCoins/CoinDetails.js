import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import './CoinList.scss';

// helpers - displaying price with commas
import addCommas from '../../helpers/AddCommas';

import ChartJsCoin from './chartjs/ChartJsCoin.js';


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
                {oneCoin.name} <span>{oneCoin.symbol}</span>
                </div>
            </div>

            <div className="coinDetails__coinCard__details">
                <div className="coinDetails__coinCard__details__oneAndTwo">
                    {/* Section #1 */}
                    <div>
                        <div>
                            Rank #{oneCoin.cmc_rank}
                        </div>
                    </div>

                    {/* Section #2 */}
                    <div>
                        {oneCoin.slug} price ({oneCoin.symbol})
                        <br />
                        <div className="coinDetails__coinCard__details__oneAndTwo__price">
                            ${addCommas(oneCoin.price)}
                        </div>
                    </div>
                </div>

                {/* Section #3 */}
                <div className="coinDetails__coinCard__details__sectionThree">
                    <div>
                        <div className="coinDetails__coinCard__details__sectionThree__label">
                            Market Cap:
                        </div>
                        <div>${addCommas(oneCoin.market_cap)}</div>
                        
                    </div>
                    <div>
                        <div className="coinDetails__coinCard__details__sectionThree__label">
                            Fully Diluted Market Cap:
                        </div>
                        <div>${addCommas(oneCoin.fully_diluted_market_cap)}</div>
                    </div>
                    <div>
                        <div className="coinDetails__coinCard__details__sectionThree__label">
                            Volume 24h:
                        </div>
                        <div>${addCommas(oneCoin.volume_24h)}</div>
                        <div>volume change 24h: {addCommas(oneCoin.volume_change_24h)}</div>
                    </div>
                    <div>
                        <div className="coinDetails__coinCard__details__sectionThree__label">
                            Circulating Supply
                        </div>
                        <div>{addCommas(oneCoin.circulating_supply)} {oneCoin.symbol}</div>
                        <div className="coinDetails__coinCard__details__sectionThree__label">
                            Max Supply
                        </div>
                        <div>
                            {(oneCoin.max_supply > 0) ? addCommas(oneCoin.max_supply) : <span>--</span>}
                        </div>
                        <div className="coinDetails__coinCard__details__sectionThree__label">
                            Total Supply
                        </div>
                        <div>
                            {addCommas(oneCoin.total_supply)}
                        </div>
                    </div>
                </div>

                {/* Section 4 */}
                <div className="coinDetails__coinCard__details__sectionFour">
                    <ChartJsCoin coin={oneCoin} />
                    <div>
                        Last updated: {new Date(oneCoin.last_updated).toLocaleString('en-US')}
                    </div>
                </div>

            </div>


                       
            {/* <div>
                date added: {new Date(oneCoin.date_added).toLocaleString('en-US')}
                <br />
                num market pairs {oneCoin.num_market_pairs}
                <br />
                tags {oneCoin.tags}
                <br />
                token address {oneCoin.token_address}
                <br />
                self reported circulating supply {addCommas(oneCoin.self_reported_circulating_supply)}
                <br />
                self reported market cap {addCommas(oneCoin.self_reported_market_cap)}
                <br />
                tvl ratio {addCommas(oneCoin.tvl_ratio)}
                <br />
                <br />
                market cap dominance {addCommas(oneCoin.market_cap_dominance)}
                <br />
                tvl {addCommas(oneCoin.tvl)}
            </div> */}
            
            

        </div>
    </div>
  )
}

export default CoinDetails;