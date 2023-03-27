import './Logo.css';
import React from 'react';

class Logo extends React.Component {
  render() {
    return (
      <div className="logo">
        <img className="logo__image" src="../logo-60x60.png" alt="Pizza's Cafe" />
      </div>
    );
  }
}

export default Logo;
