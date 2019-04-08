/* eslint-disable react/button-has-type */
import React from 'react';
import Login from '../Login';
import Register from '../Register';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class Authentication extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }

  emailVisibie() {
    this.setState({
      isLogin: true,
    });
  }

  registerVisible() {
    this.setState({
      isLogin: false,
    });
  }

  render() {
    return (
      <div className="authentication__page">
        <div className="authentication__shadow1" />
        <div className="authentication__shadow2" />
        <div className="authentication">
          <div className="rainbow" />
          <div className="header">
            <button
              className="header__box header__rbox"
              onClick={this.emailVisibie.bind(this)}
            >
              ورود به حساب کاربری
            </button>
            <button
              className="header__box header__lbox"
              onClick={this.registerVisible.bind(this)}
            >
              ثبت نام در چیلیوری
            </button>
          </div>
          {!this.state.isLogin && <Register />}
          {this.state.isLogin && <Login />}
        </div>
      </div>
    );
  }
}
//https://open.spotify.com/track/6kj64o29a20BTWHxyFOLkZ?context=spotify%3Auser%3Aspotify%3Aplaylist%3A37i9dQZF1DWSlskcBvOTt0&si=yMTEUt2DQTC4hoE48wQodQ