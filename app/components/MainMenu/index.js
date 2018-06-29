import React, { PureComponent } from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from 'react-icons/lib/fa/home';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
export default class MainMenu extends PureComponent {
  render() {
    return (
      <div id="nav-container">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <NavLink className="nav-link" to="/home">
              <HomeIcon size={25} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/about">
              <FormattedMessage {...messages.aboutUrl} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact">
              <FormattedMessage {...messages.contactUrl} />
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
