import axios from "axios";
import { useEffect, useState } from "react";
import './Home.scss';

import Coin from "./Coin";

// import SymbolOverview from "./Widgets/SymbolOverview";

const API = process.env.REACT_APP_API_URL;

function Home() {

  const [allCoins, setAllCoins] = useState([]);

  useEffect(() => {
    axios.get(API + "/coins")
        .then((res) => {
            console.log("res.data:", res.data)
            setAllCoins(res.data);
        }).catch((err) => {
            console.log(err);
        })
  }, []);

  return (
    <div className="home">
      <header>
        <h1 className="home__logo">Welcome</h1>
        <h4 className="home__tag">Talk Crypto To Me</h4>
      </header>

      <h2>List of All Coins</h2>
      {allCoins.map(coin => {
        return (
          <div>
            <Coin coin={coin} />
          </div>
        )
      })}


      {/* SneakerNews */}
      <div className="sneakerNewsContainer">
      <div class="container">
        <div class="leftSideOfPage">
          <div class="largeSneaker">
            <img
              src="https://media.istockphoto.com/photos/coins-of-various-cryptocurrencies-picture-id1034363382?k=20&m=1034363382&s=612x612&w=0&h=sCpRmOSicsJJS73_iNQh16nqeBgFKqU3jjfC4u42D_k="
              alt="yeezy sneaker"
            />
          </div>
          <div class="headerText">Return Of CRYPTO</div>
          <div class="subHeaderText">Where To Buy Bitcoin, Ethereum, Litecoin</div>
        </div>

        <div class="rightSideOfPage">
          <div class="sneakerContainer">
            <div class="sneaker">
              <img
                src="https://www.investopedia.com/thmb/O2nnC_xWk9hEWk4e6ptCfpe0EGA=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cryptocurrency-f6026a2012a14aaa9ef8a1c277fde0f7.jpg"
                alt="asics sneaker"
              />
            </div>
            <div class="title">Store List: Bitcoin, Litecoin, Ethereum and More</div>
          </div>

          <div class="sneakerContainer">
            <div class="sneaker">
              <img
                src="https://www.investopedia.com/thmb/DLjhA5UlNJQA-iGoIVaxOkrC-to=/302x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/cryptocurrency.asp_recirc_V2-ee164707c0174d85b1e4e38b564aff73.png"
                alt="adidas sneaker"
              />
            </div>

            <div class="title">Intro to Crypto Forums</div>
          </div>
        </div>
      </div>
      </div>


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
