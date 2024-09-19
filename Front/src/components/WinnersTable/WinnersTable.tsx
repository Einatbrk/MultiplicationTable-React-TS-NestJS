import React, { useEffect, useState } from "react";
import { getTopWinners, resetWinnersTable } from "../../utils/winnersTableUtils";
import Button from "../UI/Button/Button";
import { Winner, WinnersTableProps } from "./WinnersTable.types";
import Podium from '/images/podium.jpg';
import winnersTableStyles from '../../styles/components/WinnersTable.module.scss';
import buttonStyles from '../../styles/components/Button.module.scss';

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
    <div className={winnersTableStyles.winnersTableContainer}>
      <div className={winnersTableStyles.winnersTableWrapper}>
        <h2>Top 3 Winners</h2>
  
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : winners.length > 0 ? (
          <div className={winnersTableStyles.podiumContainer}>
            <img src={Podium} alt="Winners Podium" className={winnersTableStyles.podiumImage} />
            <div className={`${winnersTableStyles.winner} ${winnersTableStyles.firstPlace}`}>
              <p>{winners[0]?.playerName}</p>
              <p>{winners[0]?.score}</p>
            </div>
            {winners.length > 1 && (
              <div className={`${winnersTableStyles.winner} ${winnersTableStyles.secondPlace}`}>
                <p>{winners[1]?.playerName}</p>
                <p>{winners[1]?.score}</p>
              </div>
            )}
            {winners.length > 2 && (
              <div className={`${winnersTableStyles.winner} ${winnersTableStyles.thirdPlace}`}>
                <p>{winners[2]?.playerName}</p>
                <p>{winners[2]?.score}</p>
              </div>
            )}
          </div>
        ) : (
          <p>No winners yet!</p>
        )}
  
        <div className={winnersTableStyles.buttonsContainer}>
          <Button className={buttonStyles.modalWinnersButton} onClick={handleResetWinners}>
            איפוס טבלה
          </Button>
          <Button className={buttonStyles.modalWinnersButton} onClick={onClose}>
            סגירה
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WinnersTable;
