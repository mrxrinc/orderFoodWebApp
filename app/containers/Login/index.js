/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUser } from '../../actions/Auth';
import { setCookie } from '../../utils/cookies';

class Login extends Component {
  onHandleLogin = event => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    const data = {
      email,
      password,
    };

    this.props.dispatch(getUser(data));
  }

  render() {
    let isSuccess;
    let message;
    // if (this.props.response.login.hasOwnProperty('response')) {
    //   isSuccess = this.props.response.login.response.success;
    //   message = this.props.response.login.response.message;

    //   if (isSuccess) {
    //     setCookie('token', this.props.response.login.response.token, 1);
    //   }
    // }

    return (
      <div>
        <h3>Login Page</h3>
        {!isSuccess ? <div>{message}</div> : <div>cannot login </div>}
        <form onSubmit={this.onHandleLogin}>
          <div>
            <label>Email</label>
            <input type="email" name="email" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" name="password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = response => ({ response });

export default connect(mapStateToProps)(Login);
