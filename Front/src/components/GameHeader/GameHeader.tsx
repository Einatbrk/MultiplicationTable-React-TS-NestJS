import { useLocation } from 'react-router-dom';
import React from 'react';
import styles from '../../styles/components/GameHeader.module.scss'

const GameHeader: React.FC = () => {
  const location = useLocation();
  const playerName = location.state?.playerName || 'Player';
  return (<div className={styles.goodLuckNote}>בהצלחה {playerName}</div>)
};

export default GameHeader;
