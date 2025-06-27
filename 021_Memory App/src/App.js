import React, { useState, useEffect } from 'react';
import './MemoryApp.css';

const MemoryApp = () => {
  // Card data - you can replace with your own images or emojis
  const cardImages = [
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼',
    '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼'
  ];

  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);

  // Initialize the game
  useEffect(() => {
    initializeGame();
  }, []);

  const initializeGame = () => {
    // Shuffle cards
    const shuffledCards = [...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((image, index) => ({ id: index, image, flipped: false }));

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setDisabled(false);
    setMoves(0);
    setGameComplete(false);
  };

  // Check if game is complete
  useEffect(() => {
    if (solved.length === cardImages.length) {
      setGameComplete(true);
    }
  }, [solved, cardImages.length]);

  const handleCardClick = (id) => {
    // Don't allow clicks if:
    // - card is already flipped or solved
    // - two cards are already flipped
    // - game is disabled (during card comparison)
    if (disabled || flipped.includes(id) || solved.includes(id) || flipped.length >= 2) {
      return;
    }

    // Flip the card
    const newFlipped = [...flipped, id];
    setFlipped(newFlipped);

    // If two cards are flipped, check for a match
    if (newFlipped.length === 2) {
      setDisabled(true);
      setMoves(prevMoves => prevMoves + 1);
      checkForMatch(newFlipped);
    }
  };

  const checkForMatch = (flippedCards) => {
    const [firstId, secondId] = flippedCards;
    const firstCard = cards.find(card => card.id === firstId);
    const secondCard = cards.find(card => card.id === secondId);

    // Match is found
    if (firstCard.image === secondCard.image) {
      setSolved([...solved, firstId, secondId]);
      resetTurn();
    } else {
      // No match - flip cards back after delay
      setTimeout(resetTurn, 1000);
    }
  };

  const resetTurn = () => {
    setFlipped([]);
    setDisabled(false);
  };

  return (
    <div className="memory-app">
      <h1>Memory Game</h1>
      
      <div className="game-info">
        <p>Moves: {moves}</p>
        <p>Pairs found: {solved.length / 2} / {cardImages.length / 2}</p>
        <button onClick={initializeGame}>Restart Game</button>
      </div>

      {gameComplete ? (
        <div className="game-complete">
          <h2>Congratulations! 🎉</h2>
          <p>You completed the game in {moves} moves!</p>
        </div>
      ) : (
        <div className="card-grid">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`card ${
                flipped.includes(card.id) || solved.includes(card.id) ? 'flipped' : ''
              }`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">{card.image}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryApp;