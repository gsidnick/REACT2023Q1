import './InputText.css';
import React from 'react';
import { IInputProps } from '../../../interfaces/IInputProps';

function InputText(
  { ...props }: Omit<IInputProps, 'type'>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  return (
    <div className="input">
      <input
        className="input__field"
        type="text"
        name={props.name}
        ref={ref}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}

export default React.forwardRef(InputText);
