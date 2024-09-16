import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { handleGenderSelect, onStartGame } from '../../utils/loginUtils';
import { Gender } from './Login.types';
import BoyImage from '/images/boy.jpg';
import GirlImage from '/images/girl.jpg';
import WinnersTable from '../WinnersTable/WinnersTable';
import './Login.css';


const Login: React.FC = () => {
  //Player properties
  const [playerName, setPlayerName] = useState<string>(''); 
  const [selectedGender, setSelectedGender] = useState<Gender>(null);
  const navigate = useNavigate();
  //Top 3 Modal
  const [showTopWinnersModal, setShowTopWinnersModal] = useState<boolean>(false);

  //Handle Player name input
  const handlePlayerNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayerName(e.target.value);
  };
  //Handle gender selection
  const onGenderSelect = (gender: 'boy' | 'girl') => {
    setSelectedGender(handleGenderSelect(selectedGender, gender));
  };
  //Rendering 3 Top players Modal
  const loadWinners = async () => {
    setShowTopWinnersModal(true); // Open modal
  };

  const closeWinnersModal = () => {
    setShowTopWinnersModal(false); // Close modal
  };

  return (
    <div className="login-container">
      <img src="/images/login_boy.jpg" alt="Boy Side" className="side-image left" />
      <img src="/images/login_girl.jpg" alt="Girl Side" className="side-image right" />
      <div className="login-content">
        <Input
          label="הכנס את שמך"
          type="text"
          value={playerName}
          onChange={handlePlayerNameChange}
          placeholder="מה שמך?"
        />
        <h4>אני...</h4>
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

        <div className='login-buttons-container'>
          <Button className='start-game-button'
            onClick={() => onStartGame(playerName, selectedGender, navigate)}
          >
            בואו נתחיל!
          </Button>
          <Button className='top-left-button' onClick={()=>loadWinners()}>טבלת האלופים</Button>
        </div>
        {showTopWinnersModal && (
          <WinnersTable onClose={closeWinnersModal} />  
        )}
        
      </div>
    </div>
  );
};

export default Login;
