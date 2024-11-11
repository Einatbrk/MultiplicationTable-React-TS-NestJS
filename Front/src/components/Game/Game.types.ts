export interface SelectedCell {
  row: number;
  col: number;
}
export interface CellStatus {
  [key: string]: { isCorrect: boolean | null; content: string };
}
export interface GameProps {
  updateScore: (newScore: number) => void; // This prop is passed to update the score in GamePage
}