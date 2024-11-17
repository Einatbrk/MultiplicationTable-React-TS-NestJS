import React, { useEffect, useState, useRef } from "react";
import { getTopWinners, resetWinnersTable } from "../../utils/";
import {Button} from "../UI/Button/";
import { Winner, WinnersTableProps } from "./index.ts";
import Podium from '/images/podium.jpg';
import superhero from '/audio/superhero.mp3';
import '../../styles/index.scss';


const WinnersTable: React.FC<WinnersTableProps> = ({ onClose = () => {} }) => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const superheroAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (superheroAudioRef.current) {
        try {
          await superheroAudioRef.current.play();
        } catch (err) {
          console.log('Autoplay failed: user interaction required');
        }
      }
    };
    playAudio();
  }, []);
  useEffect(() => {
    const fetchWinners = async () => {
      try {
        setLoading(true);
        const winnersData = await getTopWinners();
        setWinners(winnersData);
        setLoading(false);
      } catch (error) {
        setError("Failed to fetch winners");
        setLoading(false);
      }
    };
    fetchWinners();
  }, []);

  const handleResetWinners = async () => {
    const inputPassword = prompt("Enter the password to reset the winners table:"); 
    if (!inputPassword) {
      alert("Password is required to reset the table.");
      return;
    }

    try {
      await resetWinnersTable(inputPassword); 
      setWinners([]); 
      alert("Winners table has been reset");
    } catch (error) {
      setError("Failed to reset winners table");
      alert("Invalid password or error in resetting the table.");
    }
  };

  return (
    <div className="winners-table-container">
      <div className="winners-table-wrapper">
        <h2>טבלת אלופים</h2>
  
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : winners.length > 0 ? (
          <div className="podium-container">
            <img src={Podium} alt="Winners Podium" className="podium-image" />
            <div className="first-place winner">
              <p>{winners[0]?.playerName}</p>
              <p>{winners[0]?.score}</p>
            </div>
            {winners.length > 1 && (
              <div className="second-place winner">
                <p>{winners[1]?.playerName}</p>
                <p>{winners[1]?.score}</p>
              </div>
            )}
            {winners.length > 2 && (
              <div className="third-place winner">
                <p>{winners[2]?.playerName}</p>
                <p>{winners[2]?.score}</p>
              </div>
            )}
          </div>
        ) : (
          <p>עדיין אין אלופים בטבלה</p>
        )}
  
        <div className="buttons-container">
          <Button className="modal-winners-button" onClick={handleResetWinners}>
            איפוס טבלה
          </Button>
          <Button className="modal-winners-button" onClick={onClose}>
            סגירה
          </Button>
        </div>
        <audio ref={superheroAudioRef} src={superhero} />
      </div>
    </div>
  );
};

export default WinnersTable;
