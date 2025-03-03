import { GameHeader } from '../components/GameHeader';
import { Game } from '../components/Game';
import { useGameLogic } from '../hooks/useGameLogic';
import {useGameStore} from '../store';

const GamePage: React.FC = () => {
  const { playerName, gameId, handleFinishGame, handleResetGame } = useGameLogic();
  const { score } = useGameStore();
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