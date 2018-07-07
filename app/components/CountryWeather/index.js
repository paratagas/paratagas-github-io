import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './index.scss';

/* eslint-disable react/prefer-stateless-function */
export default class CountryWeather extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { country } = this.props;
    console.log('=====', country);
    return (
      <div className="card bg-secondary border-light card-info" style={{ width: '30rem', height: '30rem' }}>
        <div className="card-body">
          <h5 className="card-title">CountryWeather</h5>
          <h6 className="card-subtitle mb-2 text-muted">CountryWeather</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Card link</a>
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    );
  }
}

CountryWeather.propTypes = {
  country: PropTypes.object,
};
