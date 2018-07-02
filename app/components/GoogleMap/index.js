import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import { GOOGLE_MAPS_KEY } from '../../config/api';
import {
  GOOGLE_MAPS_WIDTH,
  GOOGLE_MAPS_DEFAULT_ZOOM,
  GOOGLE_MAPS_DEFAULT_CENTER,
} from './constants';
import Country from '../Country';

/* eslint-disable react/prefer-stateless-function */
export default class GoogleMap extends PureComponent {
  constructor(props) {
    super(props);
    this.navPanelHeight = 38;
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
  render() {
    const mapHeight = document.documentElement.clientHeight - this.navPanelHeight;
    const { countries } = this.props;
    // console.log('countries');
    // console.log(countries);
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
          {countries.map((country, index) =>
            <Country
              key={index}
              lat={country.latlng[0]}
              lng={country.latlng[1]}
              country={country}
            />
          )}
        </GoogleMapReact>
      </div>
    );
  }
}

GoogleMap.propTypes = {
  countries: PropTypes.array,
};
