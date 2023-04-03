import './Button.css';
import React from 'react';
import { IButtonProps } from '../../../interfaces/IButtonProps';

function Button({ ...props }: IButtonProps) {
  return (
    <button
      type={props.type}
      className={props?.className ? `${props.className} button` : 'button'}
      onClick={props.onClick}
    >
      {props?.children}
    </button>
  );
}

export default Button;
