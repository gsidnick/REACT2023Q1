import './Content.css';
import React from 'react';
import Catalog from '../Catalog/Catalog';

class Content extends React.Component {
  render() {
    return (
      <main className="content">
        <div className="content__container container">
          <Catalog />
        </div>
      </main>
    );
  }
}

export default Content;
