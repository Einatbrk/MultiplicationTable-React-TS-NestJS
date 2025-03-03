// import React, { useEffect, useRef } from 'react';
// import { Button } from '../../UI/Button/';
// import { PerfectScoreModalProps } from './PerfectScoreModalProps.types';
// import '../../../styles/index.scss';
// import perfectScoreImage from '/images/perfect.jpg';
// import cheeringAndClapping from '/audio/cheeringAndClapping.mp3'



// const PerfectScoreModal: React.FC<PerfectScoreModalProps> = ({ onClose }) => {
//   const audioRef = useRef<HTMLAudioElement | null>(null);

//   useEffect(() => {
//     if (audioRef.current) {
//       audioRef.current.play();
//     }
//   }, []);
//   return (
//     <div className="modal-backdrop">
//       <div className="modal-content">
//         <div className='perfect-score-container'>
//           <h3>ציון מושלם!</h3>
//           <img src={perfectScoreImage} alt="Perfect score" />
//           <audio ref={audioRef} src={cheeringAndClapping} />
//           <Button className='close-perfect-score-btn' onClick={onClose}>סגירה</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PerfectScoreModal;
