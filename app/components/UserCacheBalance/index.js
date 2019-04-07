import React from 'react';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { CheckBox } from '../../components/ChiliForm';


class UserCacheBalance extends React.PureComponent {

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="UserCacheBalance">
        <div className="UserCacheBalance-checkbox">
          <CheckBox
            className="required-chechbox checked"
            type="checkbox"
            name="signUpRule"
            onChange={this.onChange}
            defaultValue={1}
            defaultChecked="checked"
            // inputClassName="styled"
            labelClassName="page-payment__rule"
          />
        </div>
        <div className="UserCacheBalance__details">
          <span>پرداخت از طریق موجودی حساب</span>
          <p>موجودی شما: ۱۵۰/۰۰۰ تومان</p>
          <span>موجودی شما برای پرداخت هزینه این سفارش کافی است.</span>
        </div>
      </div>
    );
  }
}

UserCacheBalance.propTypes = {};

export default UserCacheBalance;
