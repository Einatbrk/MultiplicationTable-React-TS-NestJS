// import React from 'react';
// import { Table } from '../Table';
// import { PerfectScoreModal } from '../Modal/PerfectScoreModal/';
// import { useGameLogic } from '../../hooks/'; 
// import '../../styles/index.scss';
// import { Modal } from '../Modal';
// import { GameProps } from './index.ts';

// const Game: React.FC<GameProps> = ({ updateScore }) => {
//   const {
//     showModal,
//     selectedCell,
//     score,
//     gender,
//     isCorrect,
//     isPerfectScore,
//     cellStatus,
//     handleCellClick,
//     handleAnswer,
//     handleCloseModal,
//     handleResetGame,
//     showPerfectScoreModal, 
//     handleClosePerfectScoreModal, 
//   } = useGameLogic();
//   useGameLogic();

//   React.useEffect(() => {
//     updateScore(score);
//   }, [score, updateScore]);

//   return (
//     <div className="game-container">
//       <div className="current-score">ציון: {score}</div>
//       <Table onCellClick={handleCellClick} cellStatus={cellStatus} onResetGame={handleResetGame} gender={gender} />
      
//       {showModal && selectedCell && (
//         <Modal
//           onClose={handleCloseModal}
//           selectedCell={selectedCell}
//           onCorrectAnswer={handleAnswer}
//           gender={gender}
//           isCorrect={isCorrect}
//           isPerfectScore={isPerfectScore}
//         />
//       )}

//       {showPerfectScoreModal && (
//         <PerfectScoreModal onClose={handleClosePerfectScoreModal} />
//       )}
//     </div>
//   );
// };

// export default Game;
import React from "react";
import { Table } from "../Table";
import { useGameLogic } from "../../hooks/";
import "./Game.scss";

const Game: React.FC = () => {
  const { cellStatus, handleCellClick, gender, handleResetGame } = useGameLogic();

  return (
    <div className="game-container">
      <Table onCellClick={handleCellClick} cellStatus={cellStatus} gender={gender} onResetGame={handleResetGame} />
    </div>
  );
};

export default Game;
