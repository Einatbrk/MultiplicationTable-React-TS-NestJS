// src/components/WinnersTable/WinnersTable.tsx
import React, { useEffect, useState } from "react";
import { getTopWinners, resetWinnersTable } from "../../utils/winnersTableUtils";
import Button from "../UI/Button/Button";
import { Winner, WinnersTableProps } from "./WinnersTable.types";
import Podium from '/images/podium.jpg'
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
    const inputPassword = prompt("Enter the password to reset the winners table:"); // Prompt for password
    if (!inputPassword) {
      alert("Password is required to reset the table.");
      return;
    }

    try {
      await resetWinnersTable(inputPassword); // Pass the password to resetWinnersTable function
      setWinners([]); // Clear the winners list after reset
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
        ) : winners.length > 0 ? (  // Check if there are winners
          <div className={winnersTableStyles.podiumContainer}>
            <img src={Podium} alt="Winners Podium" className={winnersTableStyles.podiumImage} />
            {/* Render winners */}
          </div>
        ) : (
          <p>No winners yet!</p>  // Show this when the winners array is empty
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
