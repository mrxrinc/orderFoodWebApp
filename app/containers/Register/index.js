/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AnimateField } from '../../components/ChiliForm';
import ChiliButton from '../../components/ChiliButton';

class Register extends Component {

  render() {

    return (
      <div>
        <form onSubmit={this.onHandleLogin}>
          <AnimateField
            className="col-12"
            placeholder="وارد نمایید"
            name="username"
            type="text"
            onClick=""
            label="نام و نام خانوادگی"
            icon="chilivery-user"
          />
          <AnimateField
            className="col-12"
            placeholder="وارد نمایید"
            name="mobileNumber"
            type="text"
            onClick=""
            label="موبایل"
            icon="chilivery-mobile"
          />
          <AnimateField
            className="col-12"
            placeholder="وارد نمایید"
            name="email"
            type="text"
            onClick=""
            label="ایمیل"
            icon="chilivery-email"
          />
          <AnimateField
            className="col-12"
            placeholder="وارد نمایید"
            name="password"
            type="text"
            onClick=""
            label="رمزعبور"
            icon="chilivery-pass"
          />
          <p>با کلیک بر روی دکمه ثبت نام شما قوانین چیلیوری را ‍پذیرفته اید</p>
          <div className="topM40 wFull hP20 center">
            <ChiliButton type="green" title="ثبت نام" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = response => ({ response });

export default connect(mapStateToProps)(Register);
