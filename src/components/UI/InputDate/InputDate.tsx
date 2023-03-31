import './InputDate.css';
import React from 'react';
import { IInputDateProps } from '../../../interfaces/IInputDateProps';

function InputDate({ ...props }: IInputDateProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <div className="input">
      <input className="input__field" type="date" name={props.name} ref={ref} />
    </div>
  );
}

export default React.forwardRef(InputDate);
