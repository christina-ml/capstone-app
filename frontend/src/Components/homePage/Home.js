import React from 'react';
import './Home.scss';

import CoinList from "../allCoins/CoinList";
import { Link } from 'react-router-dom';

// import SymbolOverview from "./Widgets/SymbolOverview";


function Home() {

  return (
    <div className="home">
      {/* SneakerNews */}
      <div className="sneakerNewsContainer">
      <div class="container">
        <div class="leftSideOfPage">

          <Link to="/about">
            <div class="largeSneaker">
              <img
                src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k="
                alt="yeezy sneaker"
              />
            </div>
            <div class="headerText">Get Started with Crypto</div>
            <div class="subHeaderText">Start Learning About Bitcoin, Ethereum, Litecoin and more. NOW!</div>
          </Link>

        </div>

        <div class="rightSideOfPage">

          <Link to="/news">
            <div class="sneakerContainer">
              <div class="sneaker">
                <img
                  src="https://www.investopedia.com/thmb/O2nnC_xWk9hEWk4e6ptCfpe0EGA=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cryptocurrency-f6026a2012a14aaa9ef8a1c277fde0f7.jpg"
                  alt="asics sneaker"
                />
              </div>
              <div class="title">News: The Return of CRYPTO</div>
            </div>
          </Link>

          <Link to="/games">
            <div class="sneakerContainer">
              <div class="sneaker">
                <img
                  src="https://www.investopedia.com/thmb/DLjhA5UlNJQA-iGoIVaxOkrC-to=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cryptocurrency.asp_recirc_V2-ee164707c0174d85b1e4e38b564aff73.png"
                  alt="adidas sneaker"
                />
              </div>

              <div class="title">Crypto Games - Coloring and Matching</div>
            </div>
          </Link>

        </div>
      </div>
      </div>

      <CoinList />

      {/* <div id="chart-coins-container"> */}
        {/* <div id="chart-widget"> */}
          {/* <SymbolOverview /> */}
          {/* <div className="tradingview-widget-container">
            <div id="tradingview_0c358"> </div>
          </div> */}
          {/* <h1 className="say-hi">Say hello to Alan, your guide &#8594;</h1> */}
        {/* </div> */}
      {/* </div> */}
    </div>
  );
}

export default Home;
