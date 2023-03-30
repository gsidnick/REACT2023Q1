import './Menu.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <ul className="menu">
      <li className="menu__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'menu__link menu__link_active' : 'menu__link')}
          to="/"
        >
          Pizza
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'menu__link menu__link_active' : 'menu__link')}
          to="/control"
        >
          Control
        </NavLink>
      </li>
      <li className="menu__item">
        <NavLink
          className={({ isActive }) => (isActive ? 'menu__link menu__link_active' : 'menu__link')}
          to="/about"
        >
          About Us
        </NavLink>
      </li>
    </ul>
  );
}

export default Menu;
