import React from 'react';

import ColoringBook from '../coloringBook/ColoringBook';
import MemoryApp from '../memoryGame/MemoryApp';
import './Games.scss';

import { FaArrowAltCircleUp } from 'react-icons/fa';


const Games = () => {

    const scrollToColoring = () => {
        const section = document.querySelector( '.ColoringBook' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };
    
    const scrollToMemory = () => {
        const section = document.querySelector( '.MemoryApp' );
        section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
    };

    const backToTop = () => {
        window.scroll({
            top: 0, 
            left: 0, 
            behavior: 'smooth' 
        });
    };

  return (
    <div className="games">
        <h4 className="games__header">Crypto-Inspired Games</h4>
        <ul>
            <li>
                <div onClick={scrollToColoring} >Crypto Coloring</div>
            </li>
            <li>
                <div onClick={scrollToMemory} >Crypto Match</div>
            </li>
        </ul>
        <hr />
        <ColoringBook />
        <MemoryApp />
        <div className="games__backToTop" onClick={backToTop}>
            <div className="games__backToTop__text">
                Back to Top
            </div>
            <div className="games__backToTop__arrow">
                <FaArrowAltCircleUp />
            </div>
            
        </div>
    </div>
  )
}

export default Games;