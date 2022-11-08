import React from 'react';
import './Currencies.scss';

// helpers - displaying price with commas
import addCommas from '../../helpers/AddCommas';
import ChartJsCoin from '../allCoins/chartjs/ChartJsCoin';

// react icons
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go';

const Currency = ({ currency }) => {
  return (
    <div className="currencyDetails">
        <div className="currencyDetails__coinCard">
            <div className="currencyDetails__coinCard__logo">
                <img src={currency.logo} alt="coin logo" />
                <div className="currencyDetails__coinCard__logo__coinName">
                {currency.name} <span>{currency.symbol}</span>
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
                        {currency.tags}
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