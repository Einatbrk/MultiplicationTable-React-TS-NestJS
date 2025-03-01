import React from 'react';
import { GameHeader } from '../components/GameHeader';
import { Game } from '../components/Game';
import { useGameLogic } from '../hooks/useGameLogic';

const GamePage: React.FC = () => {
  const { playerName, score, gameId, handleFinishGame, handleResetGame } = useGameLogic();
  return (
    <div className="game-page-container">
      <GameHeader playerName={playerName}/>
      <div className="game-content">
        <Game />
        <div className="controls">
          <button onClick={handleResetGame}>משחק חדש</button>
          <button onClick={() => handleFinishGame(playerName, score, gameId)}>סיום משחק</button>
        </div>
      </div>
    </div>
  );
};
export default GamePage;