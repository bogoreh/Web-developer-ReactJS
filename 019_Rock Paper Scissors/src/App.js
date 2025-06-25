import React, { useState } from 'react';
import './App.css';

function App() {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState({ player: 0, computer: 0 });

  const choices = ['rock', 'paper', 'scissors'];

  const handlePlayerChoice = (choice) => {
    const computerRandomChoice = choices[Math.floor(Math.random() * choices.length)];
    
    setPlayerChoice(choice);
    setComputerChoice(computerRandomChoice);
    determineWinner(choice, computerRandomChoice);
  };

  const determineWinner = (player, computer) => {
    if (player === computer) {
      setResult("It's a tie!");
    } else if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setResult('You win!');
      setScore({ ...score, player: score.player + 1 });
    } else {
      setResult('Computer wins!');
      setScore({ ...score, computer: score.computer + 1 });
    }
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
  };

  return (
    <div className="App">
      <h1>Rock Paper Scissors</h1>
      
      <div className="score">
        <p>Player: {score.player}</p>
        <p>Computer: {score.computer}</p>
      </div>
      
      <div className="choices">
        {choices.map((choice) => (
          <button 
            key={choice} 
            onClick={() => handlePlayerChoice(choice)}
            disabled={playerChoice !== null}
          >
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>
      
      {playerChoice && computerChoice && (
        <div className="results">
          <p>You chose: <strong>{playerChoice}</strong></p>
          <p>Computer chose: <strong>{computerChoice}</strong></p>
          <p className="result-text">{result}</p>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;