// src/components/WinnersTable/WinnersTable.tsx
import React, { useEffect, useState } from "react";
import { getTopWinners, resetWinnersTable } from "../../utils/winnersTableUtils";
import Button from "../UI/Button/Button";
import { Winner, WinnersTableProps } from "./WinnersTable.types";
import './WinnersTable.css';

const WinnersTable: React.FC<WinnersTableProps> = ({ onClose }) => {
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
        <div>
          {onClose && (
            <button onClick={onClose} className="close-button">
              סגירה
            </button>
          )}
          <h2>Top 3 Winners</h2>
          {loading ? (
            <p>Loading...</p>
          ) : error ? (
            <p>{error}</p>
          ) : (
            <ul>
              {winners.map((winner: Winner, index: number) => (
                <li key={index}>
                  {index + 1}. {winner.playerName} - Score: {winner.score}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button onClick={handleResetWinners}>Reset Table</Button>
      </div>
    </div>
  );
};

export default WinnersTable;
