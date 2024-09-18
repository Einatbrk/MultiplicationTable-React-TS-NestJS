import React from 'react';
import Login from '../components/Login/Login';
// import './LoginPage.css';
import styles from '../styles/components/LoginPage.module.scss'


const LoginPage: React.FC = () => {
  return (
    <div className={styles.LoginPage}>
      <Login />
    </div>
  )
};

export default LoginPage;
