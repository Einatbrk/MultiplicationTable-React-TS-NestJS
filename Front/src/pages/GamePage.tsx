import React from 'react';
import { GameHeader } from '../components/GameHeader';
import { Game } from '../components/Game';
import { useGameLogic } from '../hooks/useGameLogic';

const GamePage: React.FC = () => {
  const { playerName, score, gameId, handleFinishGame, handleResetGame, handleUpdateScore } = useGameLogic();
  useGameLogic()
  return (
    <div className="game-page-container">
      <GameHeader playerName={playerName} score={score} />
      <div className="game-content">
        <Game updateScore={handleUpdateScore}/>
        <div className="controls">
          <button onClick={handleResetGame}>משחק חדש</button>
          <button onClick={() => handleFinishGame(playerName, score, gameId)}>סיום משחק</button>
        </div>
      </div>
    </div>
  );
};
export default GamePage;