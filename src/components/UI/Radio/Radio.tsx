import './Radio.css';
import React from 'react';
import { IRadioProps } from '../../../interfaces/IRadioProps';
import IconRadio from '../Icon/IconRadio/IconRadio';

class Radio extends React.Component<IRadioProps> {
  constructor(props: IRadioProps) {
    super(props);
  }
  render() {
    return (
      <label className="radio">
        <input
          className="radio__field"
          type="radio"
          name={this.props.name}
          value={this.props.value}
          ref={this.props.forwardedRef}
        />
        <span className="radio__wrapper">
          <span className="radio__icon">
            <IconRadio />
          </span>
          <span className="radio__label">{this.props?.children}</span>
        </span>
      </label>
    );
  }
}

export default React.forwardRef<HTMLInputElement, IRadioProps>((props, ref) => (
  <Radio forwardedRef={ref} {...props} />
));
