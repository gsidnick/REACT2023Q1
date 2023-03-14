import './Menu.css';
import React from 'react';

class Menu extends React.Component {
  render() {
    return (
      <ul className="menu">
        <li className="menu__item">
          <a className="menu__link menu__link_active" href="/">
            Pizza
          </a>
        </li>
        <li className="menu__item">
          <a className="menu__link" href="/about">
            About Us
          </a>
        </li>
      </ul>
    );
  }
}

export default Menu;
