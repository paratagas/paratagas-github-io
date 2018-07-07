import { saveCountriesToStore } from '../actions';
import { SAVE_COUNTRIES_TO_STORE } from '../constants';

describe('HomePage actions', () => {
  it('should create an action to save all countries', () => {
    const countries = [];
    const expectedAction = {
      type: SAVE_COUNTRIES_TO_STORE,
      countries,
    };
    expect(saveCountriesToStore(countries)).toEqual(expectedAction);
  });
});
