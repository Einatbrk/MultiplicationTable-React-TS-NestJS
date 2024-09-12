// src/components/WinnersTable/WinnersTable.tsx
import React, { useEffect, useState } from "react";
import { getTopWinners, resetWinnersTable } from "../../utils/winnersTableUtils";
import Button from "../UI/Button/Button";
import { Winner, WinnersTableProps } from "./WinnersTable.types";
import Podium from '/images/podium.jpg'
import './WinnersTable.css';

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
    <div className="modal-backdrop">
      <div className="modal-content">
        
        <h2>Top 3 Winners</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <div className="podium-container">
            <img src={Podium} alt="Winners Podium" className="podium-image" />
            {winners.length > 0 && (
              <>
                <div className="winner first-place">
                  <p>{winners[0].playerName}</p>
                  <p>{winners[0].score}</p>
                </div>
                {winners.length > 1 && (
                  <div className="winner second-place">
                    <p>{winners[1].playerName}</p>
                    <p>{winners[1].score}</p>
                  </div>
                )}
                {winners.length > 2 && (
                  <div className="winner third-place">
                    <p>{winners[2].playerName}</p>
                    <p>{winners[2].score}</p>
                  </div>
                )}
              </>
            )}
              <div className="buttons-container">
                <Button onClick={handleResetWinners}>איפוס טבלה</Button>
                <Button onClick={onClose}>סגירה</Button>
              </div>
          </div>
        )}

          

      </div>
    </div>
  );
};

export default WinnersTable;
