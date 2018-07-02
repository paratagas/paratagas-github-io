import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
export default class Country extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { country } = this.props;
    return (
      <div className="country-item">
        <ul className="list-group">
          <li className="list-group-item active">{ country.name }</li>
          <li className="list-group-item list-group-item-info">
            <FormattedMessage {...messages.population} />
            <br />
            { country.population }
          </li>
        </ul>
      </div>
    );
  };
}

Country.propTypes = {
  country: PropTypes.object,
};
