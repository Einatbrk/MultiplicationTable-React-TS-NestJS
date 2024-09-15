import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import Input from '../../UI/Input/Input';
import {AnswerResponseModalProps} from './AnswerResponseModalProps'
import '../../Modal/Modal.css';
import BoyCorrectImg from '/images/correctBoy.jpg';
import BoyIncorrectImg from '/images/wrongBoy.jpg';
import GirlCorrectImg from '/images/correctGirl.jpg';
import GirlIncorrectImg from '/images/wrongGirl.jpg';


const AnswerResponseModal: React.FC<AnswerResponseModalProps> = ({ onClose, selectedCell, onCorrectAnswer, isCorrect, gender }) => {
  const [answer, setAnswer] = useState<string>('');
  const correctAnswer = selectedCell.row * selectedCell.col;

  const handleSubmit = () => {
    if (parseInt(answer, 10) === correctAnswer) {
      onCorrectAnswer(true); // Pass `true` for correct answer
    } else {
      onCorrectAnswer(false); // Pass `false` for incorrect answer
    }
  };

  const getResponseContent = () => {
    let backgroundColor = '';
    let imageUrl = '';

    if (isCorrect === true) {
      backgroundColor = 'green';
      imageUrl = gender === 'boy' ? BoyCorrectImg : GirlCorrectImg;
    } else if (isCorrect === false) {
      backgroundColor = 'red';
      imageUrl = gender === 'boy' ? BoyIncorrectImg : GirlIncorrectImg;
    }

    if (isCorrect !== null) {
      return (
        <div className="modal-content" style={{ backgroundColor }}>
          <img src={imageUrl} alt={`${gender} ${isCorrect ? 'Correct' : 'Incorrect'}`} className="response-image" />
          <h2 style={{direction: "rtl" }}>{isCorrect ? 'נכון מאוד!' : 'טעות'}</h2>
          <p>התשובה הנכונה היא: {correctAnswer}.</p>
          <Button onClick={onClose}>סגירה</Button>
        </div>
      );
    }
    return (
      <>
        <div className='modal-content' style={{ background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)"}}>
          <p>:שאלה</p>
          <span>{` ${selectedCell.row} x ${selectedCell.col}?`}</span>
          <Input type="number" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          {isCorrect === null && <Button onClick={handleSubmit}>שלח תשובה</Button>}
        <Button onClick={onClose}>סגירה</Button>
        </div>
      </>
    );
  };
      
  return (
    <div className="modal-backdrop">
      <div className="modal-backdrop">
        {getResponseContent()}
      </div>
    </div>
  );
};

export default AnswerResponseModal;
