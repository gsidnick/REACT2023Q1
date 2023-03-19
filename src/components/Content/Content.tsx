import './Content.css';
import React from 'react';
import { IContentProps } from '../../interfaces/IContentProps';

class Content extends React.Component<IContentProps, object> {
  constructor(props: IContentProps) {
    super(props);
  }
  render() {
    return (
      <main className="content">
        <div className="content__container container">{this.props?.children}</div>
      </main>
    );
  }
}

export default Content;
