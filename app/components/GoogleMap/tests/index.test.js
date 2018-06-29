import React from 'react';
import GoogleMapReact from 'google-map-react';
import { shallow } from 'enzyme';

import GoogleMap from '../index';

import { GOOGLE_MAPS_KEY } from '../../../config/api';

import {
  GOOGLE_MAPS_DEFAULT_ZOOM,
  GOOGLE_MAPS_DEFAULT_CENTER,
} from '../constants';

describe('<GoogleMap />', () => {
  it('should render the GoogleMapReact component', () => {
    const renderedComponent = shallow(<GoogleMap />);
    /* eslint-disable */
    expect(
      renderedComponent.contains(
        <GoogleMapReact
          defaultCenter={GOOGLE_MAPS_DEFAULT_CENTER}
          defaultZoom={GOOGLE_MAPS_DEFAULT_ZOOM}
          bootstrapURLKeys={{ key: GOOGLE_MAPS_KEY }}
        />
      )
    ).toEqual(true);
    /* eslint-enable */
  });
});
