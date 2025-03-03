import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SelectedCell, CellStatus } from '../components/Game/Game.types';
import  {useGameStore} from '../store'
import { saveGameResult, confirmExitGame, resetGame } from '../utils/'; 

export const useGameLogic = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCell, setSelectedCell] = useState<SelectedCell | null>(null);
  const { score, setScore } = useGameStore();
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); 
  const [cellStatus, setCellStatus] = useState<CellStatus>({}); 
  const [showPerfectScoreModal, setShowPerfectScoreModal] = useState<boolean>(false);
  const [isPerfectScore, setIsPerfectScore] = useState<boolean>(false); 

  const location = useLocation();
  const playerName = location.state?.playerName; 
  const gender = location.state?.gender; 
  const gameId = location.state?.gameId || ''; 
  const navigate = useNavigate();

  const handleCellClick = (row: number, col: number) => {
    console.log('useGameLogic- starting handleCellClick');
    const key = `${row}-${col}`;


    const userAnswer = cellStatus[key];

    if (userAnswer && userAnswer.isCorrect !== null) {
      // Cell was already answered
      console.log('useGameLogic- Cell already answered, opening modal with result');
      setSelectedCell({ row, col });
      setIsCorrect(userAnswer.isCorrect); // Set the modal to show the previous result
      setShowModal(true);
    } else {
      // Cell is being answered for the first time
      console.log('useGameLogic- Cell not answered, setting up modal for question');
      setSelectedCell({ row, col });
      setIsCorrect(null); // Reset isCorrect for new answer
      setShowModal(true);
    }
  };

  // const handleAnswer = (isCorrectAnswer: boolean) => {
  //   setScore((prevScore) => {
  //     const newScore = prevScore + (isCorrectAnswer ? 1 : 0);
  
  //     console.log(`handleAnswer - Updated score: ${newScore}`);
  
  //     saveGameResult(playerName, newScore, gameId); 
  
  //     if (newScore === 100) {
  //       setIsPerfectScore(true);
  //       setShowPerfectScoreModal(true);
  //     }
  
  //     return newScore;
  //   });
  
  //   updateCellStatus(isCorrectAnswer);
  //   setIsCorrect(isCorrectAnswer);
  // };
  const handleClosePerfectScoreModal = () => {
    setShowPerfectScoreModal(false);
    navigate('/'); 
  };
  const handleAnswer = (isCorrectAnswer: boolean) => {
    const newScore = score + (isCorrectAnswer ? 1 : 0);
  
    console.log(`handleAnswer - Updated score: ${newScore}`);
  
    setScore(newScore); // ✅ עדכון תקין לפי Zustand
  
    saveGameResult(playerName, newScore, gameId);
  
    if (newScore === 100) {
      setIsPerfectScore(true);
      setShowPerfectScoreModal(true);
    }
  
    updateCellStatus(isCorrectAnswer);
    setIsCorrect(isCorrectAnswer);
  };

  const updateCellStatus = (isCorrect: boolean) => {
    if (!selectedCell) return;
    const key = `${selectedCell.row}-${selectedCell.col}`;
    const newContent = isCorrect ? `${selectedCell.row * selectedCell.col}` : 'X';
    
    setCellStatus((prevStatus) => ({
      ...prevStatus,
      [key]: { isCorrect, content: newContent },
    }));
    
    console.log(`useGameLogic- Updated cell status for ${key} to ${newContent}`);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCell(null);
  };

  const handleFinishGame = async (playerName:string, score: number, gameId: string) => {
    console.log(`Finishing game for ${playerName} with final score:`, score);
  
    if (confirmExitGame()) {
      const finalScore = score; 
      await saveGameResult(playerName, finalScore, gameId);
      navigate('/'); 
    }
  };
  
  
  
  const handleResetGame = async () => {
    if (window.confirm('לאפס את המשחק? הציון הנוכחי לא יישמר')) {
      await resetGame(gameId);
      setScore(0); 
      setCellStatus({}); 
      navigate(0); 
    }
  };

  return {
    showModal,
    selectedCell,
    score,
    gender,
    gameId,
    playerName,
    isCorrect,
    isPerfectScore,
    cellStatus,
    handleCellClick,
    handleAnswer, 
    handleCloseModal,
    showPerfectScoreModal,
    handleClosePerfectScoreModal,
    handleFinishGame,
    handleResetGame,
  };
};
