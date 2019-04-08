/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Kit
 *
 */

import React from 'react';

import ChiliButton from '../../components/ChiliButton';

import { AnimateField, AnimateFieldSheba } from '../../components/ChiliForm';
import Icon from './icon';

/* eslint-disable react/prefer-stateless-function */
export class Kit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: '',
      signUpGender: 'male',
      signUpPhone: '09358537536',
      signUpUserEmail: 'm.rastegar991@gmail.com',
      signUpSheba: '',
      signUpCity: '',
      loginPass: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const buttonElement = {
      title: `مشاهده لیست رستوران ها`,
      small: `small`,
      big: `big`,
      success: `success`,
    };
    // const classes = this.props;
    // const classes = this.props;
    const {
      loginUserName,
      signUpPhone,
      signUpUserEmail,
      signUpSheba,
      signUpGender,
      signUpCity,
      loginPass,
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <Icon />
          </div>
          <div className="col-lg-12">
            <h1>فرم ها</h1>
            <AnimateField
              className="col-12"
              placeholder="وارد نمایید"
              name="loginUserName"
              type="text"
              onClick=""
              label="شماره همراه / آدرس ایمیل"
              value={loginUserName}
              onChange={this.onChange}
              icon="chilivery-user"
              iconColor="blue"
              validation={['شماره موبایل اشتباه است.']}
            />
            <hr />
            <h1>Buttons:</h1>
            <ChiliButton
              title={buttonElement.title}
              size={buttonElement.small}
              type={buttonElement.success}
            />
            <AnimateField
              className="col-12"
              name="loginPass"
              type="password"
              onClick=""
              placeholder="وارد نمایید"
              label="رمز عبور"
              value={loginPass}
              onChange={this.onChange}
              // onKeyPress={this.handleKeyPress}
              // validation={
              //   typeof classes.validation.password === 'undefined'
              //     ? false
              //     : classes.validation.password
              // }
              required
            />

            <div className="chili-animate-field form-group col-sm-6">
              <div>
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="signUpGender"
                      checked={signUpGender === 'male'}
                      onChange={this.onChange}
                      // onKeyPress={this.handleKeyPressUpdate}
                      value="male"
                    />
                    <div className="radio-face" />
                    <i />
                  </div>
                  <span>مرد</span>
                </label>
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="signUpGender"
                      checked={signUpGender === 'female'}
                      onChange={this.onChange}
                      // onKeyPress={this.handleKeyPressUpdate}
                      value="female"
                    />
                    <div className="radio-face" />
                    <i />
                  </div>
                  <span>زن</span>
                </label>
              </div>
              <label> جنسیت </label>
            </div>

            <div className="row banks-row">
              <div className="col-xl-4 col-lg-4 col-sm-4 col-xs-6">
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gateway"
                      value="6"
                    />
                    <div className="radio-face" />
                  </div>
                  <span className="clearfix">
                    سامان
                    <img
                      src="https://payment.iiventures.com/public/img/gateways/newSaman.png"
                      className="pull-left"
                      alt="tik8"
                    />
                  </span>
                </label>
              </div>

              <div className="col-xl-4 col-lg-4 col-sm-4 col-xs-6">
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gateway"
                      value="7"
                    />
                    <div className="radio-face" />
                  </div>
                  <span className="clearfix">
                    پارسیان
                    <img
                      src="https://payment.iiventures.com/public/img/gateways/newParsian.png"
                      className="pull-left"
                      alt="tik8"
                    />
                  </span>
                </label>
              </div>
            </div>

            <AnimateField
              className="col-sm-6"
              placeholder="وارد نمایید"
              name="signUpPhone"
              type="text"
              onClick=""
              label="شماره همراه"
              value={signUpPhone}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
              // validation={
              //   typeof classes.validation.userUpdate.phone_number === "undefined"?
              //   false:classes.validation.userUpdate.phone_number
              // }
              disabled
            />

            <AnimateField
              className="col-sm-6"
              placeholder="وارد نمایید"
              name="signUpUserEmail"
              type="email"
              onClick=""
              label="آدرس ایمیل"
              value={signUpUserEmail}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
              disabled
              // validation={
              //   typeof classes.validation.userUpdate.email === "undefined"?
              //   false:classes.validation.userUpdate.email
              // }
              // required={true}
            />
            <AnimateFieldSheba
              className="col-sm-6"
              name="signUpSheba"
              type="text"
              onClick=""
              placeholder="وارد نمایید"
              label="شماره شبا"
              value={signUpSheba}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
              // validation={
              //   typeof classes.validation.userUpdate.sheba_number === "undefined"?
              //   false:classes.validation.userUpdate.sheba_number
              // }
            />
            {/* <div className={"chili-animate-field form-group col-sm-6" + (typeof classes.validation.userUpdate.city_id === "undefined"?"":" panigale__border_red")}> */}
            <div className="chili-animate-field form-group col-sm-6">
              <div className="select-wrapper">
                <select
                  name="signUpCity"
                  value={signUpCity}
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPressUpdate}
                  id="inputState"
                  className="form-control"
                >
                  <option value="">شهر</option>
                  {/* {cityItem} */}
                </select>
              </div>
              <label>شهر</label>
            </div>

            <div className="chili-page-profile__user-edit-button form-group col-12">
              {/* <button className={!classes.loading.userProfileLoading?"btn btn-danger ml-0":"btn ml-0 btn-loading btn-disable disabled-link"}> */}
              <button type="button" className="btn btn-danger ml-0">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Kit;
