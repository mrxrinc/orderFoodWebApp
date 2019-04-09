import React from 'react';
import './style.scss';
import Food from '../../images/test/food.jpg';
import IncrementDecrease from '../IncrementDecrease';

/* eslint-disable react/prefer-stateless-function */
const divStyle = {
  backgroundImage: `url(${Food})`,
};

class AfterPaymentCardItem extends React.PureComponent {
  render() {
    return (
      <div>
        <div className="afterpayment-carditem">
          <div className="afterpayment-carditem__rbox" style={divStyle}>
            {/*<img src={Food} alt="" />*/}
          </div>
          <div className="afterpayment-carditem__lbox">
            <h2>برگر زغالی</h2>
            <ul>
              <li>سالاد کلم (رایگان)</li>
              <li>سیب زمینی (۱/۵۰۰ تومان)</li>
            </ul>
            <span className="number">۲ × ۱۸۵۰۰</span>
            <span className="price">۳۷/۰۰۰ تومان</span>
          </div>
        </div>
        <div className="afterpayment-carditem">
          <div className="afterpayment-carditem__rbox" style={divStyle}>
            {/*<img src={Food} alt="" />*/}
          </div>
          <div className="afterpayment-carditem__lbox">
            <h2>برگر زغالی</h2>
            <span className="number">۲ × ۱۸۵۰۰</span>
            <span className="price">۳۷/۰۰۰ تومان</span>
          </div>
        </div>
      </div>
    );
  }
}

AfterPaymentCardItem.propTypes = {};

export default AfterPaymentCardItem;
