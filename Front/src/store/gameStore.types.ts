export interface GameState {
  score: number;
  setScore: (newScore: number) => void;
  resetScore: () => void;
}
