
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../UI/Input/';
import { Button } from '../UI/Button/';
import { handleGenderSelect, onStartGame } from '../../utils/';
import { Gender } from './index.ts';

import LoginGirl from '/images/loginGirl.svg';
import LoginBoy from '/images/loginBoy.png';
import '../../styles/index.scss';

const Login: React.FC = () => {
  const [playerName, setPlayerName] = useState<string>(''); 
  const [selectedGender, setSelectedGender] = useState<Gender | null>(null);
  const navigate = useNavigate();

  const onGenderSelect = (gender: 'boy' | 'girl') => {
    const newGender = handleGenderSelect(selectedGender, gender);
    console.log(`Gender selected: ${newGender}`);
    setSelectedGender(newGender);
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h2 className="login-title">הכנס את שמך</h2>
        <Input 
          type="text" 
          value={playerName} 
          onChange={(e) => setPlayerName(e.target.value)} 
          placeholder="מה שמך?"
          autoFocus
        />

        <h2 className="login-title">אני...</h2>
        <div className="gender-selection">
          <img 
            src={LoginBoy} 
            alt="Boy" 
            className={`login-gender-image ${selectedGender === 'boy' ? 'boy-selected' : ''}`} 
            onClick={() => onGenderSelect('boy')}
          />
          <img 
            src={LoginGirl} 
            alt="Girl" 
            className={`login-gender-image ${selectedGender === 'girl' ? 'girl-selected' : ''}`} 
            onClick={() => onGenderSelect('girl')}
          />
        </div>

        {/* 🔥 הכפתור עכשיו **חלק מהתוכן ולא מחוץ לו** 🔥 */}
        <div className="login-buttons-container">
          <Button className="start-game-button" onClick={() => onStartGame(playerName, selectedGender, navigate)}>
            בואו נתחיל!
          </Button>
        </div>
      </div>
    </div>
  )
};

export default Login;
