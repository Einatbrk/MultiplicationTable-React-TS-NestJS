import React from 'react';
import { ButtonProps } from './Button.types';
import '../../../styles/components/button.scss'

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  const buttonClass = `button ${className ? className : ''}`.trim();
  return <button className={buttonClass} onClick={onClick}>
    {children}</button>;
};

export default Button;
