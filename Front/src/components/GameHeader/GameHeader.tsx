import '../../styles/index.scss'
import { GameHeaderProps } from './GameHeader.types';

const GameHeader: React.FC<GameHeaderProps> = ({ playerName }) => {
  return (
    <div className="game-header">
      <h1>
        בהצלחה, {playerName}! 
      </h1>
    </div>
  );
};

export default GameHeader;
