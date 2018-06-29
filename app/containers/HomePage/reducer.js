/* eslint-disable */
/*
 *
 * HomePage reducer
 *
 */

import { fromJS } from 'immutable';
import { SAVE_COUNTRIES_TO_STORE } from './constants';

const initialState = fromJS([]);

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_COUNTRIES_TO_STORE:
          return [
            ...state,
            action.countries
          ];
    default:
      return state;
  }
}

export default homePageReducer;
