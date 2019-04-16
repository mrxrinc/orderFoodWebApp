import React from 'react';
import { Input, Container, Row, Col } from 'reactstrap';
import Countdown from 'react-countdown-now';
import ChiliRainbow from '../../components/ChiliRainbow';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
export default class Authentication extends React.Component {
  render() {
    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        return (
          <div>
            <p>
              <b>۰۰:۰۰</b>
            </p>
            <button type="button" className="btn-white btn">ارسال مجدد کد</button>
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
        <form onSubmit={this.onHandleLogin} className="forgot__form">
          <Container className="text-center">
            <Row>
              <Col>
                <Input bsSize="lg" />{' '}
              </Col>
              <Col>
                <Input bsSize="lg" />{' '}
              </Col>
              <Col>
                <Input bsSize="lg" />{' '}
              </Col>
              <Col>
                <Input bsSize="lg" />{' '}
              </Col>
            </Row>

            <p className="midText mt-4">
              مدت زمان باقیمانده برای ارسال کد تأیید
            </p>
            <p>
              <b>
                <Countdown date={Date.now() + 12000} renderer={renderer} />
              </b>
            </p>

            <Row className="activationCode__edit__wrapper">
              <span className="midText text-center activationCode__edit my-4">
                ویرایش شماره موبایل
              </span>
            </Row>
          </Container>
        </form>
      </ChiliRainbow>
    );
  }
}
