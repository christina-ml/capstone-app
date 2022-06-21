import SymbolOverview from "./Widgets/SymbolOverview";
import "./Home.css";

function Home() {
  return (
    <div id="chartContainer">
      <header>
        <h1 className="fade-in-image">Welcome to CryptoTalk</h1>
        <h4 className="">Talk Crypto To Me</h4>
      </header>
      <div id="chart-coins-container">
        <div id="chart-widget">
          <SymbolOverview />
          <div className="tradingview-widget-container">
            <div id="tradingview_0c358"> </div>
          </div>
          <h1 className="say-hi">Say hello to Alan, your guide &#8594;</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
