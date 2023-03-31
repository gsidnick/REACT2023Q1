import './Radio.css';
import React from 'react';
import { IRadioProps } from '../../../interfaces/IRadioProps';
import IconRadio from '../Icon/IconRadio/IconRadio';

function Radio({ ...props }: IRadioProps, ref: React.ForwardedRef<HTMLInputElement>) {
  return (
    <label className="radio">
      <input
        className="radio__field"
        type="radio"
        name={props.name}
        value={props.value}
        ref={ref}
      />
      <span className="radio__wrapper">
        <span className="radio__icon">
          <IconRadio />
        </span>
        <span className="radio__label">{props.children}</span>
      </span>
    </label>
  );
}

export default React.forwardRef(Radio);
