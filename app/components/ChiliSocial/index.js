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
  constructor(props) {
    super(props);
  }

  googleLogin() {
    const dualScreenLeft =
      window.screenLeft != undefined ? window.screenLeft : screen.left;
    const dualScreenTop =
      window.screenTop != undefined ? window.screenTop : screen.top;
    const dualWidth = window.innerWidth
      ? window.innerWidth
      : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
    const dualHeight = window.innerHeight
      ? window.innerHeight
      : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

    // calculate position of popup window and set parameters.
    const width = 500;

    const height = 500;

    let left = dualWidth / 2 - width / 2 + dualScreenLeft;

    let top = dualHeight / 2 - height / 2 + dualScreenTop;

    let title = 'Social Authentication';

    const url = `${window.location.origin  }/auth/`;

    const features = `toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=${width}, height=${height}, top=${top}, left=${left}`;    
    newwindow = window.open(url + "google?referrer=" + JSON.stringify(window.location.referrer), title, features);
    if (window.focus) {
        newwindow.focus()
    }

    return false;    
  }

  render() {
    return (
      <div className="social">
        <div className="social__orBtn">یا</div>
        <button className="social__google" onClick={this.googleLogin}>
          <span className="chilivery-google-plus social__icons d-inline-block">
            {' '}
          </span>
          <span className="d-inline-block">ورود با گوگل</span>
        </button>
        <button className="social__yahoo">
          <span className="chilivery-chilivery-logo social__icons d-inline-block">
            {' '}
          </span>
          <span className="d-inline-block ">ورود با یاهو</span>
        </button>
      </div>
    );
  }
}

export default ChiliSocial;
