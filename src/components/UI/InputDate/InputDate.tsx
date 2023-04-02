import './InputDate.css';
import React from 'react';
import { IInputProps } from '../../../interfaces/IInputProps';

function InputDate({ ...props }: Omit<IInputProps, 'type' | 'value' | 'placeholder'>) {
  return (
    <div className="input">
      <input className="input__field" type="date" {...props.register} />
    </div>
  );
}

export default InputDate;
