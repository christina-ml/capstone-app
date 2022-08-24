import React from 'react';
import { Link } from 'react-router-dom';

import "./About.scss";

const About = () => {
  return (
    <div className="About">
        <header>
            <h1 className="About__header">About CryptoTalk</h1>
        </header>
        <div>
          <Link to="/games">
            <hr />
            Crypto-Inspired Games
          </Link>
        </div>
    </div>
  )
}

export default About;