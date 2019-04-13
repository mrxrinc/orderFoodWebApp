/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { getUser } from '../../actions/Auth';
import { setCookie } from '../../utils/cookies';
import { AnimateField } from '../../components/ChiliForm';
import ChiliSocial from '../../components/ChiliSocial';
import './style.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: '',
      loginPass: '',
    };
    // this.loginSubmit = this.loginSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.onHandleLogin(e);
    }
  };

  onHandleLogin = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const data = {
      email,
      password,
    };

    this.props.dispatch(getUser(data));
  };

  componentDidMount() {
    axios
      .post(
        'https://chilivery.net/mobile-api/v2/user/login',
        {
          username: 'm.bazvand@netbarg.com',
          password: '999999',
        },
        {
          headers: {
            // 'Access-Control-Allow-Origin': '*',
            token: 'A8A8FFD0-FF3E-4A20-847C-28CA5CE8A652',
            'Content-Type': 'application/json',
          },
        },
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

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
            name="password"
            type="text"
            onClick=""
            label="رمزعبور"
            icon="chilivery-pass"
          />
          <div className="text-center mt-4">
            <span className="forgotPassword">
              {' '}
              رمز عبور خود را فراموش کرده اید؟
            </span>
          </div>

          <div className="topM40 wFull hP20 center">
            <button className="btn btn-auth btn-success">ورود</button>
          </div>
        </form>
        {/* <ChiliSocial /> */}
      </div>
    );
  }
}

const mapStateToProps = response => ({ response });

export default connect(mapStateToProps)(Login);
