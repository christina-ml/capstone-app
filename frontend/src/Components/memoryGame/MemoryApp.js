import { useState } from 'react';
import './MemoryApp.css';

// import helmet from '../../assetsMemoryGame/helmet-1';

const cardImages = [
  {"src": "../../assetsMemoryGame/helmet-1"},
  {"src": "../../assetsMemoryGame/potion-1"},
  {"src": "../../assetsMemoryGame/ring-1"},
  {"src": "../../assetsMemoryGame/scroll-1"},
  {"src": "../../assetsMemoryGame/shield-1"},
  {"src": "../../assetsMemoryGame/sword-1"},
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

  return (
    <div className="MemoryApp">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} >New Game</button>
    </div>
  );
}

export default MemoryApp;