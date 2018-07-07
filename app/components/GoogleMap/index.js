import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import GoogleMapReact from 'google-map-react';
import $ from 'jquery';
import {
  makeSelectActiveElements,
} from './selectors';
import { GOOGLE_MAPS_KEY } from '../../config/api';
import {
  GOOGLE_MAPS_WIDTH,
  GOOGLE_MAPS_DEFAULT_ZOOM,
  GOOGLE_MAPS_DEFAULT_CENTER,
} from './constants';
import Country from '../Country';
import CountryBaseInfo from '../CountryBaseInfo';
import CountryMainInfo from '../CountryMainInfo';
import CountryWeather from '../CountryWeather';

/* eslint-disable react/prefer-stateless-function */
class GoogleMap extends PureComponent {
  constructor(props) {
    super(props);
    this.navPanelHeight = 38;
    this.state = {
      isShownCountryBaseInfo: false,
      isShownCountryMainInfo: false,
      isShownCountryWeather: false,
      latlng: {},
    };
  }
  componentDidMount() {
    const navPanelHeight =
      document.getElementById('nav-container') &&
      document.getElementById('nav-container').scrollHeight;
    if (this.navPanelHeight !== navPanelHeight) {
      this.navPanelHeight = navPanelHeight;
      this.forceUpdate();
    }
  }
  showCountryBaseInfo = (flag, country) => {
    this.setState({ isShownCountryBaseInfo: flag, countryData: country });
  };
  showCountryMainInfo = (flag, country) => {
    this.setState({ isShownCountryMainInfo: flag, countryData: country });
  };
  showCountryWeather = (flag, country) => {
    this.setState({ isShownCountryWeather: flag, countryData: country });
  };
  render() {
    const mapHeight = document.documentElement.clientHeight - this.navPanelHeight;
    const { countries, countryState } = this.props;
    const { isShownCountryBaseInfo, isShownCountryMainInfo, isShownCountryWeather, countryData } = this.state;
    // console.log('countries');
    // console.log(countries);
    // console.log('countryState');
    // console.log(countryState);
    return (
      <div
        id="map-container"
        style={{ width: GOOGLE_MAPS_WIDTH, height: mapHeight }}
      >
        <GoogleMapReact
          defaultCenter={GOOGLE_MAPS_DEFAULT_CENTER}
          defaultZoom={GOOGLE_MAPS_DEFAULT_ZOOM}
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
        >
          {countries && countries.map((country, index) =>
            country.latlng[0] &&
            country.latlng[1] &&
            <Country
              key={index}
              lat={country.latlng[0]}
              lng={country.latlng[1]}
              country={country}
              showCountryBaseInfo={this.showCountryBaseInfo}
              showCountryMainInfo={this.showCountryMainInfo}
              showCountryWeather={this.showCountryWeather}
            />
          )}
          {
            isShownCountryBaseInfo &&
            <CountryBaseInfo
              lat={countryData.latlng[0] - 0.55}
              lng={countryData.latlng[1]}
              country={countryData}
            />
          }
          {
            isShownCountryMainInfo &&
            <CountryMainInfo
              lat={countryData.latlng[0] - 0.55}
              lng={countryData.latlng[1]}
              country={countryData}
            />
          }
          {
            isShownCountryWeather &&
            <CountryWeather
              lat={countryData.latlng[0] - 0.55}
              lng={countryData.latlng[1]}
              country={countryData}
            />
          }
        </GoogleMapReact>
      </div>
    );
  }
}

GoogleMap.propTypes = {
  countries: PropTypes.array,
  countryState: PropTypes.object,
};

GoogleMap.defaultProps = {
  countries: [],
  countryState: {
    isShownCountryBaseInfo: false,
    isShownCountryMainInfo: false,
    isShownCountryWeather: false,
  },
};

/* const mapStateToProps = createStructuredSelector({
  isShownCountryBaseInfo: getCountryMainInfo(),
}); */

function mapStateToProps (state) {
  return {
    countryState: state.countryState,
};
}

const withConnect = connect(mapStateToProps);

export default compose(
  withConnect,
)(GoogleMap);
