import React from 'react';
import { shallow } from 'enzyme';

import { PageTemplate } from '../index';
import MainMenu from '../../../components/MainMenu';

describe('<PageTemplate />', () => {
  it('should render the About component', () => {
    const renderedComponent = shallow(<PageTemplate />);
    expect(renderedComponent.contains(<MainMenu />)).toEqual(true);
  });
});
