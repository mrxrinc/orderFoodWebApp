import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectCheckout from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.scss';

import CheckoutCardItem from '../../components/CheckoutCardItem';

/* eslint-disable react/prefer-stateless-function */
export class Checkout extends React.PureComponent {
  render() {
    return (
      <div className="checkout">
        <CheckoutCardItem />
        <CheckoutCardItem />
        <CheckoutCardItem />
        <CheckoutCardItem />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  checkout: makeSelectCheckout(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'checkout', reducer });
const withSaga = injectSaga({ key: 'checkout', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Checkout);
