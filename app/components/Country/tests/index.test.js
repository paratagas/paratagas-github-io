import React from 'react';
import { shallow } from 'enzyme';

import Country from '../index';

describe('<Country />', () => {
  it('should render the h3 component', () => {
    const renderedComponent = shallow(<Country />);
    expect(renderedComponent.find('h3').length).not.toBe(0);
  });
});
