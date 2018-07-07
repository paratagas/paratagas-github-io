/* eslint-disable linebreak-style */
/*
 *
 * Country actions
 *
 */
import {
  SHOW_COUNTRY_BASE_INFO,
  SHOW_COUNTRY_MAIN_INFO,
  SHOW_COUNTRY_WEATHER,
} from './constants';

export function showCountryBaseInfo(flag) {
  return {
    type: SHOW_COUNTRY_BASE_INFO,
    flag,
  };
}
export function showCountryMainInfo(flag) {
  return {
    type: SHOW_COUNTRY_MAIN_INFO,
    flag,
  };
}
export function showCountryWeather(flag) {
  return {
    type: SHOW_COUNTRY_WEATHER,
    flag,
  };
}
