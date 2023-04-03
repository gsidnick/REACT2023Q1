import './Checkbox.css';
import React from 'react';
import { ICheckboxProps } from '../../../interfaces/ICheckboxProps';
import IconCheck from '../Icon/IconCheck/IconCheck';

function Checkbox({ ...props }: ICheckboxProps) {
  return (
    <label className="checkbox">
      <input className="checkbox__field" type="checkbox" value={props.value} {...props.register} />
      <span className="checkbox__wrapper">
        <span className="checkbox__icon">
          <IconCheck />
        </span>
        <span className="checkbox__label">{props.children}</span>
      </span>
    </label>
  );
}

export default Checkbox;
