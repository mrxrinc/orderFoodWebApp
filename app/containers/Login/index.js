/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

import { getUser } from '../../actions/Auth';
import { setCookie } from '../../utils/cookies';
import { AnimateField } from '../../components/ChiliForm';
import ChiliButton from '../../components/ChiliButton';
import './style.scss';

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
  };


  componentDidMount() {
    var session_url = 'https://chilivery.net/mobile-api/v2/region/cityList';
    var uname = 'chilidev';
    var pass = 'welcometochilidev';
    axios
      .post(
        session_url,
        {},
        {
          auth: {
            username: uname,
            password: pass,
          },
        },
      )
      .then(function (response) {
        console.log('Authenticated');
      })
      .catch(function (error) {
        console.log('Error on Authentication');
      });
    // axios.defaults.headers.common['Authorization'] = "Basic token";
    // axios({
    //   method: 'GET',
    //   url: 'https://chilivery.net/mobile-api/v2/region/cityList',
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    //   auth: {
    //     username: 'chilidev',
    //     password: 'welcometochilidev',
    //   },
    // })  .catch((error) => {
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //     // http.ClientRequest in node.js
    //     console.log(111,error.request);
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log('Error', error.message);
    //   }
    //   console.log(error.config);
    // });
  }

  render() {
    const buttonElement = {
      title: `ثبت نام`,

    };
    // axios
    //   .post('https://chilivery.net/mobile-api/v2/user/login1', {
    //   email: 'farzan.najipour@gmail.com',
    //   password: 'ssss'
    // })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

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
        {/* {!isSuccess ? <div>{message}</div> : <div>cannot login </div>} */}
        {/* <label>Email</label> */}
        {/* <input type="email" name="email" value="farz@g.com" /> */}
        {/* <label>Password</label>
            <input type="password" name="password" value="3333" /> */}
        <form onSubmit={this.onHandleLogin}>
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
            <span className="forgotPassword"> رمز عبور خود را فراموش کرده اید؟</span>
          </div>

          <div className="topM40 wFull hP20 center">
            {/* <ChiliButton type="green" title="ورود" /> */}
            <button className="btn btn-big btn-success">ورود</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = response => ({ response });

export default connect(mapStateToProps)(Login);
