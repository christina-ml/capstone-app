import React from "react";
import "./Newspaper.scss";

// from my codepen (https://codepen.io/christinaml/pen/OJWrYNw)

const Newspaper = () => {
  return (
    <div className="newspaper">
      {/* <!-- header --> */}
      <div className="newspaper__header">
        <h1>CryptoTalk Newsletter</h1>
      </div>

      {/* <!-- main body of web page --> */}
      <body>
        <div className="newspaper__main">
          <div className="newspaper__main__article">
            <h2>The Return of Crypto</h2>
            <section className="newspaper__main__article__photo">
              <img
                src="https://penntoday.upenn.edu/sites/default/files/2022-01/cryptocurrency-main_1.jpg"
                alt="crypto news"
                align="left"
              />
            </section>
            <section className="newspaper__main__article__content">
              <p>
                Asperiores ullam qui alias id ea voluptatem. Laudantium
                voluptatem odit ducimus alias maiores id. Soluta repellendus non
                repellendus autem cupiditate esse aut. Error similique officia
                assumenda consequuntur blanditiis. Cupiditate fugit aut sit.
              </p>
              <p>
                Ut consequatur expedita quae minima iste fugit nam. Libero
                magnam nemo dolorem. Libero molestias tenetur ipsa mollitia in.
                Nostrum ullam aut in rerum sapiente est. Quas officia et aut
                repudiandae eveniet illum assumenda. Ex minima nihil eveniet
                deleniti ipsum repellendus exercitationem dolores.
              </p>
              <p>
                Omnis fugit harum quis provident autem qui. Magnam et quia
                quibusdam quibusdam ullam doloremque. Consequatur asperiores
                aperiam rerum iste. Dolor necessitatibus tempore rerum iure
                autem sint. Ipsam placeat esse provident sed quo soluta.
              </p>
              <p>
                Aut fugit perferendis consequatur. Ut odio perspiciatis quaerat
                aut. Optio praesentium est consequatur earum in exercitationem.
                Et qui sit minus quo dicta ipsam consectetur dolorum.
              </p>
              <p>
                Est qui ut optio cum deleniti. Ut debitis voluptatem ut
                voluptatem et et error. Voluptatem explicabo vero non
                exercitationem fuga vel et. Adipisci atque est incidunt sit. Sit
                dolorem occaecati quo delectus voluptates repellendus veniam.
                Vel magni nisi nisi quis.
              </p>
            </section>
            <h2>US Seizes 50K Bitcoins Related to Silk Road Marketplace</h2>
            <section className="newspaper__main__article__contentBelow">
              <p>
                The bitcoin, which was obtained in 2012 and which was valued at $3.36 billion when it was discovered in November, is now worth $1.04 billion.
              </p>
              <p>
                Ut consequatur expedita quae minima iste fugit nam. Libero
                magnam nemo dolorem. Libero molestias tenetur ipsa mollitia in.
                Nostrum ullam aut in rerum sapiente est. Quas officia et aut
                repudiandae eveniet illum assumenda. Ex minima nihil eveniet
                deleniti ipsum repellendus exercitationem dolores.
              </p>
              <p>
                Omnis fugit harum quis provident autem qui. Magnam et quia
                quibusdam quibusdam ullam doloremque. Consequatur asperiores
                aperiam rerum iste. Dolor necessitatibus tempore rerum iure
                autem sint. Ipsam placeat esse provident sed quo soluta.
              </p>
              <p>
                Aut fugit perferendis consequatur. Ut odio perspiciatis quaerat
                aut. Optio praesentium est consequatur earum in exercitationem.
                Et qui sit minus quo dicta ipsam consectetur dolorum.
              </p>
              <p>
                Est qui ut optio cum deleniti. Ut debitis voluptatem ut
                voluptatem et et error. Voluptatem explicabo vero non
                exercitationem fuga vel et. Adipisci atque est incidunt sit. Sit
                dolorem occaecati quo delectus voluptates repellendus veniam.
                Vel magni nisi nisi quis.
              </p>
            </section>
          </div>

          {/* sidebar */}
          <div className="newspaper__main__sidebar">
            <div className="newspaper__main__sidebar__title">
              <span className="red-circle"></span>Most Read
            </div>
            <div className="newspaper__main__sidebar__list">
              {/* <img src="https://www.coindesk.com/resizer/7FtiguOfIIIrL9-dY5wbj01jgzs=/975x731/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/coindesk/YQ5ZL6KEPFEEXP2CDFNUQDXAXE.jpg" alt="bitcoin mining"/> */}
              
              <div className="articles">
                <div className="article">
                  <div className="article__number">1</div>
                  <div className="article__title">
                    Bitcoin Mining Major Riot Blockchain Misses Analyst Estimates for Q3 Earnings
                  </div>
                </div>
                
                <div className="article">
                  <div className="article__number">2</div>
                  <div className="article__title">
                    First Mover Asia: A Good Week for Exchange Tokens, Except FTT; Solana Continues Falling
                  </div>
                </div>
                
                <div className="article">
                  <div className="article__number">3</div>
                  <div className="article__title">
                    Litecoin Mining Difficulty Is Hitting New Highs, Foundation Says
                  </div>
                </div>
                
                <div className="article">
                  <div className="article__number">4</div>
                  <div className="article__title">
                  Ethereum Co-Founder Di Iorio Unveils New Project to Bring Blockchain Computers to a Wider Audience
                  </div>
                </div>
                
                <div className="article">
                  <div className="article__number">5</div>
                  <div className="article__title">
                    Bernstein Says Polygon Blockchain Is the Web3 King
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </body>
    </div>
  );
};

export default Newspaper;
