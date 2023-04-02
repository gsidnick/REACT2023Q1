import './Input.css';
import React from 'react';
import { IInputProps } from '../../../interfaces/IInputProps';

function Input({ ...props }: IInputProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <div className="input">
      <div className="input__icon input__icon_search">
        <input
          className="input__field"
          type={props.type}
          placeholder={props.placeholder}
          ref={ref}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </div>
  );
}

export default React.forwardRef(Input);
