import './Notice.css';
import React from 'react';
import INoticeProps from '../../interfaces/INoticeProps';

class Notice extends React.Component<INoticeProps> {
  constructor(props: INoticeProps) {
    super(props);
  }

  render() {
    return <div className={this.props.className}>{this.props.children}</div>;
  }
}

export default Notice;
