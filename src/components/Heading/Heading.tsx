import './Heading.css';
import React from 'react';
import { IHeadingProps } from '../../interfaces/IHeadingProps';

function Heading({ ...props }: IHeadingProps) {
  return <h1 className="heading">{props.title}</h1>;
}

export default Heading;
