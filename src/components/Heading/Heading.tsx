import './Heading.css';
import React from 'react';
import { IHeadingProps } from './IHeadingProps';

class Heading extends React.Component<IHeadingProps> {
  constructor(props: IHeadingProps) {
    super(props);
  }
  render() {
    return <h1 className="heading">{this.props.title}</h1>;
  }
}

export default Heading;
