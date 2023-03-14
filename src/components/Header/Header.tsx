import './Header.css';
import React from 'react';
import Heading from '../Heading/Heading';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__container container">
          <Heading />
          <Logo />
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header;
