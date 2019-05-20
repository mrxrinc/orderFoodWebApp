/* eslint-disable react/button-has-type */
import React from 'react';
import ChiliRainbow from '../../components/ChiliRainbow';
import { AnimateField } from '../../components/ChiliForm';
import './style.scss';
import rememberPassword from '../../images/icons/remember_password.png';
import NavigationBar from '../../components/NavigationBar';
/* eslint-disable react/prefer-stateless-function */
export default class ForgotPassword extends React.Component {
  render() {    

    return (
      <React.Fragment>        
        <ChiliRainbow title="بازیابی رمزعبور">
          <div className="forgot forgot__imgWrapper">
            <img
              src={rememberPassword}
              className="forgot__imgWrapper-img"
              alt="chilivery"
            />
          </div>
          <h4 className="forgot forgot__content bigText">
            رمز عبور خود را فراموش کرده‌اید؟
          </h4>
          <p className="forgot forgot__content midText text-center">
            جهت بازیابی رمز عبور ، ایمیل یا شماره موبایل خود را وارد نمایید:
          </p>
          <form className="forgot__form">
            <AnimateField
              className="col-12"
              placeholder=" "
              name="username"
              type="text"
              onClick=""
              label="ایمیل یا شماره موبایل"
              icon="chilivery-forget-pass-2"
            />
            <div className="forgot forgot__btn">
              <button className="btn btn-success" onClick="onSubmit">ارسال</button>
              <button className="btn btn-white" onClick>انصراف</button>
            </div>
          </form>
        </ChiliRainbow>
      </React.Fragment>
    );
  }
}
