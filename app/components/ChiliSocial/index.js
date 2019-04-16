/**
 *
 * ChiliSocial
 *
 */

import React from 'react';

import './style.scss';

// import styled from 'styled-components';

/* eslint-disable react/prefer-stateless-function */
class ChiliSocial extends React.Component {
  googleLogin() {
    console.log(1111);
  }
  render() {
    return (
      <div className="social">
        <div className="social__orBtn">یا</div>
        <button className="social__google" onClick={this.googleLogin}>
          <span className="chilivery-google-plus social__icons d-inline-block"> </span>
          <span className="d-inline-block">ورود با گوگل</span>
        </button>
        <button className="social__yahoo">
          <span className="chilivery-chilivery-logo social__icons d-inline-block"> </span>
          <span className="d-inline-block ">ورود با یاهو</span>
        </button>
      </div>
    );
  }
}

export default ChiliSocial;
