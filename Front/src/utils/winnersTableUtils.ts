// src/utils/winnersTableUtils.ts
import axios from 'axios';

export const getTopWinners = async () => {
  try {
    const response = await axios.get('http://localhost:3000/winners/top-results');
    if (response.status === 200) {
      console.log('top winners response data from server: ', JSON.stringify(response.data.topResults))
      return response.data.topResults;  // Return the topResults from the response
      
    } else {
      throw new Error('Failed to fetch top winners');
    }
  } catch (error) {
    console.error('Error fetching top winners:', error);
    throw error; 
  } 
};

export const resetWinnersTable = async (password: string) => {
  try {
    const response = await axios.post('http://localhost:3000/admin/reset-winners', { password });
    if (response.status === 200) {
      return response.data.message;
    } else {
      throw new Error('Failed to reset table');
    }
  } catch (error) {
    console.error('Error resetting winners table:', error);
    throw error;
  }
};


