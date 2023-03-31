import './Control.css';
import React, { useState } from 'react';
import Form from '../Form/Form';
import { IRequest } from '../../interfaces/IRequest';
import Request from '../Request/Request';

function Control() {
  const [requests, setRequests] = useState<IRequest[]>([]);

  function setRequestsHandler(data: IRequest) {
    const tempRequest = [...requests];
    tempRequest.push(data);
    setRequests(tempRequest);
  }

  return (
    <div className="control">
      <div className="control__col control__questions">
        <div className="control__info">
          <h2 className="control__title">How About a Free Pizza?</h2>
          <p className="control__text">
            Mystery shoppers and inspectors are our agency network that helps to find violations in
            Pizza’s Cafe pizzerias.
            <br />
            Fill out the questionnaire:
          </p>
        </div>
        <Form setRequests={setRequestsHandler} />
      </div>
      <div className="control__col control__requests">
        <h2 className="control__title">Your Requests</h2>
        <div className="control__list">
          {requests.map((item, index) => (
            <Request key={index} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Control;
