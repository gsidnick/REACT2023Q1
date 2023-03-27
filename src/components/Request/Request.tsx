import './Request.css';
import React from 'react';
import { IRequestProps } from '../../interfaces/IRequestProps';

class Request extends React.Component<IRequestProps> {
  constructor(props: IRequestProps) {
    super(props);
  }

  render() {
    const { photo, city, name, birthday, gender, email, check } = this.props.data;
    return (
      <div className="request">
        <img className="request__photo" src={photo} alt="Photo" />
        <div className="request__table">
          <div className="request__row">
            <span className="request__field">City</span>
            <span className="request__value">{city}</span>
          </div>
          <div className="request__row">
            <span className="request__field">Name</span>
            <span className="request__value">{name}</span>
          </div>
          <div className="request__row">
            <span className="request__field">Birthday</span>
            <span className="request__value">{birthday}</span>
          </div>
          <div className="request__row">
            <span className="request__field">Gender</span>
            <span className="request__value">{gender}</span>
          </div>
          <div className="request__row">
            <span className="request__field">Email</span>
            <span className="request__value">{email}</span>
          </div>
          <div className="request__row">
            <span className="request__field">Check</span>
            <span className="request__value">{check}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Request;
