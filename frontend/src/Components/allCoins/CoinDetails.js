import React from 'react';
import { useEffect, useState } from 'react';
import axios from "axios";
import { useParams } from 'react-router-dom';
import './CoinDetails.scss';

// helpers - displaying price with commas
import addCommas from '../../helpers/AddCommas';
import ChartJsCoin from './chartjs/ChartJsCoin.js';

// react icons
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

const API = process.env.REACT_APP_API_URL;

const CoinDetails = () => {
    const [oneCoin, setOneCoin] = useState([]);
    const [allTags, setAllTags] = useState([])
    let { cid } = useParams();

    useEffect(() => {
        axios.get(`${API}/coins/${cid}`)
            .then((res) => {
                setAllTags(res.data.tags)
                setOneCoin(res.data);
            }).catch((err) => {
                console.log(err);
            })
    }, [API, cid])

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
                           
                            {(Number(oneCoin.percent_change_1h).toFixed(2) > 0) ?
                            <span className="coinDetails__coinCard__details__oneAndTwo__price__goGreen"><GoTriangleUp />{addCommas(oneCoin.percent_change_1h)}%</span> :
                            <span className="coinDetails__coinCard__details__oneAndTwo__price__goRed"><GoTriangleDown />{addCommas(oneCoin.percent_change_1h)}%</span>
                        }
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

                        <div className="coinDetails__coinCard__details__sectionThree__volChange24h">
                            {(oneCoin.volume_change_24h > 0) ?
                            <span className="coinDetails__coinCard__details__sectionThree__volChange24h__goGreen"><GoTriangleUp />{addCommas(oneCoin.volume_change_24h)}%</span> :
                            <span className="coinDetails__coinCard__details__sectionThree__volChange24h__goRed"><GoTriangleDown />{addCommas(oneCoin.volume_change_24h)}%</span>
                        }
                        </div>                        
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

                {/* Section #4 */}
                <div className="coinDetails__coinCard__details__sectionFour">
                    <div>
                        Tags:
                    </div>
                    <div className="coinDetails__coinCard__details__sectionFour__tags">
                        {allTags.map((tag, index) => {
                            return (
                                <span className="oneTag" key={"tagkey" + index} title={tag}>
                                    {tag}
                                </span>
                            )
                        })}
                    </div>
                </div>

                {/* Section 5 */}
                <div className="coinDetails__coinCard__details__sectionFive">
                    <div>
                        Percent Change (%):
                    </div>
                    <ChartJsCoin coin={oneCoin} />
                    <div>
                        Last updated: {new Date(oneCoin.last_updated).toLocaleString('en-US')}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CoinDetails;