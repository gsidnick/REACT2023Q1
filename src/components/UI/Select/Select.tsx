import './Select.css';
import React from 'react';
import { ISelectProps } from '../../../interfaces/ISelectProps';

function Select({ ...props }: ISelectProps, ref: React.ForwardedRef<HTMLSelectElement>) {
  const options = ['Rome', 'Milan', 'Turin', 'Palermo', 'Florence'];

  return (
    <select className="select" ref={ref} name={props.name}>
      <option value="">Choose city</option>
      {options.map((item, index) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
}

export default React.forwardRef(Select);
