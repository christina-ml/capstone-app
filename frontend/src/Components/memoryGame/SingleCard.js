import React from 'react';
// import './MemoryApp.scss';

export const SingleCard = ({ card, cover }) => {
  return (
    <div className="MemoryApp__singleCard">
        <div>
            <img className="cardFront" src={card.src} alt="card front" />
            <img className="cardBack" src={cover} alt="card back" />
        </div>
    </div>
  )
}

export default SingleCard;