import React from "react";

import './Newsletter.scss';

import logo from '../../assets/cryptotalk-logo.png';

const Newsletter = () => {
  return (
    <div className="newsletterContainer">
      <div className="newsletter">
        <div className="newsletter__image">
          <img
            src={logo}
            alt="cryptotalk logo"
          />
        </div>
        <div className="newsletter__text">
          <h3>CryptoTalk Newsletter</h3>
          <div>Don't miss the next ones.</div>
          <div>Get notified about our next workshops & conferences!</div>
          <div className="newsletter__text__emailSubscribe">
            <input placeholder="Your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
