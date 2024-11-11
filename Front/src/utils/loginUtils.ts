import { v4 as uuidv4 } from 'uuid';
export const handleGenderSelect = (
  selectedGender: 'boy' | 'girl' | null,
  gender: 'boy' | 'girl'
): 'boy' | 'girl' | null => {
  return selectedGender === gender ? null : gender;
};

export const validateStartGame = (
  playerName: string,
  selectedGender: 'boy' | 'girl' | null
): boolean => {
  if (!playerName) {
    alert('יש להזיו שם');
    return false;
  }
  if (!selectedGender) {
    alert('בן או בת?');
    return false;
  }
  console.log(`validateStartGame received gender ${selectedGender}`)
  return true;
};
export const onStartGame = (
  playerName: string,
  selectedGender: 'boy' | 'girl' | null,
  navigate: (path: string, state: { state: { playerName: string; gameId: string; gender: 'boy' | 'girl' } }) => void
) => {
  if (selectedGender === null) {
    alert('Please select a gender.');
    return;
  }

  if (validateStartGame(playerName, selectedGender)) {
    const gameId = uuidv4(); 
    console.log(`Game started! Player: ${playerName}, Gender: ${selectedGender}, GameId: ${gameId}`);
    navigate('/game', { state: { playerName, gameId, gender: selectedGender } }); // Ensure gender is passed here
  }
};

// New functions to be added
/**
 * Handles player name change.
 * @param setPlayerName The state setter function for the player's name.
 */
export const handlePlayerNameChange = (setPlayerName: React.Dispatch<React.SetStateAction<string>>) => 
  (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

