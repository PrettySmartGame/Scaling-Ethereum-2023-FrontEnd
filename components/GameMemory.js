import React, { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
// import styles from '../styles/Home.module.css';

const cardData = [
  { id: 1, value: 'A' },
  { id: 2, value: 'B' },
  { id: 3, value: 'C' },
  { id: 4, value: 'D' },
  { id: 5, value: 'A' },
  { id: 6, value: 'B' },
  { id: 7, value: 'C' },
  { id: 8, value: 'D' },
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const  GameMemory = () => {

  const [cards, setCards] = useState(shuffleArray(cardData));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const handleCardClick = (id, value) => {
    console.log("handleCardClick");
    console.log(flippedCards.length);
    if (flippedCards.length === 2) return;

    setFlippedCards((prevState) => [...prevState, { id, value }]);

    if (flippedCards.length === 1 && flippedCards[0].value === value && flippedCards[0].id !== id) {
      setMatchedCards((prevState) => [...prevState, value]);
    } else if (flippedCards.length === 1) {
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  return (
    <>
    <div className="container">
      <Flipper flipKey={flippedCards.map((card) => card.id).join('')}>
        <div className="grid">
          {cards.map((card) => (
            <Flipped key={card.id} flipId={card.id}>
              <div
                className={`"card" ${flippedCards.some((c) => c.id === card.id) || matchedCards.includes(card.value) ? "flipped" : ''}`}
                onClick={() => handleCardClick(card.id, card.value)}
              >
                <div className="cardInner">
                  <div className="cardFront"></div>
                  <div className="cardBack">{card.value}</div>
                </div>
              </div>
            </Flipped>
          ))}
        </div>
      </Flipper>
    </div>
    <style jsx>{`
       .container {
        display: flex;
        justify-content: center;
        align-items: center;
        /* height: 100vh; */
      }
      
      .grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;
        width: 50%;
      }

      .card {
        perspective: 1000px;
        width: 100%;
        padding-top: 100%; 
        position: relative;
      }
      
      .cardInner {
        transform-style: preserve-3d;
        transition: transform 0.6s;
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      .card.flipped .cardInner {
        transform: rotateY(180deg);
      }
      
      .cardFront,
      .cardBack {
        backface-visibility: hidden;
        /* position: absolute; */
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2rem;
        font-weight: bold;
        background-color: #f8f8f8;
        border: 1px solid #ccc;
        border-radius: 5px;
      }
     
      .cardBack {
        background-color: #4caf50;
        color: #ffffff;
        transform: rotateY(180deg);
      } 

    `}</style>
    </>
  );
  
}

export default GameMemory;
