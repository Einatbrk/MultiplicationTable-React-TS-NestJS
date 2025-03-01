import '../../styles/index.scss';
import { TableProps } from './index.ts';


const Table: React.FC<TableProps> = ({ onCellClick, cellStatus, gender }) => {
  console.log (`Table component is rendered. Gender: ${gender} `);
  return (
    <div className="table-container">
      <div className="table-wrapper">
        <table className="table-cells">
          <thead>
            <tr>
              <th></th>
              {Array.from({ length: 10 }, (_, col) => (
                <th key={col + 1} className="bordered-header">{col + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, (_, row) => (
              <tr key={row + 1}>
                <td className="no-border">{row + 1}</td>
                {Array.from({ length: 10 }, (_, col) => {
                  const key = `${row + 1}-${col + 1}`;
                  const cell = cellStatus[key] || { content: '?' };

                  return (
                    <td key={col + 1} className="answer-cells">
                      <button
                        className={`initial-button ${cell.isCorrect === true ? 'correct' : cell.isCorrect === false ? 'incorrect' : ''}`}
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
    </div>
  );
};

export default Table;