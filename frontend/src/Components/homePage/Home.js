import React from "react";
import "./Home.scss";

import CoinList from "../allCoins/CoinList";
import { Link } from "react-router-dom";


// import SymbolOverview from "./Widgets/SymbolOverview";

// to do: Add loading state for photos

function Home({ loggedIn }) {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__leftSide">
          <Link to="/learn">
            <div className="home__container__leftSide__largeImage">
              <img
                src="https://cloudfront-us-east-2.images.arcpublishing.com/reuters/TK5SKXCQMNPBFOQOZZTJB55GHQ.jpg"
                alt="get started with crypto"
              />
            </div>
            <div className="home__container__leftSide__headerText">
              Get Started with Crypto
            </div>
            <div className="home__container__leftSide__subHeaderText">
              Start Learning About Bitcoin, Ethereum, Litecoin and more. NOW!
            </div>
          </Link>
        </div>

        <div className="home__container__rightSide">
          <Link to="/news">
            <div className="home__container__rightSide__boxes">
              <div className="home__container__rightSide__boxes__sideImage">
                <img
                  src="https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main_1.jpg"
                  alt="crypto news"
                />
              </div>
              <div className="home__container__rightSide__boxes__title">
                News: The Return of CRYPTO
              </div>
            </div>
          </Link>

          <Link to="/games">
            <div className="home__container__rightSide__boxes">
              <div className="home__container__rightSide__boxes__sideImage">
                <img
                  src="https://images.mktw.net/im-429485?width=700&height=487"
                  alt="crypto games"
                />
              </div>
              <div className="home__container__rightSide__boxes__title">
                Crypto Games - Coloring and Matching
              </div>
            </div>
          </Link>
        </div>
      </div>

      <CoinList loggedIn={loggedIn} />
    </div>
  );
}

export default Home;