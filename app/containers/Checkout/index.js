import React from 'react';
import './style.scss';
import GiftCode from '../../components/GiftCode';
import UserCacheBalance from '../../components/UserCacheBalance';
import { Container, Row, Col } from 'reactstrap';
import StickyPrice from '../../components/StickyPrice';
import RestaurantHeaderCheckout from '../../components/RestaurantHeaderCheckout';
import logo from '../../images/restaurant-logo.jpg';
import cover from '../../images/pattern.png';
/* eslint-disable react/prefer-stateless-function */
export class Checkout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="checkout hFull">
        <RestaurantHeaderCheckout cover={cover} logo={logo} />
      <Container className="checkout">
        <div className="padd5">
          <GiftCode />
          <p className="checkout-cacheTitle">پرداخت آنلاین با کارت های بانکی عضو شتاب</p>
          <UserCacheBalance />
          <Row className="banks-row">
            <Col xs="6">
              <label className="radio-wrapper">
                <div className="label-parent">
                  <input
                    type="radio"
                    className="radio-input"
                    name="gateway"
                    value="6"
                  />
                  <div className="radio-face" />
                </div>
                <span className="clearfix">
                    سامان
                    <img
                      src="https://payment.iiventures.com/public/img/gateways/newSaman.png"
                      className="pull-left"
                      alt="tik8"
                    />
                  </span>
              </label>
            </Col>
            <Col xs="6">
              <label className="radio-wrapper">
                <div className="label-parent">
                  <input
                    type="radio"
                    className="radio-input"
                    name="gateway"
                    value="7"
                  />
                  <div className="radio-face" />
                </div>
                <span className="clearfix">
                    پارسیان
                    <img
                      src="https://payment.iiventures.com/public/img/gateways/newParsian.png"
                      className="pull-left"
                      alt="tik8"
                    />
                  </span>
              </label>
            </Col>
          </Row>
        </div>

      </Container>
      {/*<StickyPrice />*/}
      </div>
    );
  }
}

export default Checkout;
