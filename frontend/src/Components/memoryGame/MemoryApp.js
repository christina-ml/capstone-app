import { useState } from 'react';
import './MemoryApp.css';

import cover from '../../assetsMemoryGame/cover.png';
import helmet from '../../assetsMemoryGame/helmet-1.png';
import potion from '../../assetsMemoryGame/potion-1.png';
import ring from '../../assetsMemoryGame/ring-1.png';
import scroll from '../../assetsMemoryGame/scroll-1.png';
import shield from '../../assetsMemoryGame/shield-1.png';
import sword from '../../assetsMemoryGame/sword-1.png';

const cardImages = [
  {"src": helmet},
  {"src": potion},
  {"src": ring},
  {"src": scroll},
  {"src": shield},
  {"src": sword},
]

function MemoryApp() {

  // store the cards in state for a game
  // turns will increase by 1 every turn
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // new game - will always shuffle cards, and set turns to 0.
  const shuffleCards = () => {
    // shuffle cards - duplicate them twice, 2 of each image, and add to new array
    const doubledCards = [...cardImages, ...cardImages];

    // sort the order of each card randomly to mix the pairs
    let sortedCardPairs = doubledCards.sort(() => Math.random() - 0.5);

    // for each card object, give it a random ID.
    let randomlyShuffledCards = sortedCardPairs.map((card) => ({ ...card, id: Math.random() }))

    setCards(randomlyShuffledCards);
    setTurns(0);
  }

  console.log(cards, turns);
// {/* Making a grid for the cards */}
// {/* map through the cards in state */}
// {/* front image of card, & back image of card*/}

  return (
    <div className="MemoryApp">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} >New Game</button>
      <div className="cardGrid">
        {cards.map((card)=> {
          return (
          <div className="card" key={card.id}>
            <div>
              <img className="cardFront" src={card.src} alt="card front" />
              <img className="cardBack" src={cover} alt="card back" />
            </div>
          </div>
          )
        })}
      </div>
    </div>
  );
}

export default MemoryApp;