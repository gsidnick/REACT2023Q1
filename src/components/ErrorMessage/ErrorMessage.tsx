import './ErrorMessage.css';
import React from 'react';
import IErrorMessageProps from '../../interfaces/IErrorMessageProps';
function ErrorMessage({ ...props }: IErrorMessageProps) {
  return (
    <div className="error">
      {props.errorMessages.map((message, index) => {
        return (
          <p className="error__message" key={index}>
            {message}
          </p>
        );
      })}
    </div>
  );
}

export default ErrorMessage;
