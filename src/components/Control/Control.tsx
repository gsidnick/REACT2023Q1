import './Control.css';
import React from 'react';
import Form from '../Form/Form';
import { IRequest } from '../../interfaces/IRequest';
import Request from '../Request/Request';

class Control extends React.Component<object, { requests: IRequest[] }> {
  constructor(props: object) {
    super(props);
    this.state = { requests: [] as IRequest[] };
    this.setRequests = this.setRequests.bind(this);
  }

  setRequests(data: IRequest) {
    const requests = this.state.requests;
    requests.push(data);
    this.setState({ requests });
  }

  render() {
    return (
      <div className="control">
        <div className="control__col control__questions">
          <div className="control__info">
            <h2 className="control__title">How About a Free Pizza?</h2>
            <p className="control__text">
              Mystery shoppers and inspectors are our agency network that helps to find violations
              in Pizza’s Cafe pizzerias.
              <br />
              Fill out the questionnaire:
            </p>
          </div>
          <Form setRequests={this.setRequests} />
        </div>
        <div className="control__col control__requests">
          <h2 className="control__title">Your Requests</h2>
          <div className="control__list">
            {this.state.requests.map((item, index) => (
              <Request key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Control;
