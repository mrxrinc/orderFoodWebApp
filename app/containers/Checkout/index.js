import React from 'react';
import './style.scss';
import GiftCode from '../../components/GiftCode';
import UserCacheBalance from '../../components/UserCacheBalance';
import { Container, Row, Col } from 'reactstrap';
import StickyPrice from '../../components/StickyPrice';
import RestaurantHeaderCheckout from '../../components/RestaurantHeaderCheckout';
import logo from '../../images/restaurant-logo.jpg';
import cover from '../../images/pattern.png';
import dataSample from '../data.json';
import { gatewayChanged } from '../../actions/Basket';
import { connect } from 'react-redux';
import { getDataAfterPayment } from '../../api/account';

/* eslint-disable react/prefer-stateless-function */
export class Checkout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      gateway: this.props.basket.gateway ? this.props.basket.gateway : '1'
    };
  }

  handleOptionChange = e => {
    this.setState({
      gateway: e.target.value,
    },()=>
      this.props.changeBankGetway({gateway:this.state.gateway})
    );
  }


  render() {
    return (
      <div className="checkout hFull">
        <RestaurantHeaderCheckout data={dataSample.result.restaurant} cover={cover} logo={logo} />
      <Container className="checkout">
        <div className="padd5">
          <GiftCode />
          <p className="checkout-cacheTitle">پرداخت آنلاین با کارت های بانکی عضو شتاب</p>
          <UserCacheBalance />
          <Row className="banks-row" >
            {dataSample.result.bankgateways.map((value,index) =>
              <Col xs="6">
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gateway"
                      value={value.id}
                      onChange={this.handleOptionChange}
                      checked={this.state.gateway == value.id}
                    />
                    <div className="radio-face" />
                  </div>
                  <span className="clearfix">
                    {value.name}
                    <img
                      src={value.logo}
                      className="pull-left"
                      alt="tik8"
                    />
                  </span>
                </label>
              </Col>
            )}
          </Row>
        </div>
      </Container>
      <StickyPrice data={dataSample.result.amount} />
      </div>
    );
  }
}




const mapDispatchToProps = dispatch => {
  return {
    changeBankGetway: value => {
      dispatch(gatewayChanged(value));
    },
  };
};

const mapStateToProps = state => ({
  user: state.auth,
  basket:state.Basket
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);


