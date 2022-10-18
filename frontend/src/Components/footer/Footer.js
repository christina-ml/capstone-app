import React from "react";

import "./Footer.scss";

import Newsletter from "../newsletter/Newsletter.js";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__categories">
        <ul>
          About Us
          <li>About</li>
          <li>Careers</li>
          <li>Terms</li>
          <li>Privacy</li>
        </ul>

        <ul>
          Products
          <li>Exchange</li>
          <li>Charity</li>
          <li>Research</li>
          <li>NFT</li>
        </ul>

        <ul>
          Service
          <li>Downloads</li>
          <li>Buy Crypto</li>
          <li>Referral</li>
        </ul>

        <ul>
          Support
          <li>Give Us Feedback</li>
          <li>Support Center</li>
          <li>Submit a Request</li>
          <li>APIs</li>
        </ul>

        <ul>
          Learn
          <li>Learn</li>
          <li>Browse Crypto Prices</li>
          <li>Buy Bitcoin</li>
        </ul>

        <ul>
          Community
          <li>Twitter</li>
          <li>TikTok</li>
          <li>Reddit</li>
          <li>YouTube</li>
        </ul>
      
        <Newsletter />
        <div className="footer__categories__copyright">Copyright 2022 CryptoTalk</div>
      </div>


      {/* <div className="footer footer__mascot">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Robot-clip-art-book-covers-feJCV3-clipart.png/504px-Robot-clip-art-book-covers-feJCV3-clipart.png?20161009050803" 
        />
      </div> */}
    </div>
  );
}
export default Footer;
