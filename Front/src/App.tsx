import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, GamePage} from './pages';
import WinnersTable from './components/WinnersTable/WinnersTable';
import './styles/global/fonts.scss';
import'./styles/global/reset.scss';

const App: React.FC = () => {

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/game" element={<GamePage/>} />
          <Route path="/winners" element={<WinnersTable />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
