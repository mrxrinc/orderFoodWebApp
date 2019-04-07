import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the checkout state domain
 */

const selectCheckoutDomain = state => state.get('checkout', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by Checkout
 */

const makeSelectCheckout = () =>
  createSelector(selectCheckoutDomain, substate => substate.toJS());

export default makeSelectCheckout;
export { selectCheckoutDomain };
