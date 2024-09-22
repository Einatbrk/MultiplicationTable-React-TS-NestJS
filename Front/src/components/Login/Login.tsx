import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { handleGenderSelect, onStartGame } from '../../utils/loginUtils';
import { Gender } from './Login.types';
import BoyImage from '/images/boy.jpg';
import GirlImage from '/images/girl.jpg';
import WinnersTable from '../WinnersTable/WinnersTable';
import '../../styles/components/login.scss';
import '../../styles/components/button.scss';


const Login: React.FC = () => {

  const [playerName, setPlayerName] = useState<string>(''); 
  const [selectedGender, setSelectedGender] = useState<Gender>(null);
  const navigate = useNavigate();

  const [showTopWinnersModal, setShowTopWinnersModal] = useState<boolean>(false);


  const handlePlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };

  const onGenderSelect = (gender: 'boy' | 'girl') => {
    setSelectedGender(handleGenderSelect(selectedGender, gender));
  };
  const loadWinners = async () => {
    setShowTopWinnersModal(true); 
  };

  const closeWinnersModal = () => {
    setShowTopWinnersModal(false); 
  };

  return (
    <div className="login-container">
      <img src="/images/login_boy.jpg" alt="Boy Side" className="side-image-left side-image" />
      <div className="login-content">
        <label>הכנס את שמך</label>
        <Input
          type="text"
          value={playerName}
          onChange={handlePlayerNameChange}
          placeholder="מה שמך?"
        />
        <h5>אני...</h5>
        <div className="gender-selection">
          <img
            src={BoyImage}
            alt="Boy"
            className={`login-gender-image ${selectedGender === 'boy' ? 'boy-selected' : ''}`}
            onClick={() => onGenderSelect('boy')}
          />
          <img
            src={GirlImage}
            alt="Girl"
            className={`login-gender-image ${selectedGender === 'girl' ? 'girl-selected' : ''}`}
            onClick={() => onGenderSelect('girl')}
          />
        </div>

        <div className="login-buttons-container">
          <Button className="start-game-button"
            onClick={() => onStartGame(playerName, selectedGender, navigate)}
          >
            בואו נתחיל!
          </Button>
          <Button className="top-left-button" onClick={()=>loadWinners()}>טבלת האלופים</Button>
        </div>
        <img src="/images/login_girl.jpg" alt="Girl Side" className="side-image-right side-image" />
        {showTopWinnersModal && (
          <WinnersTable onClose={closeWinnersModal} />  
        )}
      </div>
    </div>
  );
};

export default Login;
