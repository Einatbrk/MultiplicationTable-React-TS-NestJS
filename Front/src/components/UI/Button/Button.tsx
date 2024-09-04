import React from 'react';
import { ButtonProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
