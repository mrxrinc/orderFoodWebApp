import React from 'react';
import './style.scss';
import { Button } from 'reactstrap';

import CheckoutCardItem from '../../components/CheckoutCardItem';
import { AnimateField } from '../../components/ChiliForm';
import GiftCode from '../../components/GiftCode';
import UserCacheBalance from '../../components/UserCacheBalance';
import MyAddress from '../../components/MyAddress';
import StickyPrice from '../../components/StickyPrice';

/* eslint-disable react/prefer-stateless-function */
export class Checkout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {description} = this.state;
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
        <div className="address">
          <h4>آدرس های ذخیره شده</h4>
          <p>تمامی آدرس های ذخیره شده شما خارح از محدوده رستوران است. برای ادامه آدرس جدید در محدوده رستوران ثبت نمایید:</p>
          <MyAddress />
        </div>
        <div className="description">
          <AnimateField
            placeholder=" "
            icon="chilivery-speech"
            name="signUpPhone"
            type="text"
            onClick=""
            label="توضیحات و موارد بیشتر در مورد این سفارش"
            value={description}
            onChange={this.onChange}
            onKeyPress={this.handleKeyPressUpdate}
          />
        </div>

        <GiftCode />
        <UserCacheBalance />
        <StickyPrice />
      </div>
    );
  }
}

export default Checkout;
