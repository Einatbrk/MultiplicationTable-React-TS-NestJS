// import {Game} from "../components/Game";
// import React, { useState } from "react";
// import {GameHeader} from "../components/GameHeader/";
// import {Button} from "../components/UI/Button/";
// import { useGameLogic } from "../hooks/";
// import  '../styles/index.scss';

// const GamePage:React.FC=()=>{
//     const { handleFinishGame, playerName, gameId } = useGameLogic();
//     useGameLogic();
//     const [score, setScore] = useState<number>(0);
//     const updateScore = (newScore: number) => {
//         setScore(newScore);
//     };
//     return (
//         <div className="game-page-container">
//             <GameHeader playerName={playerName} score={score}/>
//             <div className="game-content">
//                 <div className="game-component">
//                     <Game updateScore={updateScore}/>
//                 </div>
//                 <div className="finish-button-container">
//                     <Button onClick={() => handleFinishGame(playerName,score, gameId)}>
//                         סיום משחק
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default GamePage;


//version 2
// import React from "react";
// import { Game } from "../components/Game";
// import { GameHeader } from "../components/GameHeader/";
// import { Button } from "../components/UI/Button/";
// import { useGameLogic } from "../hooks/";
// import "../styles/index.scss";

// const GamePage: React.FC = () => {
//   const { handleFinishGame, playerName, gameId, score, handleResetGame } = useGameLogic();

//   return (
//     <div className="game-page-container">
//       <GameHeader playerName={playerName} score={score} />
//       <div className="game-content">
//         <div className="game-component">
//           <Game /> {/* נשאר **בדיוק** כמו שכתבת – בלי נגיעות מיותרות */}
//         </div>
//         <div className="controls">
//           <Button onClick={handleResetGame}>משחק חדש</Button>
//           <Button onClick={() => handleFinishGame(playerName, score, gameId)}>סיום משחק</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GamePage;

//version 3:
import React from 'react';
import { GameHeader } from '../components/GameHeader';
import { Game } from '../components/Game';
import { useGameLogic } from '../hooks/useGameLogic';
import './GamePage.scss';

const GamePage: React.FC = () => {
  const { playerName, score, gameId, handleFinishGame, handleResetGame } = useGameLogic();

  return (
    <div className="game-page-container">
      <GameHeader playerName={playerName} score={score} />
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
