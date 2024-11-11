import React from 'react';
import { AnswerResponseModal } from './AnswerResponseModal/';
import { PerfectScoreModal } from './PerfectScoreModal';
import { ModalWrapperProps } from './Modal.types';



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
