import './List.css';
import React from 'react';
import Card from '../Card/Card';
import { IListProps } from '../../interfaces/IListProps';

class List extends React.Component<IListProps> {
  constructor(props: IListProps) {
    super(props);
  }
  render() {
    return (
      <div className="list">
        {this.props.value.map((product) => (
          <Card key={product.id} value={product} />
        ))}
      </div>
    );
  }
}

export default List;
