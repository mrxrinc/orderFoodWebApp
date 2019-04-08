import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the afterPayment state domain
 */

const selectAfterPaymentDomain = state =>
  state.get('afterPayment', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by AfterPayment
 */

const makeSelectAfterPayment = () =>
  createSelector(selectAfterPaymentDomain, substate => substate.toJS());

export default makeSelectAfterPayment;
export { selectAfterPaymentDomain };
