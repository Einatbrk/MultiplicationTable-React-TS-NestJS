import React from 'react';
import { InputProps } from './index.ts';


const Input: React.FC<InputProps> = ({ label, type, value, onChange, placeholder }) => {

  return (
    <div>  
      {label && <label>{label}</label>} 
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
