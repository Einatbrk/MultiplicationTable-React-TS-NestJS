import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, GamePage, WinnersTablePage } from './pages';
import './styles/global/fonts.scss';
import styles from './styles/global/reset.module.scss';

const App: React.FC = () => {

  return (
    <div className={styles.container}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/game" element={<GamePage/>} />
          <Route path="/winners" element={<WinnersTablePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
