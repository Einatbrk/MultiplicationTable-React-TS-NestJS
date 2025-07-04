import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LoginPage, GamePage} from './pages';
import {WinnersTable} from './components/WinnersTable/';
import './styles/index.scss';

const App: React.FC = () => {
console.log('*****************************',import.meta.env.VITE_PUBLIC_URL);
  return (
    <div className="container">
      <Router basename={import.meta.env.VITE_PUBLIC_URL}>
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
