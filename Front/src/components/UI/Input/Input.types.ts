export interface InputProps {
    label?: string;
    type: string;
    value: string;
    placeholder?:string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    autoFocus?: boolean;
  }
  