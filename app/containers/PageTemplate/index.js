import React from 'react';
import PropTypes from 'prop-types';
import MainMenu from '../../components/MainMenu';

export const PageTemplate = ({ children }) => (
  <div className="page">
    <MainMenu />
    {children}
  </div>
);

PageTemplate.propTypes = {
  children: PropTypes.object,
};
