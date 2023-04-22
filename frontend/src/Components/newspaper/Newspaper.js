import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

import "./Newspaper.scss";
  
// from my codepen (https://codepen.io/christinaml/pen/OJWrYNw)

// Newspaper Components
import NewsSidebar from "./NewsSidebar";
import ThematicCard from "./ThematicCard";

const API = process.env.REACT_APP_API_URL;

const Newspaper = () => {

  // how we can change our routes
  // TODO: build our route on the backend
  let navigate = useNavigate();

  // call to our backend
  const requestOptions = {
    // grab our jwt token from localStorage
    headers: {'Authorization': `Bearer ${localStorage.getItem('accessToken')}`}
  }

  // for login-protected route
  useEffect(() => {
    // console.log("fetch in newspaper.js:",  `${API}/users/authenticate`)
    fetch(`${API}/users/authenticate`, requestOptions)
      .then(response => response.json())
      .then(data => {
        // check if accessToken exists in cookies
        if (Cookies.get('accessToken')){
          alert(`youre logged in`);
        }
         else {
          alert(`You must be logged in to view this page.`);
          // back to the homepage
          navigate('/');
        }
      }).catch(error => {
        console.log(error);
        navigate('/');
      })
      
  }, []);


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
          <div className="sidebarSections">
            <NewsSidebar />
            <ThematicCard />
          </div>
          

        </div>
      </body>
    </div>
  );
};

export default Newspaper;
