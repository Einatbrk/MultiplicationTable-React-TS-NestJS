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
  console.log(`AnswerResponseModal received gender: ${gender}`)
  const [answer, setAnswer] = useState<string>('');
  const correctAnswer = selectedCell.row * selectedCell.col;

  const handleSubmit = () => {
    console.log('AnswerResponseModal- handle submit starting');
  
    if (parseInt(answer, 10) === correctAnswer) {
      console.log('AnswerResponseModal- calling onCorrectAnswer(true)');
      onCorrectAnswer(true); // Pass `true` for correct answer
    } else {
      console.log(`AnswerResponseModal- Incorrect answer, calling onCorrectAnswer(false)`);
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
      // Correct or Incorrect state
      return (
        <div className="modal-content" style={{ backgroundColor }}>
          <img src={imageUrl} alt={`${gender} ${isCorrect ? 'Correct' : 'Incorrect'}`} className="response-image" />
          <h2>{isCorrect ? 'Correct!' : 'Incorrect'}</h2>
          <p>The correct answer is {correctAnswer}.</p>
        </div>
      );
    }
    return (
      <>
        <h2>{`What is ${selectedCell.row} x ${selectedCell.col}?`}</h2>
        <Input type="number" value={answer} onChange={(e) => setAnswer(e.target.value)} />
      </>
    );
  };
      
  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {getResponseContent()}
        {isCorrect === null && <Button onClick={handleSubmit}>Submit</Button>}
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};

export default AnswerResponseModal;
