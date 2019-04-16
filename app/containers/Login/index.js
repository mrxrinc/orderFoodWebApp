/* eslint-disabtle react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUser } from '../../actions/Auth';
import { AnimateField } from '../../components/ChiliForm';
import './style.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: '',
      loginPass: '',
    };
    this.loginSubmit = this.loginSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.loginSubmit(e);
    }
  };

  loginSubmit = event => {
    event.preventDefault();
    const { loginUserName, loginPass } = this.state;
    const user = {
      username: loginUserName,
      password: loginPass,
    };
    this.props.onLogin({ user });
  };

  render() {
    const { loginUserName, loginPass } = this.state;
    return (
      <div>
        <form onSubmit={this.loginSubmit} className="loginForm">
          <AnimateField
            className="col-12"
            placeholder=" "
            name="loginUserName"
            value={loginUserName}
            type="text"
            onClick=""
            onChange={this.onChange}
            label="نام و نام خانوادگی"
            onKeyPress={this.handleKeyPress}
            icon="chilivery-user"
            required
          />
          <AnimateField
            className="col-12"
            placeholder=" "
            name="loginPass"
            onChange={this.onChange}
            value={loginPass}
            type="password"
            onClick=""
            label="رمزعبور"
            icon="chilivery-pass"
            onKeyPress={this.handleKeyPress}
            required
          />
          <div className="text-center mt-4">
            <Link to="/forgot-password">
              <span className="forgotPassword">
                {' '}
                رمز عبور خود را فراموش کرده اید؟
              </span>
            </Link>
          </div>

          <div className="topM40 wFull hP20 center">
            <button className="btn btn-auth btn-success">ورود</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => {
      dispatch(getUser(user));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Login);
