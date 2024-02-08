import axios from 'axios';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './Currencies.scss';

// react-icons
import { IoTrashOutline } from 'react-icons/io5';
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

// helpers - displaying price with commas
import addCommas from '../../helpers/AddCommas';
import ChartJsCoin from '../allCoins/chartjs/ChartJsCoin';

const API = process.env.REACT_APP_API_URL;

const Currency = ({ currency }) => {
    let navigate = useNavigate();

    // use Params to have access to nested array of objects with `one user by Id`'s tags
    const tagsForCurrencyOfOneUserByUserId = (currencyTags) => {
        return currencyTags.map((oneTag) => {
            return (
                <div>{oneTag.tag}</div>
            )
        })
    } 

    const deleteFavorite = () => {        
        axios.delete(`${API}/favorites/${currency.fid}`)
        .then((res) => {
            navigate(0);
        }).catch((err) => {
            console.log(err);
        })
      }

  return (
    <div className="currencyDetails">
        <div className="currencyDetails__coinCard">
            <div className="currencyDetails__coinCard__logoAndFavoriteButton">
                <div className="currencyDetails__coinCard__logoAndFavoriteButton__logo">
                    <img src={currency.logo} alt="coin logo" />
                    <div className="currencyDetails__coinCard__logoAndFavoriteButton__logo__coinName">
                    {currency.name} <span>{currency.symbol}</span>
                    </div>
                </div>
                <div className="currencyDetails__coinCard__logoAndFavoriteButton__favorite">
                    <button 
                        className="currencyDetails__coinCard__logoAndFavoriteButton__favorite__favoriteButton"
                        onClick={deleteFavorite}
                    >
                        <IoTrashOutline></IoTrashOutline>
                    </button>
                </div>
            </div>

            <div className="currencyDetails__coinCard__details">
                <div className="currencyDetails__coinCard__details__oneAndTwo">
                    {/* Section #1 */}
                    <div>
                        <div>
                            Rank #{currency.cmc_rank}
                        </div>
                    </div>

                    {/* Section #2 */}
                    <div>
                        {currency.slug} price ({currency.symbol})
                        <br />
                        <div className="currencyDetails__coinCard__details__oneAndTwo__price">
                            ${addCommas(currency.price)}
                           
                            {(Number(currency.percent_change_1h).toFixed(2) > 0) ?
                            <span className="currencyDetails__coinCard__details__oneAndTwo__price__goGreen"><GoTriangleUp />{addCommas(currency.percent_change_1h)}%</span> :
                            <span className="currencyDetails__coinCard__details__oneAndTwo__price__goRed"><GoTriangleDown />{addCommas(currency.percent_change_1h)}%</span>
                        }
                        </div>
                    </div>
                </div>

                {/* Section #3 */}
                <div className="currencyDetails__coinCard__details__sectionThree">
                    <div>
                        <div className="currencyDetails__coinCard__details__sectionThree__label">
                            Market Cap:
                        </div>
                        <div>${addCommas(currency.market_cap)}</div>
                        
                    </div>
                    <div>
                        <div className="currencyDetails__coinCard__details__sectionThree__label">
                            Fully Diluted Market Cap:
                        </div>
                        <div>${addCommas(currency.fully_diluted_market_cap)}</div>
                    </div>
                    <div>
                        <div className="currencyDetails__coinCard__details__sectionThree__label">
                            Volume 24h:
                        </div>
                        <div>${addCommas(currency.volume_24h)}</div>

                        <div className="currencyDetails__coinCard__details__sectionThree__volChange24h">
                            {(currency.volume_change_24h > 0) ?
                            <span className="currencyDetails__coinCard__details__sectionThree__volChange24h__goGreen"><GoTriangleUp />{addCommas(currency.volume_change_24h)}%</span> :
                            <span className="currencyDetails__coinCard__details__sectionThree__volChange24h__goRed"><GoTriangleDown />{addCommas(currency.volume_change_24h)}%</span>
                        }
                        </div>                        
                    </div>
                    <div>
                        <div className="currencyDetails__coinCard__details__sectionThree__label">
                            Circulating Supply
                        </div>
                        <div>{addCommas(currency.circulating_supply)} {currency.symbol}</div>
                        <div className="currencyDetails__coinCard__details__sectionThree__label">
                            Max Supply
                        </div>
                        <div>
                            {(currency.max_supply > 0) ? addCommas(currency.max_supply) : <span>--</span>}
                        </div>
                        <div className="currencyDetails__coinCard__details__sectionThree__label">
                            Total Supply
                        </div>
                        <div>
                            {addCommas(currency.total_supply)}
                        </div>
                    </div>
                </div>

                {/* Section #4 */}
                <div className="currencyDetails__coinCard__details__sectionFour">
                    <div>
                        Tags:
                    </div>
                    <div className="currencyDetails__coinCard__details__sectionFour__tags">
                        {tagsForCurrencyOfOneUserByUserId(currency.tags)}
                    </div>
                </div>

                {/* Section 5 */}
                <div className="currencyDetails__coinCard__details__sectionFive">
                    <div>
                        Percent Change (%):
                    </div>
                    <ChartJsCoin coin={currency} />
                    <div>
                        Last updated: {new Date(currency.last_updated).toLocaleString('en-US')}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Currency;