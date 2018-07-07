import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
export default class CountryBaseInfo extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { country } = this.props;
    console.log('=====', country);
    return (
      <div className="card color-my-dark border-secondary card-info" style={{ width: '30rem', height: '35rem' }}>
        <div className="card-body">
          <img className="card-img-top" src={country.flag} alt="Card image cap" />
          <hr />
          <h3 className="card-title text-white text-center">{country.name}</h3>
          <h4 className="card-subtitle mb-2 text-white text-center">Native name: {country.nativeName}</h4>
          <h5 className="card-text text-white text-center">Capital: {country.capital}</h5>
          <h6 className="card-text text-white text-center">Region: {country.subregion}</h6>
        </div>
      </div>
    );
  }
}

CountryBaseInfo.propTypes = {
  country: PropTypes.object,
};
