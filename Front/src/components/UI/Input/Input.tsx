import React from 'react';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
