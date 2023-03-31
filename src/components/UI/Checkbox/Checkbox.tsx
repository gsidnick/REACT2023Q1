import './Checkbox.css';
import React from 'react';
import { ICheckboxProps } from '../../../interfaces/ICheckboxProps';
import IconCheck from '../Icon/IconCheck/IconCheck';

function Checkbox({ ...props }: ICheckboxProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <label className="checkbox">
      <input
        className="checkbox__field"
        type="checkbox"
        name={props.name}
        value={props.value}
        ref={ref}
      />
      <span className="checkbox__wrapper">
        <span className="checkbox__icon">
          <IconCheck />
        </span>
        <span className="checkbox__label">{props.children}</span>
      </span>
    </label>
  );
}

export default React.forwardRef(Checkbox);
