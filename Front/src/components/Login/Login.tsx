import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { handleGenderSelect, onStartGame } from '../../utils/loginUtils';
import { Gender } from './Login.types';
import BoyImage from '/images/boy.jpg';
import GirlImage from '/images/girl.jpg';
import WinnersTable from '../WinnersTable/WinnersTable';
// import './Login.css';
import loginStyles from './Login.module.scss';
import buttonStyles from '../UI/Button/Button.module.scss';
import inputStyles from '../UI/Input/Input.module.scss';


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
    <div className={loginStyles.loginContainer}>
      <img src="/images/login_boy.jpg" alt="Boy Side" className={`${loginStyles.sideImageLeft} ${loginStyles.sideImage}`} />
      <div className={loginStyles.loginContent}>
        <label>הכנס את שמך</label>
        <Input
          type="text"
          value={playerName}
          onChange={handlePlayerNameChange}
          placeholder="מה שמך?"
        />
        <h5>אני...</h5>
        <div className={loginStyles.genderSelection}>
          <img
            src={BoyImage}
            alt="Boy"
            className={`${loginStyles.loginGenderImage} ${selectedGender === 'boy' ? loginStyles.boySelected : ''}`}
            onClick={() => onGenderSelect('boy')}
          />
          <img
            src={GirlImage}
            alt="Girl"
            className={`${loginStyles.loginGenderImage} ${selectedGender === 'girl' ? loginStyles.girlSelected : ''}`}
            onClick={() => onGenderSelect('girl')}
          />
        </div>

        <div className={buttonStyles.loginButtonsContainer}>
          <Button className={buttonStyles.startGameButton}
            onClick={() => onStartGame(playerName, selectedGender, navigate)}
          >
            בואו נתחיל!
          </Button>
          <Button className={buttonStyles.topLeftButton} onClick={()=>loadWinners()}>טבלת האלופים</Button>
        </div>
        <img src="/images/login_girl.jpg" alt="Girl Side" className={`${loginStyles.sideImageRight} ${loginStyles.sideImage}`} />
        {showTopWinnersModal && (
          <WinnersTable onClose={closeWinnersModal} />  
        )}
        
        
      </div>
    </div>
  );
};

export default Login;
