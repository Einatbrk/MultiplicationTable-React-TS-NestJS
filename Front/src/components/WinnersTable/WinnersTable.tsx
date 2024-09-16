// src/components/WinnersTable/WinnersTable.tsx
import React, { useEffect, useState } from "react";
import { getTopWinners, resetWinnersTable } from "../../utils/winnersTableUtils";
import Button from "../UI/Button/Button";
import { Winner, WinnersTableProps } from "./WinnersTable.types";
import Podium from '/images/podium.jpg'
// import './WinnersTable.css';
import winnersTableStyles from './WinnersTable.module.scss';
import buttonStyles from '../UI/Button/Button.module.scss';

const WinnersTable: React.FC<WinnersTableProps> = ({ onClose = () => {} }) => {
  const [winners, setWinners] = useState<Winner[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

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
    try {
      await resetWinnersTable();
      setWinners([]); // Clear the winners list after reset
    } catch (error) {
      setError("Failed to reset winners table");
    }
  };

  return (
    <div className={winnersTableStyles.modalWinners}>
      <div className={winnersTableStyles.modalWinnersContent}>
        
        <h2>Top 3 Winners</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className={winnersTableStyles.podiumContainer}>
            <img src={Podium} alt="Winners Podium" className={winnersTableStyles.podiumImage} />
            {winners.length > 0 && (
              <>
              <div className={`${winnersTableStyles.winner} ${winnersTableStyles.firstPlace}`}>
                  <p>{winners[0].playerName}</p>
                  <p>{winners[0].score}</p>
                </div>
                {winners.length > 1 && (
                  <div className={`${winnersTableStyles.winner} ${winnersTableStyles.secondPlace}`}>
                    <p>{winners[1].playerName}</p>
                    <p>{winners[1].score}</p>
                  </div>
                )}
                {winners.length > 2 && (
                  <div className={`${winnersTableStyles.winner} ${winnersTableStyles.thirdPlace}`}>
                    <p>{winners[2].playerName}</p>
                    <p>{winners[2].score}</p>
                  </div>
                )}
              </>
            )}
              <div className={winnersTableStyles.buttonsContainer}>
                <Button className={buttonStyles.modalWinnersButton}onClick={handleResetWinners}>איפוס טבלה</Button>
                <Button className={buttonStyles.modalWinnersButton} onClick={onClose}>סגירה</Button>
              </div>
          </div>
        )}

          

      </div>
    </div>
  );
};

export default WinnersTable;
