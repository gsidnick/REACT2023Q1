import './Button.css';
import React from 'react';
import { IButtonProps } from './IButtonProps';

class Button extends React.Component<IButtonProps, object> {
  constructor(props: IButtonProps) {
    super(props);
  }
  render() {
    return (
      <button className={this.props?.className ? `${this.props?.className} button` : 'button'}>
        {this.props?.children}
      </button>
    );
  }
}

export default Button;
