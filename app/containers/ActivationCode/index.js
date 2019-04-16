import React from 'react';
import { Input, Container, Row, Col } from 'reactstrap';
import ChiliRainbow from '../../components/ChiliRainbow';
import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class Authentication extends React.Component {
  render() {
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
              <b>۰۰:۴۱</b>
            </p>

            <button type="submit" className="btn btn-success">ارسال</button>
            <Row className="activationCode__edit__wrapper">
              <span className="midText text-center activationCode__edit my-4">ویرایش شماره موبایل</span>
            </Row>
          </Container>
        </form>
      </ChiliRainbow>
    );
  }
}
