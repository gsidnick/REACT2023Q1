import './Header.css';
import React from 'react';
import Heading from '../Heading/Heading';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import { getPageName } from '../../utils/page';
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const pageName = getPageName(location.pathname);

  return (
    <header className="header">
      <div className="header__container container">
        <Logo />
        <Heading title={pageName} />
        <Menu />
      </div>
    </header>
  );
}

export default Header;
