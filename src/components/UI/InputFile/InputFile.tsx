import './InputFile.css';
import React from 'react';
import { IInputFileProps } from '../../../interfaces/IInputFileProps';

class InputFile extends React.Component<IInputFileProps, { filename: string }> {
  constructor(props: IInputFileProps) {
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
      <label className="input-file">
        <input
          className="input-file__field"
          type="file"
          accept="image/png, image/jpeg"
          name={this.props.name}
          ref={this.props.forwardedRef}
          onChange={this.onChangeHandler}
        />
        <span className="input-file__name">{this.state.filename}</span>
        <span className="input-file__button button">{this.props.label}</span>
      </label>
    );
  }
}

export default React.forwardRef<HTMLInputElement, IInputFileProps>((props, ref) => (
  <InputFile forwardedRef={ref} {...props} />
));
