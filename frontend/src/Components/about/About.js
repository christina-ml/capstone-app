import React from 'react';

import ColoringBook from '../coloringBook/ColoringBook';
import MemoryApp from '../memoryGame/MemoryApp';

import "./About.scss";

const About = () => {
  return (
    <div className="About">
        <header>
            <h1 className="About__header">About CryptoTalk</h1>
        </header>
        <div>
            Talk Crypto To Me.
        </div>
        <div>
            <h4 className="About__header">Crypto Coloring, Crypto Match</h4>
            <hr />
            <ColoringBook />
            <MemoryApp />
        </div>
    </div>
  )
}

export default About;