import { useLocation } from 'react-router-dom';
import React from 'react';
import '../../styles/index.scss'

const GameHeader: React.FC = () => {
  const location = useLocation();
  const playerName = location.state?.playerName || 'Player';
  return (<div className="good-luck-note">בהצלחה {playerName}</div>)
};

export default GameHeader;
