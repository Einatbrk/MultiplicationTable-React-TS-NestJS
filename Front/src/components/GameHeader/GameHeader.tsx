// import { useLocation } from 'react-router-dom';

import '../../styles/index.scss'

// const GameHeader: React.FC = () => {
//   const location = useLocation();
//   const playerName = location.state?.playerName || 'Player';
//   return (<div className="good-luck-note">בהצלחה {playerName}</div>)
// };

// export default GameHeader;


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
