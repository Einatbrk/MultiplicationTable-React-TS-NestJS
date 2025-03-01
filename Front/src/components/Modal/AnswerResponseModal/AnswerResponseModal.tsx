import React, { useState, useEffect, useRef  } from 'react';
import { Button } from '../../UI/Button/';
import { Input } from '../../UI/Input/';
import {AnswerResponseModalProps} from './index.ts';
import '../../../styles/index.scss';
import BoyCorrectImg from '/images/correctBoy.svg';
import BoyIncorrectImg from '/images/wrongBoy.jpg';
import GirlCorrectImg from '/images/correctGirl.svg';
import GirlIncorrectImg from '/images/wrongGirl.jpg';
import clapping from '/audio/clapping.mp3';
import drums from '/audio/drums.mp3';


const AnswerResponseModal: React.FC<AnswerResponseModalProps> = ({ onClose, selectedCell, onCorrectAnswer, isCorrect, gender }) => {
  const [answer, setAnswer] = useState<string>('');
  const correctAnswer = selectedCell.row * selectedCell.col;
  
  const clappingAudioRef = useRef<HTMLAudioElement | null>(null);
  const drumsAudioRef = useRef<HTMLAudioElement | null>(null);
  useEffect(() => {
    if (isCorrect === true && clappingAudioRef.current) {
      clappingAudioRef.current.play();
    } else if (isCorrect === false && drumsAudioRef.current) {
      drumsAudioRef.current.play();
    }
  }, [isCorrect]);
  const handleSubmit = () => {
    if (parseInt(answer, 10) === correctAnswer) {
      onCorrectAnswer(true); 
    } else {
      onCorrectAnswer(false); 
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
          <img 
            src={imageUrl}
            alt={`${gender} ${isCorrect ? 'Correct' : 'Incorrect'}`}
            className="response-image"
            />
          <div className="response-content">
            <h2 style={{direction: "rtl" }}>{isCorrect ? 'נכון מאוד!' : 'טעות'}</h2>
            <p>התשובה הנכונה היא: {correctAnswer}</p>
          </div>
          <Button className="response-content-button" onClick={onClose}>סגירה</Button>
          
        </div>
      );
    }
    return (
      <>
        <div className="modal-content" style={{ background: "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)" }}>
          <p>שאלה:</p>
          <span>{` ${selectedCell.row} x ${selectedCell.col}?`}</span>
          <Input type="number" value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <div className="answer-questions-buttons-container">
            {isCorrect === null && <Button onClick={handleSubmit}>שלח תשובה</Button>}
            <Button onClick={onClose}>סגירה</Button>
          </div>
        </div>
      </>
    );
  };
      
  return (
    <div className="modal-backdrop">
        {getResponseContent()}
        <audio ref={clappingAudioRef} src={clapping} />
        <audio ref={drumsAudioRef} src={drums} />
    </div>
  );
};

export default AnswerResponseModal;
