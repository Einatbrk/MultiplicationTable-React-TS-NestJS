import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; 
export const getTopWinners = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/winners/top-results`);
    if (response.status === 200) {
      console.log('top winners response data from server: ', JSON.stringify(response.data.topResults))
      return response.data.topResults;  
      
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
    console.log('starting resetWinnersTable function');
    const response = await axios.post(`${API_BASE_URL}/admin/reset-winners`, { password });
    console.log(JSON.stringify(response)); 
    if (response.status === 201) {
      return response.data.message;
    } else {
      throw new Error('Failed to reset table');
    }
  } catch (error) {
    console.error('Error resetting winners table:', (error as any).response?.data || (error as any).message);
    throw error;
  }
};


