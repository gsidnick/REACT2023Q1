import './NotFound.css';
import React from 'react';

class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Page Not Found</h2>
        <span className="not-found__message">
          <p>We didn’t find this page.</p>
          <p>But we know where to find a lot of delicious things.</p>
        </span>
      </div>
    );
  }
}

export default NotFound;
