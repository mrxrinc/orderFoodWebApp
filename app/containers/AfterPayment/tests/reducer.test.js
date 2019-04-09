import { fromJS } from 'immutable';
import afterPaymentReducer from '../reducer';

describe('afterPaymentReducer', () => {
  it('returns the initial state', () => {
    expect(afterPaymentReducer(undefined, {})).toEqual(fromJS({}));
  });
});
