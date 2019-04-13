/* eslint-disable react/button-has-type */
import React from 'react';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class ChiliRainbow extends React.Component {
  render() {
    return (
      <div className="whFull absolute authBg ">
        <div className="authentication__page">
          <div className="authentication__shadow1" />
          <div className="authentication__shadow2" />
          <div className="authentication">
            <div className="rainbow" />
            <div className="header">
              <button
                className="header__box header__rbox"
                // onClick={this.emailVisibie.bind(this)}
              >
                ورود به حساب کاربری
              </button>
              <button
                className="header__box header__lbox"
                // onClick={this.registerVisible.bind(this)}
              >
                ثبت نام در چیلیوری
              </button>
            </div>
            { this.props.children }
          </div>
        </div>
      </div>
    );
  }
}

export default ChiliRainbow;
