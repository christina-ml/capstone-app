import React from 'react';

import './Games.scss';

import colorPreview from './imagePreviews/colorPreview.png';
import matchPreview from './imagePreviews/matchPreview.png';


// import { FaArrowAltCircleUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Games = () => {

    // const scrollToColoring = () => {
    //     const section = document.querySelector( '.ColoringBook' );
    //     section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    // };
    
    // const scrollToMemory = () => {
    //     const section = document.querySelector( '.MemoryApp' );
    //     section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    // };

    // const backToTop = () => {
    //     window.scroll({
    //         top: 0, 
    //         left: 0, 
    //         behavior: 'smooth' 
    //     });
    // };

  return (
    <div className="games">
        <h4 className="games__header">Crypto-Inspired Games</h4>
        <ul>
            <Link to="/games/coloring">
                <div className="games__header__previewColor">
                    <img src={colorPreview} alt="color preview" />
                </div>
                <li>
                    {/* <div onClick={scrollToColoring} >Crypto Coloring</div> */}
                    Crypto Coloring
                </li>
            </Link>
            <Link to="/games/match">
                <div className="games__header__previewMatch">
                    <img src={matchPreview} alt="match preview" />
                </div>
                <li>
                    {/* <div onClick={scrollToMemory} >Crypto Match</div> */}
                    Crypto Match
                </li>
            </Link>
        </ul>
        {/* <hr /> */}

        {/* <div className="games__backToTop" onClick={backToTop}>
            <div className="games__backToTop__text">
                Back to Top
            </div>
            <div className="games__backToTop__arrow">
                <FaArrowAltCircleUp />
            </div>
        </div> */}
    </div>
  )
}

export default Games;