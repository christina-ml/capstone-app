import React from "react";

import './Newsletter.scss';

import logo from '../../assets/cryptotalk-logo.png';

import NewSubscriberForm from "./NewSubscriberForm";

const Newsletter = () => {
  return (
    <div className="newsletterContainer">
      <div className="newsletterContainer__image">
        <img
          src={logo}
          alt="cryptotalk logo"
        />
      </div>
      <div className="newsletterContainer__newsletter">
        <div className="newsletterContainer__newsletter__image">
          <img
            src={logo}
            alt="cryptotalk logo"
          />
        </div>
        <div className="newsletterContainer__newsletter__text">
          <h3 className="newsletterContainer__newsletter__text__infoTitle">CryptoTalk Newsletter</h3>
          <div className="newsletterContainer__newsletter__text__info1">Don't miss the next ones.</div>
          <div className="newsletterContainer__newsletter__text__info2">Get notified about our next workshops & conferences!</div>
          <div className="newsletterContainer__newsletter__text__emailSubscribe">
            <NewSubscriberForm />
            {/* <input placeholder="Your email" />
            <button>Subscribe</button> */}
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Newsletter;
