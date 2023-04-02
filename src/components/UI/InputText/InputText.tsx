import './InputText.css';
import React from 'react';
import { IInputProps } from '../../../interfaces/IInputProps';

function InputText({ ...props }: Omit<IInputProps, 'type'>) {
  return (
    <div className="input">
      <input
        className="input__field"
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        {...props.register}
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputText;
