import React from 'react';
import AnswerResponseModal from './AnswerResponseModal/AnswerResponseModal';
import PerfectScoreModal from './PerfectScoreModal/PerfectScoreModal';
import { ModalWrapperProps } from './Modal.types';
import './Modal.css';



const Modal: React.FC<ModalWrapperProps> = ({ onClose, selectedCell, onCorrectAnswer, isPerfectScore, isCorrect, gender }) => {
  if (isPerfectScore) {
    return <PerfectScoreModal onClose={onClose} />;
  }

  return (
    <AnswerResponseModal
      onClose={onClose}
      selectedCell={selectedCell}
      onCorrectAnswer={onCorrectAnswer}
      isCorrect={isCorrect}
      gender={gender}
    />
  );
};

export default Modal;
