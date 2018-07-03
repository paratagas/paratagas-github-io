import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';

export const Contact = () => (
  <div id="parent">
    <div id="child">
      <div className="card" style={{width: "18rem"}}>
        <img className="card-img-top" src="http://i.imgur.com/pydCOEx.jpg" alt="Evgeni Sviridenko" />
          <div className="card-body">
            <h5 className="card-title">Evgeni Sviridenko</h5>
            <a href="mailto:paratagas@gmail.com" className="btn btn-primary">Send email</a>
          </div>
      </div>
    </div>
  </div>
);
