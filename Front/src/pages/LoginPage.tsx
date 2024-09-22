import React from 'react';
import Login from '../components/Login/Login';
import '../styles/pages/login-page.scss'


const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
      <Login />
    </div>
  )
};

export default LoginPage;
