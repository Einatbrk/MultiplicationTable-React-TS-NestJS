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
      alert('Please enter your name.');
      return false;
    }
    if (!selectedGender) {
      alert('Please select a gender.');
      return false;
    }
    return true;
  };
  