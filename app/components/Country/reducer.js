/* eslint-disable */
/*
 *
 * HomePage reducer
 *
 */
import { fromJS } from 'immutable';
import {
  SHOW_COUNTRY_BASE_INFO,
  SHOW_COUNTRY_MAIN_INFO,
  SHOW_COUNTRY_WEATHER,
} from './constants';

/*const initialState = {
  isShownCountryBaseInfo: false,
  isShownCountryMainInfo: false,
  isShownCountryWeather: false,
};*/

const initialState = fromJS({
  isShownCountryBaseInfo: false,
  isShownCountryMainInfo: false,
  isShownCountryWeather: false,
});

function countryReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_COUNTRY_BASE_INFO:
      /*return {
        ...state,
        isShownCountryBaseInfo: action.flag,
      };*/
      return state.set('countryState', {...state, isShownCountryBaseInfo: action.flag});
    case SHOW_COUNTRY_MAIN_INFO:
      /*return {
        ...state,
        isShownCountryMainInfo: action.flag,
      };*/
      return state.set('countryState', {...state, isShownCountryMainInfo: action.flag});
    case SHOW_COUNTRY_WEATHER:
      /*return {
        ...state,
        isShownCountryWeather: action.flag,
      };*/
      return state.set('countryState', {...state, isShownCountryWeather: action.flag});
    default:
      return state;
  }
}

export default countryReducer;
