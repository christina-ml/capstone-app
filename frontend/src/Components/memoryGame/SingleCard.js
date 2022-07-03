import React from 'react';
// import './MemoryApp.scss';

export const SingleCard = ({ card, cover, handleChoice }) => {

    // want to update state of choiceOne/choiceTwo - `handleChoice` func is passed down as prop
    const handleClick = () => {
        handleChoice(card)
    }


  return (
    <div className="MemoryApp__singleCard">
        <div>
            <img className="cardFront" src={card.src} alt="card front" />
            <img className="cardBack" 
                 src={cover}
                 alt="card back"
                 onClick={handleClick}
            />
        </div>
    </div>
  )
}

export default SingleCard;