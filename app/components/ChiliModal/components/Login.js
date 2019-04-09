import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ChiliModal from '../index';
import { AnimateField } from '../../ChiliForm';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: '',
      loginPass: '',
    };
  }

  render() {
    const classes = this.props;
    const { loginUserName, loginPass } = this.state;
    return (
      <ChiliModal
        // toggle={this.toggleLogin}
        modal
        // handleSubmit={this.loginSubmit}
        icon="icon icon-log-in"
        title="ورود به حساب کاربری"
        className="panigale-login-form"
      >
        <div className="row">
          <AnimateField
            className="col-12"
            placeholder="وارد نمایید"
            name="loginUserName"
            type="text"
            onClick=""
            label="شماره همراه / آدرس ایمیل"
            value={loginUserName}
            // onChange={this.onChange}
            // onKeyPress={this.handleKeyPress}
            // validation={
            //   typeof classes.validation.identifier === "undefined" ?
            //     false : classes.validation.identifier
            // }
            required
          />
          <AnimateField
            className="col-12"
            name="loginPass"
            type="password"
            onClick=""
            placeholder="وارد نمایید"
            label="رمز عبور"
            value={loginPass}
            // onChange={this.onChange}
            // onKeyPress={this.handleKeyPress}
            // validation={
            //   typeof classes.validation.password === "undefined" ?
            //     false : classes.validation.password
            // }
            required
          />
          <div className="col-12">
            <div className="panigale-modal__submit-box form-group mt-4">
              <span className="panigale-modal__forgotpass">
                رمز عبور را فراموش کردم
              </span>
              <Button className="btn-secondary">ورود</Button>
              <button class="btn btn-success">success</button>
            </div>
            <span className="panigale-modal__switch-form-text mt-4">
              عضو نیستم (عضویت)
            </span>
          </div>
        </div>
      </ChiliModal>
    );
  }
}

export default Login;
