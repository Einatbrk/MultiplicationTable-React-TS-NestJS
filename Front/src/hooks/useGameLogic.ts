import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SelectedCell, CellStatus } from '../components/Game/Game.types';
import { saveGameResult, confirmExitGame, resetGame } from '../utils/'; // Import utilities

export const useGameLogic = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedCell, setSelectedCell] = useState<SelectedCell | null>(null);
  const [score, setScore] = useState<number>(0); // Track the player's score
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null); 
  const [cellStatus, setCellStatus] = useState<CellStatus>({}); 
  const [showPerfectScoreModal, setShowPerfectScoreModal] = useState<boolean>(false);
  const [isPerfectScore, setIsPerfectScore] = useState<boolean>(false); 

  const location = useLocation();
  const playerName = location.state?.playerName; 
  const gender = location.state?.gender; 
  const gameId = location.state?.gameId || ''; 
  const navigate = useNavigate();
  console.log("useGameLogic - Gender from location:", location.state?.gender);
  const handleUpdateScore = (newScore: number) => {
     return newScore;
  };
  const handleCellClick = (row: number, col: number) => {
    console.log('useGameLogic- starting handleCellClick');
    const key = `${row}-${col}`;

    // Check if the cell was already answered
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

  const handleAnswer = (isCorrectAnswer: boolean) => {
    if (isCorrectAnswer) {
      setScore((prevScore) => {
        const newScore = prevScore + 1;
        saveGameResult(playerName, newScore, gameId);
        if (newScore === 100) {
          setIsPerfectScore(true);
          setShowPerfectScoreModal(true); // Trigger the perfect score modal
        }
        return newScore;
      });
    }
  
    updateCellStatus(isCorrectAnswer);
    setIsCorrect(isCorrectAnswer);
    console.log(`handle answer game with score: ${score}`);
  };
  const handleClosePerfectScoreModal = () => {
    setShowPerfectScoreModal(false);
    navigate('/'); 
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

  const handleFinishGame = async (playerName: string, score: number,gameId: string,) => {
    console.log(`Exiting game for player ${playerName} with final score: ${score}, gameId: ${gameId}`);
    if (confirmExitGame()) {
      console.log(`Exiting game for player ${playerName} with final score: ${score}, gameId: ${gameId}`);

      if (score === 0) {
        console.warn('Score is 0 on exit. Ensure this is expected.');
      }
      
      // Save the game result with the correct score
      await saveGameResult(playerName, score, gameId); // Pass the correct score
      navigate('/'); // Redirect after saving
    }
  };
  
  const handleResetGame = async () => {
    if (window.confirm('Are you sure you want to reset the game?')) {
      await resetGame(gameId); // Pass gameId to reset the game
      setScore(0); // Reset score
      setCellStatus({}); // Clear the cell status
      navigate(0); // Force page reload to reset game state
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
    handleUpdateScore,
    showPerfectScoreModal,
    handleClosePerfectScoreModal,
    handleFinishGame,
    handleResetGame,
  };
};
