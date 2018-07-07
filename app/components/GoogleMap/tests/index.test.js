import React from 'react';
import { shallow } from 'enzyme';
import GoogleMapReact from 'google-map-react';
import GoogleMap from '../index';



describe('<GoogleMap />', () => {
  it('should render the div', () => {
    const renderedComponent = shallow(<GoogleMap />);
    expect(renderedComponent.find('div').getElement()).toBeDefined();
  });
});
