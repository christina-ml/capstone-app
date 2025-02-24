import React from "react";
import { Link } from 'react-router-dom';

import "./Footer.scss";

import Newsletter from "../newsletter/Newsletter.js";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <Newsletter />
        <div className="footer__content__categories">
          <ul>
            About Us
            <li><Link to="/about">About</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>

          <ul>
            Products
            <li>Exchange</li>
            <li>Charity</li>
            <li>Research</li>
            <li><Link to="/shop">NFT</Link></li>
          </ul>

          {/* <ul>
            Service
            <li>Downloads</li>
            <li>Buy Crypto</li>
            <li>Referral</li>
          </ul> */}

          <ul>
            Support
            <li>Give Us Feedback</li>
            <li>Support Center</li>
            <li>Submit a Request</li>
            <li>APIs</li>
          </ul>

          <ul>
            Learn
            <li><Link to="/learn">Learn</Link></li>
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

          <div className="footer__content__categories__copyright">Copyright 2021-2024 CryptoTalk</div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
