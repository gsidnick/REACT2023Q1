import './NotFound.css';
import React from 'react';
import Button from '../UI/Button/Button';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <h2 className="not-found__subtitle">Page Not Found</h2>
      <span className="not-found__message">
        <p>We didn’t find this page.</p>
        <p>But we know where to find a lot of delicious things.</p>
      </span>
      <Button type="button" className="not-found__button" onClick={() => navigate('/')}>
        Go to home
      </Button>
    </div>
  );
}

export default NotFound;
