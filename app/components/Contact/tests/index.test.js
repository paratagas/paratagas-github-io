import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import { Contact } from '../index';
import messages from '../messages';

describe('<Contact />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<Contact />);
    /* eslint-disable */
    expect(
      renderedComponent.contains(
        <FormattedMessage {...messages.header} />
      )
    ).toEqual(true);
    /* eslint-enable */
  });
});
