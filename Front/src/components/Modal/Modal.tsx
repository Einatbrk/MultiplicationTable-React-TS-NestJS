import { AnswerResponseModal } from './AnswerResponseModal/';
import { ModalWrapperProps } from './Modal.types';



const Modal: React.FC<ModalWrapperProps> = ({ onClose, selectedCell, onCorrectAnswer, isCorrect, gender }) => {


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
