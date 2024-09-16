import React from 'react';
import Button from '../../UI/Button/Button';
import { PerfectScoreModalProps } from './PerfectScoreModalProps.types';
// import '../../Modal/Modal.css';



const PerfectScoreModal: React.FC<PerfectScoreModalProps> = ({ onClose }) => {
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>Congratulations! You achieved a perfect score!</h2>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default PerfectScoreModal;
