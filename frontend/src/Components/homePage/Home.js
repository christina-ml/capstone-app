import React from "react";
import "./Home.scss";

import CoinList from "../allCoins/CoinList";
import { Link } from "react-router-dom";

// import SymbolOverview from "./Widgets/SymbolOverview";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__leftSideOfPage">
          <Link to="/about">
            <div className="home__container__leftSideOfPage__largeSneaker">
              <img
                src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TK5SKXCQMNPBFOQOZZTJB55GHQ.jpg"
                alt="get started with crypto"
              />
            </div>
            <div className="home__container__leftSideOfPage__headerText">
              Get Started with Crypto
            </div>
            <div className="home__container__leftSideOfPage__subHeaderText">
              Start Learning About Bitcoin, Ethereum, Litecoin and more. NOW!
            </div>
          </Link>
        </div>

        <div className="home__container__rightSideOfPage">
          <Link to="/news">
            <div className="home__container__rightSideOfPage__sneakerContainer">
              <div className="home__container__rightSideOfPage__sneakerContainer__sneaker">
                <img
                  src="https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main_1.jpg"
                  alt="crypto news"
                />
              </div>
              <div className="home__container__rightSideOfPage__sneakerContainer__title">
                News: The Return of CRYPTO
              </div>
            </div>
          </Link>

          <Link to="/games">
            <div className="home__container__rightSideOfPage__sneakerContainer">
              <div className="home__container__rightSideOfPage__sneakerContainer__sneaker">
                <img
                  src="https://images.mktw.net/im-429485?width=700&height=487"
                  alt="crypto games"
                />
              </div>
              <div className="home__container__rightSideOfPage__sneakerContainer__title">
                Crypto Games - Coloring and Matching
              </div>
            </div>
          </Link>
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
