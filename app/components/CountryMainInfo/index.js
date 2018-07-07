import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
export default class CountryMainInfo extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { country } = this.props;
    console.log('=====', country);
    return (
      <div className="card bg-primary border-secondary card-info" style={{ width: '30rem', height: '30rem' }}>
        <div className="card-header text-white text-center">
          <h5 className="card-title">{country.name}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Country code: </b>{country.alpha3Code}</li>
          <li className="list-group-item"><b>Area: </b>{country.area} sq.km</li>
          <li className="list-group-item"><b>Population: </b>{country.population}</li>
          <li className="list-group-item"><b>Main language: </b>{country.languages[0].name}</li>
          <li className="list-group-item"><b>Top-level domain: </b>{country.topLevelDomain[0]}</li>
        </ul>
      </div>
    );
  }
}

CountryMainInfo.propTypes = {
  country: PropTypes.object,
};
