/* eslint-disable linebreak-style */
import { createSelector } from 'reselect/es';
/*
 *
 * HomePage selectors
 *
 */
/**
 * Direct selector to the HomePage state domain
 */
const selectHomePageDomain = (state) => state.get('countries');

/**
 * Other specific selectors
 */
const getAllCountries = () => {
  return createSelector(
    selectHomePageDomain,
    (state) => state.get('data')
  );
};

export {
  getAllCountries,
};
