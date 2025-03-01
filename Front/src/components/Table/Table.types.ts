export interface TableProps {
  onCellClick: (row: number, col: number) => void;
  cellStatus: {
    [key: string]: { isCorrect: boolean | null; content: string };
  };
  gender: string;
  onResetGame: () => void;
}
