import './NotFound.css';
import React from 'react';
import Button from '../UI/Button/Button';
import { IWithRouterProps } from '../../hoc/IWithRouterProps';
import withRouter from '../../hoc/withRouter';

class NotFound extends React.Component<IWithRouterProps> {
  render() {
    const navigate = this.props.navigate;

    return (
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <span className="not-found__message">
          <p>We didn’t find this page.</p>
          <p>But we know where to find a lot of delicious things.</p>
        </span>
        <Button className="not-found__button" onClick={() => navigate('/')}>
          Go to home
        </Button>
      </div>
    );
  }
}

export default withRouter(NotFound);
