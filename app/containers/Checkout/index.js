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
        <div className="checkout__card-item">
          <CheckoutCardItem />
          <CheckoutCardItem />
          <CheckoutCardItem />
          <CheckoutCardItem />
        </div>
        <div className="food-delivery">
          <div className="food-delivery__rbox">
            <span>تحویل غذا </span>
            <span className="cost-sending">(هزینه ارسال: 0 تومان)</span>
          </div>
          <div className="food-delivery__lbox">
            <div className="tab-box">
              <a href="#!">ارسال به من</a>
              <a href="#!" className="active">در محل رستوران</a>
            </div>
          </div>
          <div className="clearfix"></div>
        </div>
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
