import { useState } from 'react';
import { Login } from '../components/Login/';
import '../styles/index.scss';
import { Button } from '../components/UI/Button';
import { WinnersTable } from '../components/WinnersTable';

const LoginPage: React.FC = () => {
  const [showTopWinnersModal, setShowTopWinnersModal] = useState<boolean>(false);
  return (
    <div className="login-page">
      <div>
      <Button className="top-left-button" onClick={() => setShowTopWinnersModal(true)}>
        טבלת האלופים
      </Button>
      </div>
      <div className="login-board">
        <Login />
      </div>
      {showTopWinnersModal && <WinnersTable onClose={() => setShowTopWinnersModal(false)} />}
    </div>
  );
};

export default LoginPage;
