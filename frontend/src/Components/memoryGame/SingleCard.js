import React from 'react';

export const SingleCard = ({ card, cover, handleChoice, flipped, disabled }) => {

    // want to update state of choiceOne/choiceTwo - `handleChoice` func is passed down as prop
    const handleClick = () => {
        if (!disabled){
            handleChoice(card);
        }
    }

  // Flipped className ternary: when true - `flipped` class, when false - no class 
  return (
    <div className="MemoryApp__singleCard">
        <div className={flipped ? "MemoryApp__singleCard__flipped" : ""}>
            <img className="MemoryApp__singleCard__cardFront" src={card.src} alt="card front" />
            <img className="MemoryApp__singleCard__cardBack" 
                 src={cover}
                 alt="card back"
                 onClick={handleClick}
            />
        </div>
    </div>
  )
}

export default SingleCard;