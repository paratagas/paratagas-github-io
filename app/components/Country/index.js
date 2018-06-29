import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/prefer-stateless-function */
export default class Country extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { text } = this.props;
    return (
      <h3> { text } </h3>
    );
  };
}

Country.propTypes = {
  text: PropTypes.string,
};
