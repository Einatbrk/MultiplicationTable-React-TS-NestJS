import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { handleGenderSelect, validateStartGame } from '../../utils/loginUtils';
import { Gender } from './Login.types';
import BoyImage from '../../../public/images/boy.png';
import GirlImage from '../../../public/images/girl.png';
import './Login.css';

const Login: React.FC = () => {
  const [playerName, setPlayerName] = useState('');
  const [selectedGender, setSelectedGender] = useState<Gender>(null);

  const onGenderSelect = (gender: 'boy' | 'girl') => {
    setSelectedGender(handleGenderSelect(selectedGender, gender));
  };

  const onStartGame = () => {
    if (validateStartGame(playerName, selectedGender)) {
      console.log(`Player: ${playerName}, Gender: ${selectedGender}`);
    }
  };

  return (
    <div className="login-container">
      <h2>Enter Player Name</h2>
      <Input
        label="Player Name"
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
      />

      <h3>Select Gender</h3>
      <div className="gender-selection">
        <img
          src={BoyImage}
          alt="Boy"
          className={`gender-image ${selectedGender === 'boy' ? 'boy-selected' : ''}`}
          onClick={() => onGenderSelect('boy')}
        />
        <img
          src={GirlImage}
          alt="Girl"
          className={`gender-image ${selectedGender === 'girl' ? 'girl-selected' : ''}`}
          onClick={() => onGenderSelect('girl')}
        />
      </div>

      <Button onClick={onStartGame}>Start Game</Button>
    </div>
  );
};

export default Login;
