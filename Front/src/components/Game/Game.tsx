import React from 'react';
import Table from '../Table';
import { useGameLogic } from '../../hooks/useGameLogic'; 
import './Game.css';
import Modal from '../Modal';
import {GameProps} from './Game.types';

const Game: React.FC<GameProps> = ({ updateScore }) => {
  const {
    showModal,
    selectedCell,
    score,
    gender,
    isCorrect,
    isPerfectScore,
    cellStatus,
    handleCellClick,
    handleAnswer,
    handleCloseModal,
    handleResetGame,
  } = useGameLogic();
  useGameLogic();
  React.useEffect(() => {
    updateScore(score);
  }, [score, updateScore]);

  return (
    <div className="game-container">
      <div className="current-score">ציון: {score}</div>
      <Table onCellClick={handleCellClick} cellStatus={cellStatus} onResetGame={handleResetGame} gender={gender} />
      {showModal && selectedCell && (
        <Modal
          onClose={handleCloseModal}
          selectedCell={selectedCell}
          onCorrectAnswer={handleAnswer}
          gender={gender}
          isCorrect={isCorrect}
          isPerfectScore={isPerfectScore} 
        />
      )}
    </div>
  );
};

export default Game;
