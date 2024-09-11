export interface ModalProps {
  onClose: () => void;
  selectedCell: { row: number; col: number };
  onCorrectAnswer: (isCorrect: boolean) => void;
  gender: 'boy' | 'girl'; // Optional gender property
}
export interface ModalWrapperProps extends ModalProps {
  isPerfectScore: boolean; // Add perfect score prop
  isCorrect: boolean | null; // Whether the answer is correct or not
  gender: 'boy' | 'girl'; // The player's gender
}
