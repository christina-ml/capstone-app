import SearchBar from "../searchBar/SearchBar";
import './Home.scss';

// import SymbolOverview from "./Widgets/SymbolOverview";

function Home() {
  return (
    <div className="home">
      <header>
        <h1 className="home__logo">Welcome</h1>
        <h4 className="home__tag">Talk Crypto To Me</h4>
      </header>

      {/* SneakerNews */}
      <div className="sneakerNewsContainer">
      <div class="container">
        <div class="leftSideOfPage">
          <div class="largeSneaker">
            <img
              src="https://sneakernews.com/wp-content/uploads/2022/08/vantas.jpg"
              alt="yeezy sneaker"
            />
          </div>
          <div class="headerText">Return Of VANTA</div>
          <div class="subHeaderText">Where To Buy The Yeezy Boost 700 v2</div>
        </div>

        <div class="rightSideOfPage">
          <div class="sneakerContainer">
            <div class="sneaker">
              <img
                src="https://sneakernews.com/wp-content/uploads/2022/08/jjjjound-kayano-store-llist.jpg"
                alt="asics sneaker"
              />
            </div>
            <div class="title">Store List: JJJJound ASICS GEL-Kayano 14</div>
          </div>

          <div class="sneakerContainer">
            <div class="sneaker">
              <img
                src="https://sneakernews.com/wp-content/uploads/2022/08/badvunnhyblue.jpg"
                alt="adidas sneaker"
              />
            </div>

            <div class="title">Bad Bunny adidas Forums</div>
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
