import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { compose } from 'redux';
import { FormattedMessage } from 'react-intl';
import InfoCircle from 'react-icons/lib/fa/info-circle';
import WeatherPartlySunny from 'react-icons/lib/ti/weather-partly-sunny';
import messages from './messages';
// import injectReducer from '../../utils/injectReducer';
// import countryReducer from './reducer';
/* import {
  showCountryBaseInfo,
  showCountryMainInfo,
  showCountryWeather,
} from './actions'; */
import './index.scss';
import { cutNameBrackets } from '../../utils/country';

/* eslint-disable react/prefer-stateless-function */
export default class Country extends PureComponent {
  showCountryBaseInfo = (e) => {
    const { country } = this.props;
    console.log('showCountryBaseInfo');
    this.props.showCountryBaseInfo(true, country);
  };
  showCountryMainInfo = (e) => {
    const { country } = this.props;
    console.log('showCountryMainInfo');
    this.props.showCountryMainInfo(true, country);
  };
  showCountryWeather = (e) => {
    const { country } = this.props;
    console.log('showCountryWeather');
    this.props.showCountryWeather(true, country);
  };
  render() {
    const { country } = this.props;
    return (
      <div className="btn-group" role="group" aria-label="Coutry controls">
        <button
          type="button"
          className="btn btn-dark country-title"
          onClick={this.showCountryBaseInfo}
        >
          {cutNameBrackets(country.name)}
        </button>
        <button
          type="button"
          className="btn btn-primary country-info"
          onClick={this.showCountryMainInfo}
        >
          <InfoCircle size={20} />
        </button>
        <button
          type="button"
          className="btn btn-info country-weather"
          onClick={this.showCountryWeather}
        >
          <WeatherPartlySunny size={20} />
        </button>
      </div>
    );
  }
}

Country.propTypes = {
  country: PropTypes.object,
  showCountryBaseInfo: PropTypes.func,
  showCountryMainInfo: PropTypes.func,
  showCountryWeather: PropTypes.func,
};

Country.defaultProps = {
  country: {},
  showCountryBaseInfo: f => f,
  showCountryMainInfo: f => f,
  showCountryWeather: f => f,
};

/* function mapDispatchToProps(dispatch) {
  return {
    showCountryBaseInfo: (flag) => dispatch(showCountryBaseInfo(flag)),
    showCountryMainInfo: (flag) => dispatch(showCountryMainInfo(flag)),
    showCountryWeather: (flag) => dispatch(showCountryWeather(flag)),
    dispatch,
  };
} */

/* const withConnect = connect(null, mapDispatchToProps);
const withReducer = injectReducer({ key: 'countryState', reducer: countryReducer });

export default compose(
  withReducer,
  withConnect,
)(Country); */
