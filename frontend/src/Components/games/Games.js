import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './Games.scss';
import HappyTiger from './HappyTiger/HappyTiger';


// screenshot images of games
import colorPreview from './imagePreviews/colorPreview.png';
import matchPreview from './imagePreviews/matchPreview.png';

const Games = () => {
    const [randomGameNum, setRandomGameNum] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // set a random game number when the page loads
        setRandomGameNum(Math.ceil(Math.random() * 2))
    }, []);

    const handleRandomGameClick = (e) => {
        e.preventDefault();
        if (randomGameNum === 1){
            navigate('/games/coloring');
        }
        if (randomGameNum === 2){
            navigate('/games/match');
        }
    }

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
        <div className="games__cryptoCat">
            <div 
                className="games__cryptoCat__happyTigerButton"
                onClick={handleRandomGameClick}
            >
                <HappyTiger />
            </div>
            <div className="games__cryptoCat__greet">Meet CryptoCat</div>
            <div className="games__cryptoCat__info">Click on CryptoCat to choose a game for you!</div>
        </div>
    </div>
  )
}

export default Games;