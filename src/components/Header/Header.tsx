import './Header.css';
import React from 'react';
import Heading from '../Heading/Heading';
import Logo from '../Logo/Logo';
import Menu from '../Menu/Menu';
import { IWithRouterProps } from '../../hoc/IWithRouterProps';
import withRouter from '../../hoc/withRouter';
import getPageName from '../../utils/getPageName';

class Header extends React.Component<IWithRouterProps> {
  render() {
    const pageName = getPageName(this.props.location.pathname);

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
}

export default withRouter(Header);
