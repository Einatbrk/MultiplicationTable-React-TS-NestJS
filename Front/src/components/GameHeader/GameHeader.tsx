import { useLocation } from 'react-router-dom';
import React from 'react';
// import './GameHeader.css';
import styles from './GameHeader.module.scss'

const GameHeader: React.FC = () => {
  const location = useLocation();
  const playerName = location.state?.playerName || 'Player';
  return (<div className={styles.goodLuckNote}>בהצלחה {playerName}</div>)
};

export default GameHeader;
