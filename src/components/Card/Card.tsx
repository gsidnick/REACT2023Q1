import './Card.css';
import React from 'react';
import Button from '../UI/Button/Button';

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <img
          className="card__image"
          src="../fb9cc5b8ff2e47bdbcbdcb5930cddf06_292x292.webp"
          alt="Pepperoni"
        ></img>
        <h3 className="card__title">Pepperoni</h3>
        <span className="card__price">$8.49</span>
        <span className="card__description">
          Spicy Pepperoni, Extra Mozzarella, Signature Tomato Sauce
        </span>
        <div className="card__button">
          <Button />
        </div>
      </div>
    );
  }
}

export default Card;
