import React from 'react';
import './style.scss';
import Food from '../../images/test/food.jpg';
import IncrementDecrease from '../IncrementDecrease';

/* eslint-disable react/prefer-stateless-function */
const divStyle = {
  backgroundImage: `url(${Food})`,
};

class CheckoutCardItem extends React.PureComponent {
  render() {
    return (
      <div className="checkout-carditem">
        <div className="checkout-carditem__rbox" style={divStyle}>
          {/*<img src={Food} alt="" />*/}
        </div>
        <div className="checkout-carditem__lbox">
          <h2>برگر زغالی</h2>
          <span className="number">۲ × ۱۸۵۰۰</span>
          <span className="price">۳۷/۰۰۰ تومان</span>
          <div className="counter">
            <IncrementDecrease />
          </div>
        </div>
      </div>
    );
  }
}

CheckoutCardItem.propTypes = {};

export default CheckoutCardItem;
