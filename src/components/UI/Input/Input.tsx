import './Input.css';
import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <div className="input">
        <div className="input__icon input__icon_search">
          <input className="input__field" type="text" placeholder="Search" />
        </div>
      </div>
    );
  }
}

export default Input;
