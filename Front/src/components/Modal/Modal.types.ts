export interface ModalProps {
  onClose: () => void;
  selectedCell: { row: number; col: number };
  onCorrectAnswer: (isCorrect: boolean) => void;
  gender: 'boy' | 'girl'; 
}
export interface ModalWrapperProps extends ModalProps {
  isPerfectScore: boolean; 
  isCorrect: boolean | null; 
  gender: 'boy' | 'girl'; 
}
