import './InputText.css';
import React from 'react';
import { IInputProps } from '../../../interfaces/IInputProps';

class InputText extends React.Component<Omit<IInputProps, 'type'>> {
  constructor(props: Omit<IInputProps, 'type'>) {
    super(props);
  }

  render() {
    return (
      <div className="input">
        <input
          className="input__field"
          type="text"
          name={this.props.name}
          ref={this.props.forwardedRef}
          placeholder={this.props.placeholder}
          value={this.props.value}
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

export default React.forwardRef<HTMLInputElement, Omit<IInputProps, 'type'>>((props, ref) => (
  <InputText forwardedRef={ref} {...props} />
));
