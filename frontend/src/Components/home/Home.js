// import SymbolOverview from "./Widgets/SymbolOverview";

import SearchBar from "../searchBar/SearchBar";


function Home() {
  return (
    <div className="home">
      <header>
        <h1 className="home__logo">CryptoTalk</h1>
        <h4 className="home__tag">Talk Crypto To Me</h4>
      </header>
      <SearchBar />
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
