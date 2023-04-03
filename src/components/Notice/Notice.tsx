import './Notice.css';
import React from 'react';
import INoticeProps from '../../interfaces/INoticeProps';

function Notice({ ...props }: INoticeProps) {
  return <div className={props.className}>{props.children}</div>;
}

export default Notice;
