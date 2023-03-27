import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { IWithRouterProps } from '../../hoc/IWithRouterProps';
import withRouter from '../../hoc/withRouter';
import { isActivePage } from '../../utils/page';

class Menu extends React.Component<IWithRouterProps> {
  render() {
    const pathname = this.props.location.pathname;
    return (
      <ul className="menu">
        <li className="menu__item">
          <Link
            className={isActivePage('/', pathname) ? 'menu__link menu__link_active' : 'menu__link'}
            to="/"
          >
            Pizza
          </Link>
        </li>
        <li className="menu__item">
          <Link
            className={
              isActivePage('/control', pathname) ? 'menu__link menu__link_active' : 'menu__link'
            }
            to="/control"
          >
            Control
          </Link>
        </li>
        <li className="menu__item">
          <Link
            className={
              isActivePage('/about', pathname) ? 'menu__link menu__link_active' : 'menu__link'
            }
            to="/about"
          >
            About Us
          </Link>
        </li>
      </ul>
    );
  }
}

export default withRouter(Menu);
