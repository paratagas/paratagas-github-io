/* eslint-disable linebreak-style */
/*
 *
 * HomePage actions
 *
 */
import { SAVE_COUNTRIES_TO_STORE } from './constants';

export function saveCountriesToStore(countries) {
  return {
    type: SAVE_COUNTRIES_TO_STORE,
    countries,
  };
}
