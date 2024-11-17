export interface Winner {
    playerName: string;
    score: number;
}
  
export interface WinnersTableProps {
winners?: Winner[];
loading?: boolean;
error?: string | null;
onClose?: () => void;
}
