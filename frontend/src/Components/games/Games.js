import React from 'react';
import { Link } from 'react-router-dom';

import './Games.scss';
import HappyTiger from './HappyTiger/HappyTiger';


// screenshot images of games
import colorPreview from './imagePreviews/colorPreview.png';
import matchPreview from './imagePreviews/matchPreview.png';

const Games = () => {

  return (
    <div className="games">
        <h4 className="games__header">Crypto-Inspired Games</h4>
        <ul>
            <Link to="/games/coloring">
                <div className="games__header__previewColor">
                    <img src={colorPreview} alt="color preview" />
                </div>
                <li>
                    Crypto Coloring
                </li>
            </Link>
            <Link to="/games/match">
                <div className="games__header__previewMatch">
                    <img src={matchPreview} alt="match preview" />
                </div>
                <li>
                    Crypto Match
                </li>
            </Link>
        </ul>
        <div className="games__happyTigerContainer">
            <HappyTiger />
        </div>
    </div>
  )
}

export default Games;