import { Table } from "../Table";
import { useGameLogic } from "../../hooks/";
import { Modal } from "../Modal";
import { GameProps } from "./index.ts";

const Game: React.FC<GameProps> = () => {
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

  return (
    <div className="game-container">
<div className="current-score">ציון: {score}</div>

      <Table 
onCellClick={handleCellClick} 
cellStatus={cellStatus} 
        onResetGame={handleResetGame} 
        gender={gender} 
      />

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