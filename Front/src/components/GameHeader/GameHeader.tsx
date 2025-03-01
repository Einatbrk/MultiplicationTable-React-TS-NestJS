import '../../styles/index.scss'
import { GameHeaderProps } from './GameHeader.types';

const GameHeader: React.FC<GameHeaderProps> = ({ playerName, score }) => {
  return (
    <div className="game-header">
      <h1>
        בהצלחה, {playerName}! <span className="score">ציון: {score}</span>
      </h1>
    </div>
  );
};

export default GameHeader;
