import './Select.css';
import React from 'react';
import { ISelectProps } from '../../../interfaces/ISelectProps';

function Select({ ...props }: ISelectProps) {
  const options = ['Rome', 'Milan', 'Turin', 'Palermo', 'Florence'];
  return (
    <select className="select" {...props.register}>
      <option value="">Choose city</option>
      {options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default Select;
