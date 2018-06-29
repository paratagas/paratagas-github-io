import React from 'react';
import { shallow } from 'enzyme';

import ContactPage from '../index';
import { Contact } from '../../../components/Contact';

describe('<ContactPage />', () => {
  it('should render the About component', () => {
    const renderedComponent = shallow(<ContactPage />);
    expect(renderedComponent.contains(<Contact />)).toEqual(true);
  });
});
