import './Catalog.css';
import React from 'react';
import Input from '../UI/Input/Input';
import List from '../List/List';

class Catalog extends React.Component {
  render() {
    return (
      <div className="catalog">
        <div className="catalog__search">
          <Input />
        </div>
        <div className="catalog__products">
          <List />
        </div>
      </div>
    );
  }
}

export default Catalog;
