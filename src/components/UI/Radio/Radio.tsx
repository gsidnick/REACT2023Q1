import './Radio.css';
import React from 'react';
import { IRadioProps } from '../../../interfaces/IRadioProps';
import IconRadio from '../Icon/IconRadio/IconRadio';

function Radio({ ...props }: IRadioProps) {
  return (
    <label className="radio">
      <input className="radio__field" type="radio" value={props.value} {...props.register} />
      <span className="radio__wrapper">
        <span className="radio__icon">
          <IconRadio />
        </span>
        <span className="radio__label">{props.children}</span>
      </span>
    </label>
  );
}

export default Radio;
