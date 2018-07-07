import { createSelector } from 'reselect';

/**
 * Direct selector to the languageToggle state domain
 */
const countryState = (state) => state.get('countryState');

/**
 * Select the language locale
 */

const getCountryMainInfo = () => createSelector(
  countryState,
  (state) => state.get('isShownCountryMainInfo')
);

export {
  countryState,
  getCountryMainInfo,
};
