import './Checkbox.css';
import React from 'react';
import { ICheckboxProps } from '../../../interfaces/ICheckboxProps';
import IconCheck from '../Icon/IconCheck/IconCheck';

class Checkbox extends React.Component<ICheckboxProps> {
  constructor(props: ICheckboxProps) {
    super(props);
  }
  render() {
    return (
      <label className="checkbox">
        <input
          className="checkbox__field"
          type="checkbox"
          name={this.props.name}
          value={this.props.value}
          ref={this.props.forwardedRef}
        />
        <span className="checkbox__wrapper">
          <span className="checkbox__icon">
            <IconCheck />
          </span>
          <span className="checkbox__label">{this.props?.children}</span>
        </span>
      </label>
    );
  }
}

export default React.forwardRef<HTMLInputElement, ICheckboxProps>((props, ref) => (
  <Checkbox forwardedRef={ref} {...props} />
));
