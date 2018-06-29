import React, { PureComponent } from 'react';
import { PageTemplate } from '../../containers/PageTemplate';
import { About } from '../../components/About';

/* eslint-disable react/prefer-stateless-function */
export default class AboutPage extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <About />
      </PageTemplate>
    );
  }
}
