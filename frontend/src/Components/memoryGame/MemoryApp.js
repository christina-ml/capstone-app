import { useEffect, useState } from 'react';
import './MemoryApp.scss';

import SingleCard from './SingleCard';

// card images
import cover from '../../assetsMemoryGame/cover.png';
import helmet from '../../assetsMemoryGame/helmet-1.png';
import potion from '../../assetsMemoryGame/potion-1.png';
import ring from '../../assetsMemoryGame/ring-1.png';
import scroll from '../../assetsMemoryGame/scroll-1.png';
import shield from '../../assetsMemoryGame/shield-1.png';
import sword from '../../assetsMemoryGame/sword-1.png';

const cardImages = [
  {"src": helmet, matched: false},
  {"src": potion, matched: false},
  {"src": ring, matched: false},
  {"src": scroll, matched: false},
  {"src": shield, matched: false},
  {"src": sword, matched: false},
]

function MemoryApp() {

  // store the cards in state for a game
  // turns will increase by 1 every turn
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  // keep track of each card choice, so 2 cards can be compared (is/isn't a match)
  // users first click = choiceOne
  // users second click = choiceTwo
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

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
  // console.log(cards, turns);

  // handle a choice
  const handleChoice = (card) => {
    // console.log(card)

    // if choiceOne is null => update choiceOne :
    // if choiceOne has a value => update choiceTwo
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // compare two selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo){
      // if src are the same, then we have a match
      if (choiceOne.src === choiceTwo.src){
        // console.log('those cards match');
        // updating the card's state, using the previous cards state
        // returning a new array of cards using .map - where choiceOne & choiceTwo are matched (and updated) as "true"
        setCards(prevCards => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src){
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        });
        // set choiceOne & choiceTwo back to null
        resetTurn();
      } else {
        // if src of both choices don't match
        // console.log('those cards do not match');
        // set choiceOne & choiceTwo back to null
        // setTimeout - see card for 1 sec before it flips over
           setTimeout(() => {
            resetTurn();
          }, 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

console.log("the cards state:", cards)

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  }

  /* 
    in the return:
    Making a grid for the cards
    map through the cards in state
    front image of card, & back image of card
    Flipped:
    3 scenarios when card is flipped (true/false):
    // when choiceOne is picked
    // when choiceTwo is picked
    // if a card is matched - want the card to stay flipped
  */
  return (
    <div className="MemoryApp">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards} >New Game</button>
      <div className="MemoryApp__cardGrid">
        {cards.map((card)=> {
          return (
            <SingleCard card={card} 
                        key={card.id} 
                        cover={cover} 
                        handleChoice={handleChoice}
                        flipped={ card === choiceOne || 
                                  card === choiceTwo || 
                                  card.matched
                                }
            />
          )
        })}
      </div>
    </div>
  );
}

export default MemoryApp;