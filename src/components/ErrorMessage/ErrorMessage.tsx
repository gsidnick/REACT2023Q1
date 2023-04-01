import './ErrorMessage.css';
import React from 'react';
import IErrorMessageProps from '../../interfaces/IErrorMessageProps';
function ErrorMessage({ ...props }: IErrorMessageProps) {
  return (
    <div className="error">
      <p className="error__message">{props.errorMessage}</p>
    </div>
  );
}

export default ErrorMessage;
