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
      input1: "",
      input2: "",
      input3: "",
      input4: "",
    };
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
      console.log('^^^^res', response);
    });
  };

  resetCode = () => {
    window.location.reload();
  };

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
          <button type="submit" className="btn btn-success">
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
        <form className="activationCode__form">
          <Container className="text-center">
            <Row>
              <Col>
                <Input
                  maxLength="1"
                  type="text"
                  pattern="\d*"
                  id="activationCode__input-fourth"
                  bsSize="lg"
                  value={this.state.input1}
                />{' '}
              </Col>
              <Col>
                <Input
                  maxLength="1"
                  type="text"
                  pattern="\d*"
                  id="activationCode__input-three"
                  bsSize="lg"
                  value={this.state.input2}
                />{' '}
              </Col>
              <Col>
                <Input
                  maxLength="1"
                  type="text"
                  pattern="\d*"
                  id="activationCode__input-two"
                  bsSize="lg"
                  value={this.state.input3}
                />{' '}
              </Col>
              <Col>
                <Input
                  maxLength="1"
                  type="text"
                  pattern="\d*"
                  id="activationCode__input-one"
                  bsSize="lg"
                  value={this.state.input4}
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
  onLoad: () => {
    dispatch(getUserVerify());
  },
});

const mapStateToProps = state => ({
  user: state.auth,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ActivationCode);
