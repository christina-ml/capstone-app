import React from "react";
import "./Newspaper.scss";

// from my codepen (https://codepen.io/christinaml/pen/OJWrYNw)

const Newspaper = () => {
  return (
    <div className="newspaper">
      {/* <!-- begin navbar here --> */}
      {/* <div className="newspaper__nav">
        <div className="newspaper__nav__text">
          Home Local national Stats Weather sports arts
        </div>
      </div> */}

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
            <h2>something else happened</h2>
            <section className="newspaper__main__article__contentBelow">
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
          </div>

          {/* <!--  sidebar  --> */}
          <div className="newspaper__main__sidebar">
            <div className="newspaper__main__sidebar__sections">
              <section className="newspaper__main__sidebar__sections__news1">
                <h3>More news here 1</h3>
                <p>
                  Asperiores ullam qui alias id ea voluptatem. Laudantium
                  voluptatem odit ducimus alias maiores id.
                </p>
              </section>
              <section className="news1">
                <h3>More news here 2</h3>
                <p>
                  Asperiores ullam qui alias id ea voluptatem. Laudantium
                  voluptatem odit ducimus alias maiores id.
                </p>
              </section>
              <section className="news1">
                <h3>More news here 3</h3>
                <p>
                  Asperiores ullam qui alias id ea voluptatem. Laudantium
                  voluptatem odit ducimus alias maiores id.
                </p>
              </section>
              <section className="news1">
                <h3>More news here 4</h3>
                <p>
                  Asperiores ullam qui alias id ea voluptatem. Laudantium
                  voluptatem odit ducimus alias maiores id.
                </p>
              </section>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Newspaper;
