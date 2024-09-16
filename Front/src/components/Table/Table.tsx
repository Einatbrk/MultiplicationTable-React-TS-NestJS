import React from 'react';
// import './Table.css';
import tableStyles from './Table.module.scss';
import buttonStyles from '../UI/Button/Button.module.scss';

import { TableProps } from './Table.types';


const Table: React.FC<TableProps> = ({ onCellClick, cellStatus, onResetGame}) => {
  return (
    <div>
      
      <table className={tableStyles.tableCells}>
        <thead>
          <tr>
            <th>
            <button className={buttonStyles.resetButton} onClick={onResetGame}>משחק חדש</button>
            </th>
            {Array.from({ length: 10 }, (_, col) => (
              <th key={col + 1} className={tableStyles.borderedHeader}>{col + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, row) => (
            <tr key={row + 1}>
              <td className={tableStyles.noBorder}>{row + 1}</td>
              {Array.from({ length: 10 }, (_, col) => {
                const key = `${row + 1}-${col + 1}`;
                const cell = cellStatus[key] || { content: '?' };

                return (
                  <td className={tableStyles.answerCells} key={col + 1}>
                    <button
                      className={`${buttonStyles.initialButton} ${cell.isCorrect === true ? tableStyles.correct : cell.isCorrect === false ? tableStyles.incorrect : ''}`}
                      onClick={() => onCellClick(row + 1, col + 1)}
                    >
                      {cell.content}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
