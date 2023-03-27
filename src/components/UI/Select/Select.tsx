import './Select.css';
import React from 'react';
import { ISelectProps } from '../../../interfaces/ISelectProps';

class Select extends React.Component<ISelectProps> {
  private options: string[];
  constructor(props: ISelectProps) {
    super(props);
    this.options = ['Rome', 'Milan', 'Turin', 'Palermo', 'Florence'];
  }

  render() {
    return (
      <select className="select" ref={this.props.forwardedRef} name={this.props.name}>
        <option value="">Choose city</option>
        {this.options.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  }
}

export default React.forwardRef<HTMLSelectElement, ISelectProps>((props, ref) => (
  <Select forwardedRef={ref} {...props} />
));
