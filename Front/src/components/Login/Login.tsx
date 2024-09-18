import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import { handleGenderSelect, onStartGame } from '../../utils/loginUtils';
import { Gender } from './Login.types';
import BoyImage from '/images/boy.jpg';
import GirlImage from '/images/girl.jpg';
import WinnersTable from '../WinnersTable/WinnersTable';
import loginStyles from '../../styles/components/Login.module.scss';
import buttonStyles from '../../styles/components/Button.module.scss';


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
