import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu__item">
          <Link className="menu__link menu__link_active" to="/">
            Pizza
          </Link>
        </li>
        <li className="menu__item">
          <Link className="menu__link" to="/about">
            About Us
          </Link>
        </li>
      </ul>
    );
  }
}

export default Menu;
