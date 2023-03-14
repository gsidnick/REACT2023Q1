import './List.css';
import React from 'react';
import Card from '../Card/Card';

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default List;
