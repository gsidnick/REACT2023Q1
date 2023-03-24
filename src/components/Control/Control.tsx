import './Control.css';
import React from 'react';

class Control extends React.Component {
  render() {
    return (
      <div className="control">
        <div className="control__col">
          <div className="control__info">
            <h2 className="control__title">How About a Free Pizza?</h2>
            <p className="control__text">
              Mystery shoppers and inspectors are our agency network that helps to find violations
              in Pizza’s Cafe pizzerias.
              <br />
              Fill out the questionnaire:
            </p>
          </div>
        </div>
        <div className="control__col">
          <h2 className="control__title">Your Requests</h2>
        </div>
      </div>
    );
  }
}

export default Control;
