import React from 'react';
import { shallow } from 'enzyme';

import { PageTemplate } from '../../PageTemplate';

describe('<HomePage />', () => {
  it('renders its children', () => {
    const children = 'Test text';
    const renderedComponent = shallow(<PageTemplate>{children}</PageTemplate>);
    expect(renderedComponent.contains(children)).toEqual(true);
  });
});
