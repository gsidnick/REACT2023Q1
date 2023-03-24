import './InputDate.css';
import React from 'react';
import { IInputDateProps } from '../../../interfaces/IInputDateProps';

class InputDate extends React.Component<IInputDateProps, { filename: string }> {
  constructor(props: IInputDateProps) {
    super(props);
    this.state = { filename: '' };
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files !== null) {
      this.setState({ filename: event.target.files[0].name });
    }
    if (this.props.onChange != undefined) this.props.onChange(event);
  }

  render() {
    return (
      <div className="input">
        <input
          className="input__field"
          type="date"
          name={this.props.name}
          ref={this.props.forwardedRef}
        />
      </div>
    );
  }
}

export default React.forwardRef<HTMLInputElement, IInputDateProps>((props, ref) => (
  <InputDate forwardedRef={ref} {...props} />
));
