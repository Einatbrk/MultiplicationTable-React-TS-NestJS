import React from 'react';
import { ButtonProps } from './Button.types';
import styles from '../../../styles/components/Button.module.scss'

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  const buttonClass = `${styles.button} ${className ? className : ''}`;
  return <button className={buttonClass} onClick={onClick}>
    {children}</button>;
};

export default Button;
