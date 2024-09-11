import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, GamePage, WinnersTablePage } from './pages';

import './App.css';

const App: React.FC = () => {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/game" element={<GamePage/>} />
        <Route path="/winners" element={<WinnersTablePage />} />
      </Routes>
    </Router>
  );
};

export default App;
