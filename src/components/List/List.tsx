import './List.css';
import React from 'react';
import Card from '../Card/Card';
import { IListProps } from '../../interfaces/IListProps';

function List({ ...props }: IListProps) {
  return (
    <div className="list">
      {props.value.map((product) => (
        <Card key={product.id} value={product} />
      ))}
    </div>
  );
}

export default List;
