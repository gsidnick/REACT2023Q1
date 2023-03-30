import './Content.css';
import React from 'react';
import { IContentProps } from '../../interfaces/IContentProps';

function Content({ ...props }: IContentProps) {
  return (
    <main className="content">
      <div className="content__container container">{props.children}</div>
    </main>
  );
}

export default Content;
