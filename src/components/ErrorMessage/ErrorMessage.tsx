import './ErrorMessage.css';
import React from 'react';
import IErrorMessageProps from '../../interfaces/IErrorMessageProps';
class ErrorMessage extends React.Component<IErrorMessageProps> {
  constructor(props: IErrorMessageProps) {
    super(props);
  }

  render() {
    return (
      <div className="error">
        {this.props.errorMessages.map((message, index) => {
          return (
            <p className="error__message" key={index}>
              {message}
            </p>
          );
        })}
      </div>
    );
  }
}

export default ErrorMessage;
