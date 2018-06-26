/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import GoogleMapReact from 'google-map-react';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div style={{ width: '100%', height: '600px' }}>
        <GoogleMapReact
          defaultCenter={{ lat: 53.9, lng: 27.57 }}
          defaultZoom={12}
          bootstrapURLKeys={{ key: 'AIzaSyAYQLiTtqvwt-Rew3Pb4Xm6XrV5sGZIg0U' }}
        />
      </div>
    );
    /* return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    ); */
  }
}
