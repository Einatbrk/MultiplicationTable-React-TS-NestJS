import React from 'react';
import { ButtonProps } from './Button.types';
import './Button.css'

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return <button className={className} onClick={onClick}>{children}</button>;
};

export default Button;
