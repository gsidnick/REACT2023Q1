import './Card.css';
import React from 'react';
import Button from '../UI/Button/Button';
import ICardProps from '../../interfaces/ICardProps';

class Card extends React.Component<ICardProps> {
  constructor(props: ICardProps) {
    super(props);
  }
  render() {
    const { image, name, price, description } = this.props.value;
    return (
      <div className="card">
        <img className="card__image" src={`../${image}`} alt={name}></img>
        <h3 className="card__title">{name}</h3>
        <span className="card__price">${price}</span>
        <span className="card__description">{description}</span>
        <Button className="card__button">Add to cart</Button>
      </div>
    );
  }
}

export default Card;
