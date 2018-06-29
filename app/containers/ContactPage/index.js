import React, { PureComponent } from 'react';
import { PageTemplate } from '../../containers/PageTemplate';
import { Contact } from '../../components/Contact';

/* eslint-disable react/prefer-stateless-function */
export default class ContactPage extends PureComponent {
  render() {
    return (
      <PageTemplate>
        <Contact />
      </PageTemplate>
    );
  }
}
