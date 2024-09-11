import React from 'react';
import { InputProps } from './Input.types.ts';

const Input: React.FC<InputProps> = ({ label, type, value, onChange, placeholder }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input type={type} value={value} onChange={onChange} placeholder={placeholder}/>
    </div>
  );
};

export default Input;
