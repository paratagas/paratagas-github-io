import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { About } from '../index';
import messages from '../messages';

describe('<About />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<About />);
    /* eslint-disable */
    expect(
      renderedComponent.contains(
        <FormattedMessage {...messages.leadText} />
      )
    ).toEqual(true);
    /* eslint-enable */
  });
});
