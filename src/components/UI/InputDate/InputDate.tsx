import './InputDate.css';
import React from 'react';
import { IInputDateProps } from '../../../interfaces/IInputDateProps';

function InputDate({ ...props }: IInputDateProps) {
  return (
    <div className="input">
      <input className="input__field" type="date" {...props.register} />
    </div>
  );
}

export default InputDate;
