import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import GoogleMap from '../../../components/GoogleMap';

describe('<HomePage />', () => {
  it('should render the GoogleMap component', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<GoogleMap />)).toEqual(true);
  });
});
