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
  render() {
    return (
      <div className="social">
        <div className="social__orBtn">یا</div>
        <div className="social__google">
          <span className="chilivery-google-plus social__icons d-inline-block"> </span>
          <span className="d-inline-block">ورود با گوگل</span>
        </div>
        <div className="social__yahoo">
          <span className="chilivery-chilivery-logo social__icons d-inline-block"> </span>
          <span className="d-inline-block ">ورود با یاهو</span>
        </div>
      </div>
    );
  }
}

export default ChiliSocial;
