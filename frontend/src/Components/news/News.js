import React from "react";
import "./News.scss";

// react icons
import { RxOpenInNewWindow } from "react-icons/rx";

// News Components
import NewsSidebar from "./NewsSidebar";
import ThematicCard from "./ThematicCard";
import SidebarViewCybersecurity from "./SidebarViewCybersecurity";

const News = () => {
  return (
    <div className="news">
      {/* <!-- header --> */}
      <div className="news__header">
        <h1>CryptoTalk News</h1>
      </div>

      {/* <!-- main body of web page --> */}
      <body>
        <div className="news__main">
          <div className="news__main__article">
            <h2>UK confirms plans to regulate crypto industry with formal legislation</h2>
            <section className="news__main__article__photo">
              <img
                src="https://image.cnbcfm.com/api/v1/image/107213605-1679518297059-gettyimages-630953736-UK_BITCOIN.jpeg?v=1698667092&w=630&h=354&ffmt=webp&vtcrop=y"
                alt="UK confirms plans to regulate crypto industry"
                align="left"
              />
            </section>
            <section className="news__main__article__content">
              <p>
              The U.K. government on Monday confirmed plans to regulate the cryptocurrency industry, announcing 
              in a consultation paper that it will look to bring in formal legislation for crypto activities by 2024.
              </p>
              <p>
              The government published its response to a consultation paper issued earlier this year, which outlined 
              recommendations on regulating the crypto industry.
              </p>
              <p>
              In the Monday paper, the government said it intends to bring a number of cryptoasset activities under 
              the same regulations that govern banks and other financial services firms.
              </p>
              <p>
              “I am very pleased to present these final proposals for cryptoasset regulation in the UK on behalf 
              of the Government,” Andrew Griffith, the U.K. financial services minister, said in a statement. “I look 
              forward to our continued work with the sector in making our vision a reality for the UK as a global 
              hub for cryptoasset technology.”
              </p>
              <p>
              The government’s proposals include stricter rules for exchanges, custodians that store crypto on 
              behalf of clients, and crypto lending companies. The U.K. also proposes stricter regimes for market 
              abuse and cryptoasset issuance and disclosures. The government aims to introduce laws for the 
              crypto industry before Parliament by 2024, according to the paper.
              </p>
              <div className="news__main__article__source">
								<a
									href="https://www.cnbc.com/2023/10/30/uk-confirms-plans-to-regulate-crypto-industry-with-formal-legislation.html"
									target="_blank"
									rel="noreferrer"
								>
									Read Full Article <RxOpenInNewWindow />
								</a>
							</div>
            </section>
            <h2>TradFi goes crypto: Finance giant brings decades of experience to new crypto exchange</h2>
            <section className="news__main__article__photo">
              <img
                src="https://s3.cointelegraph.com/storage/uploads/view/aa5b4d4208b58b65a568a14ad03dfef8.png"
                alt="Source: MultiBank.io"
                align="left"
              />
            </section>
            <section className="news__main__article__contentBelow">
              <p>
                MultiBank Group's regulated crypto exchange, MultiBank.io, offers top-tier security and swift trade 
                execution for major cryptocurrencies with free fiat deposits.
              </p>
              <p>
                The crypto world is volatile, with users steadily seeking a sense of trust and security. Now, a traditional 
                finance giant, MultiBank Group, wants to change the global perception of crypto for the better with its 
                know-how and expertise spanning over two decades.
              </p>
              <p>
                It's hard to claim that the crypto world is known for its stability or reliability. However, trust in the market 
                experienced a new low when FTX, a top United States-based exchange, went down in flames with smoke 
                surrounding the remaining centralized exchanges. Trust and security have become the most sought-after
                 commodities in the space.
              </p>
              <p>
                A whole year has passed since what’s called the “crypto’s Lehman Brothers moment.” This period of 
                increased concern about the state of the cryptocurrency market has coincided with heightened regulatory 
                scrutiny. Consequently, many regions have suspended multiple fiat withdrawal options, causing deposit, 
                withdrawal and trading fees to skyrocket.
              </p>
              <p>
                Users want to see a robust and trusted market with better fees and fiat on-ramp options, and the crypto space 
                needs a change to achieve that. MultiBank.io, a crypto exchange regulated by the Australian Securities and 
                Investment Commission (ASIC) and audited by Australian Transaction Reports and Analysis Centre (AUSTRAC), 
                aims to reintroduce trust and reliability to the crypto market. It does so by implementing the same best practices 
                that have maintained its parent company, The MultiBank Group, with an untarnished record in the traditional 
                finance sector since 2005.
              </p>
              <div className="news__main__article__source">
								<a
									href="https://cointelegraph.com/news/tradfi-goes-crypto-finance-giant-brings-decades-of-experience-to-new-crypto-exchange"
									target="_blank"
									rel="noreferrer"
								>
									Read Full Article <RxOpenInNewWindow />
								</a>
							</div>
            </section>
          </div>
          <div className="sidebarSections">
            <SidebarViewCybersecurity />
            <NewsSidebar />
            <ThematicCard />
          </div>
        </div>
      </body>
    </div>
  );
};

export default News;
