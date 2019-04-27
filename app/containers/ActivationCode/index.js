import React from 'react';
import { Link } from 'react-router-dom';
import { Input, Container, Row, Col } from 'reactstrap';
import Countdown from 'react-countdown-now';
import { connect } from 'react-redux';
import { getUserVerify } from '../../actions/Auth';
import { sendVerifyCodePost } from '../../api/account';
import ChiliRainbow from '../../components/ChiliRainbow';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
class ActivationCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
      code: '',
      disabled: false,
    };
    this.update = this.update.bind(this);
  }

  componentDidMount() {
    this.sendVerifyCode();
  }

  sendVerifyCode = () => {
    const { user } = this.state;
    sendVerifyCodePost({
      mobileNumber: user.mobileNumber,
      fullName: user.fullName,
      email: user.email,
    }).then(response => {
      console.log(response);
    });
  };

  resetCode = () => {
    window.location.reload();
  };

  sendSubmit = event => {
    event.preventDefault();
    const { code } = this.state;
    const verification = {
      verificationCode: code,
    };
    this.setState({ disabled: !this.state.disabled });
    this.props.onSendVerify({ verification });
  };

  update(e) {
    this.setState({ code: e.target.value });
    console.log(this.state);
  }

  render() {
    // Renderer callback with condition
    const renderer = ({ minutes, seconds, completed }) => {
      if (completed) {
        return (
          <div>
            <p>
              <b>۰۰:۰۰</b>
            </p>
            <button
              type="button"
              className="btn-white btn"
              onClick={this.resetCode}
            >
              ارسال مجدد کد
            </button>
          </div>
        );
      }
      return (
        <div>
          <p>
            <b>
              {minutes}:{seconds}
            </b>
          </p>
          <button
            disabled={this.state.disabled ? 'disabled' : ''}
            type="submit"
            className="btn btn-success"
          >
            ارسال
          </button>
        </div>
      );
    };
    return (
      <ChiliRainbow title="تایید حساب کاربری" className="my-4">
        <h4 className="midText text-center my-4">
          برای تأیید حساب کاربری کد 4 رقمی ارسال شده را وارد نمایید:
        </h4>
        <form className="activationCode__form" onSubmit={this.sendSubmit}>
          <Container className="text-center">
            <Row>
              <Col>
                <Input
                  className="text-center activationCode__letter-spacing"
                  maxLength="1"
                  type="text"
                  pattern="\d*"
                  id="activationCode__input-fourth"
                  disabled={this.state.disabled ? 'disabled' : ''}
                  bsSize="lg"
                  onChange={this.update}
                />{' '}
              </Col>
              <Col>
                <Input
                  className="text-center activationCode__letter-spacing"
                  maxLength="1"
                  type="text"
                  pattern="\d*"
                  id="activationCode__input-fourth"
                  disabled={this.state.disabled ? 'disabled' : ''}
                  bsSize="lg"
                  onChange={this.update}
                />{' '}
              </Col>
              <Col>
                <Input
                  className="text-center activationCode__letter-spacing"
                  maxLength="1"
                  type="text"
                  pattern="\d*"
                  id="activationCode__input-fourth"
                  disabled={this.state.disabled ? 'disabled' : ''}
                  bsSize="lg"
                  onChange={this.update}
                />{' '}
              </Col>
              <Col>
                <Input
                  className="text-center activationCode__letter-spacing"
                  maxLength="1"
                  type="text"
                  pattern="\d*"
                  id="activationCode__input-fourth"
                  disabled={this.state.disabled ? 'disabled' : ''}
                  bsSize="lg"
                  onChange={this.update}
                />{' '}
              </Col>                                          
            </Row>

            <p className="midText mt-4">
              مدت زمان باقیمانده برای ارسال کد تأیید
            </p>

            <Countdown date={Date.now() + 120000} renderer={renderer} />

            <Row className="activationCode__edit__wrapper">
              <Link to="/register">
                <span className="midText text-center activationCode__edit my-4">
                  ویرایش شماره موبایل
                </span>
              </Link>
            </Row>
          </Container>
        </form>
      </ChiliRainbow>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSendVerify: verification => {
    dispatch(getUserVerify(verification));
  },
});

const mapStateToProps = state => ({
  user: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivationCode);
