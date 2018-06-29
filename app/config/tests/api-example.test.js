import React from 'react';
import { shallow } from 'enzyme';

import {
  GOOGLE_MAPS_KEY,
  OPEN_WEATHER_KEY,
  OPEN_WEATHER_URL,
  OPEN_WEATHER_ICON_URL,
} from '../api-example';

describe('<Api-example />', () => {
  it('should have GOOGLE_MAPS_KEY', () => {
    const renderedComponent = shallow(<GOOGLE_MAPS_KEY />);
    expect(renderedComponent.length).not.toBe(0);
  });
  it('should have OPEN_WEATHER_KEY', () => {
    const renderedComponent = shallow(<OPEN_WEATHER_KEY />);
    expect(renderedComponent.length).not.toBe(0);
  });
  it('should have OPEN_WEATHER_URL', () => {
    const renderedComponent = shallow(<OPEN_WEATHER_URL />);
    expect(renderedComponent.length).not.toBe(0);
  });
  it('should have OPEN_WEATHER_ICON_URL', () => {
    const renderedComponent = shallow(<OPEN_WEATHER_ICON_URL />);
    expect(renderedComponent.length).not.toBe(0);
  });
});
