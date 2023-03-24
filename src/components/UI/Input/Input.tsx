import './Input.css';
import React from 'react';
import { IInputProps } from '../../../interfaces/IInputProps';

class Input extends React.Component<IInputProps> {
  constructor(props: IInputProps) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <div className="input__icon input__icon_search">
          <input
            className="input__field"
            type={this.props.type}
            placeholder={this.props.placeholder}
            value={this.props.value}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    );
  }
}

export default Input;
