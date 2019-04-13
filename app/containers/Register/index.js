/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnimateField } from '../../components/ChiliForm';
import './style.scss';

class Register extends Component {
  render() {
    return (
      <div>
        <form onSubmit={this.onHandleLogin} className="loginForm">
          <AnimateField
            className="col-12"
            placeholder=" "
            name="username"
            type="text"
            onClick=""
            label="نام و نام خانوادگی"
            icon="chilivery-user"
          />
          <AnimateField
            className="col-12"
            placeholder=" "
            name="mobileNumber"
            type="text"
            onClick=""
            label="موبایل"
            icon="chilivery-mobile"
            validation={['شماره موبایل اشتباه است.']}
          />
          <AnimateField
            className="col-12"
            placeholder=" "
            name="email"
            type="text"
            onClick=""
            label="ایمیل"
            icon="chilivery-email"
            validation={['ایمیل اشتباه است.']}
          />
          <AnimateField
            className="col-12"
            placeholder=" "
            name="password"
            type="text"
            onClick=""
            label="رمزعبور"
            icon="chilivery-pass"
          />
          <div className="text-center mt-4">
            <span className="ruleAndCondition midText">
              با کلیک بر روی دکمه ثبت نام شما
              <span className="ruleAndCondition__link">
                {'\u00A0'}
                قوانین چیلیوری
                {'\u00A0'}
              </span>
              را پذیرفته اید
            </span>
          </div>
          <div className="topM40 wFull hP20 center">
            <button className="btn btn-auth btn-success">ثبت نام</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = response => ({ response });

export default connect(mapStateToProps)(Register);
