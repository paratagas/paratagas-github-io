import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

export const About = () => (
  <h1>
    <FormattedMessage {...messages.header} />
  </h1>
);
