import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Sends the player's name and score to the server for saving.
 * @param playerName 
 * @param score 
 * @param gameId 
 */
export const saveGameResult = async (playerName: string, score: number, gameId: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/game/save`, {
      playerName,
      score,
      gameId, 
    });
    if (response.status === 201 || response.status === 200) {
      console.log('Game result saved or updated successfully:', JSON.stringify(response.data));
    } else {
      console.log('Failed to save or update game result.');
    }
  } catch (error) {
    console.error('Error saving or updating game result:', error);
    alert('An error occurred while saving the game result.');
  }
};

/**
 * Resets the current game by sending a DELETE request to the server.
 * @param gameId The game's ID
 */
export const resetGame = async (gameId: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/game/reset-game`, {
      data: { gameId }, 
    });
    if (response.status === 200) {
      alert('Game reset successfully!');
    } else {
      alert('Failed to reset the game.');
    }
  } catch (error) {
    console.error('Error resetting the game:', error);
    alert('An error occurred while resetting the game.');
  }
};
/**
 * Confirms if the user wants to quit the game.
 * @returns A boolean indicating whether the user confirmed the exit.
 */
export const confirmExitGame = (): boolean => {
  return window.confirm('האם לסיים את המשחק?');
};



