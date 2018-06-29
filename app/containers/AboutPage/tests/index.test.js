import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../index';
import { About } from '../../../components/About';

describe('<AboutPage />', () => {
  it('should render the About component', () => {
    const renderedComponent = shallow(<AboutPage />);
    expect(renderedComponent.contains(<About />)).toEqual(true);
  });
});
