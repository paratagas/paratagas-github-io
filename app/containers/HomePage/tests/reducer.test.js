import { fromJS } from 'immutable';
import homePageReducer from '../reducer';
describe('homePageReducer', () => {
  const initialState = fromJS([]);
  it('should return the initial state', () => {
    expect(homePageReducer(undefined, {})).toEqual(initialState);
  });
});
