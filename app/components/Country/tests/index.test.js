import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Country from '../index';
import messages from '../messages';

describe('<Country />', () => {
  it('should render the div component', () => {
    const testCountry = {
      name: 'test name',
    };
    const renderedComponent = shallow(<Country country={testCountry} />);
    expect(renderedComponent.find('div').length).not.toBe(0);
  });
  it('should render the page message', () => {
    const testCountry = {
      name: 'test name',
    };
    const renderedComponent = shallow(<Country country={testCountry} />);
    /* eslint-disable */
    expect(
      renderedComponent.contains(
        <FormattedMessage {...messages.population} />
      )
    ).toEqual(true);
    /* eslint-enable */
  });
});
