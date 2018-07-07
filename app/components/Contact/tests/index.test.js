import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import { Contact } from '../index';
import messages from '../messages';

describe('<Contact />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(<Contact />);
    /* eslint-disable */
    expect(
      renderedComponent.contains(
        <FormattedMessage {...messages.authorName} />
      )
    ).toEqual(true);
    /* eslint-enable */
  });
});
