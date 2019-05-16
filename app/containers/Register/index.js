/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { AnimateField } from '../../components/ChiliForm';
import { signUpUser } from '../../actions/Auth';
import './style.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUpFullname: '',
      signUpPhone: '',
      signUpUserEmail: '',
      signUpPass: '',
    };
    this.signUpSubmit = this.signUpSubmit.bind(this);

    this.onChange = this.onChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  onChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });

    // this.setState({ [e.target.name]: e.target.value });
  };

  signUpSubmit = e => {
    e.preventDefault();
    const {
      signUpFullname,
      signUpPhone,
      signUpUserEmail,
      signUpPass,
    } = this.state;

    // fire action
    const user = {
      fullName: signUpFullname,
      mobileNumber: signUpPhone,
      email: signUpUserEmail,
      password: signUpPass,
      confirmPass: signUpPass,
    };
    this.props.onSignUp({ user });
  };

  handleKeyPress = e => {
    if (e.key === 'Enter') {
      this.signUpSubmit(e);
    }
  };

  render() {
    const {
      signUpFullname,
      signUpPass,
      signUpPhone,
      signUpUserEmail,
    } = this.state;
    return (
      <div>
        <form onSubmit={this.signUpSubmit} className="loginForm">
          <AnimateField
            className="col-12"
            placeholder=" "
            name="signUpFullname"
            value={signUpFullname}
            type="text"
            onClick=""
            onChange={this.onChange}
            label="نام و نام خانوادگی"
            icon="chilivery-user"
          />
          <AnimateField
            className="col-12"
            placeholder=" "
            name="signUpPhone"
            value={signUpPhone}
            type="text"
            onClick=""
            onChange={this.onChange}
            label="موبایل"
            icon="chilivery-mobile"
            // validation={['شماره موبایل اشتباه است.']}
          />
          <AnimateField
            className="col-12"
            placeholder=" "
            name="signUpUserEmail"
            value={signUpUserEmail}
            type="text"
            onClick=""
            onChange={this.onChange}
            label="ایمیل"
            icon="chilivery-email"
            // validation={['ایمیل اشتباه است.']}
          />
          <AnimateField
            className="col-12"
            placeholder=" "
            name="signUpPass"
            type="password"
            value={signUpPass}
            onClick=""
            onChange={this.onChange}
            label="رمزعبور"
            icon="chilivery-pass"
          />
          <div className="text-center mt-4">
            <span className="ruleAndCondition midText">
              با کلیک بر روی دکمه ثبت نام شما
              <span className="ruleAndCondition__link">
                <Link to="/static/law" className="">
                  <span className="accordion__list-text">
                    {'\u00A0'}
                    قوانین چیلیوری
                    {'\u00A0'}
                  </span>
                  {/* https://chilivery.com/staticapp/law/ */}
                </Link>
              </span>
              را پذیرفته اید
            </span>
          </div>
          <div className="topM40 wFull hP20 center">
            <button className="btn btn-auth btn-success">ثبت نام</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSignUp: signUpDetail => {
    dispatch(signUpUser(signUpDetail));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Register);
