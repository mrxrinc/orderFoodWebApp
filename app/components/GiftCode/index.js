import React from 'react';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class GiftCode extends React.PureComponent {
  render() {
    return (
      <div className="giftCode__container">
        <div className="giftCode__container-icon">
          <div className="giftCode__container-icon-cut giftCode__container-icon-cut--1"> </div>
          <div className="giftCode__container-icon-cut giftCode__container-icon-cut--2"> </div>
          <span className="chilivery-forget-pass-1"> </span>
        </div>
        <input type="text" placeholder="کد تخفیف را وارد کنید " />
        <div className="giftCode__container-btn">
          <button type="button" className="btn btn-danger ml-0">
            ثبت
          </button>
        </div>
      </div>
    );
  }
}

GiftCode.propTypes = {};

export default GiftCode;
