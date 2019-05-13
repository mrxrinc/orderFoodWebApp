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
import { accChargedChanged, gatewayChanged } from '../../actions/Basket';
import { connect } from 'react-redux';
import { getDataAfterPayment, getOrderitems } from '../../api/account';
import NavigationBar from '../../components/NavigationBar';

/* eslint-disable react/prefer-stateless-function */
export class Checkout extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      gateway: this.props.basket.gateway ? this.props.basket.gateway : '1',
      accCharge: false,
      showGetway:true
    };
  }

  handleOptionChange = e => {
    this.setState({
        gateway: e.target.value,
      },()=>
        this.props.changeBankGetway({gateway:this.state.gateway})
    );
  }

  getOrderItem = () => {
    const {basket} = this.props;
    getOrderitems({
      orderId:basket.id
    }).then(response => {
      if(response.status) {
        this.setState({
          orderItems:response.result
        })
      }
    });
  };

  showBankGetway () {
    let discountAmount = this.props.basket.discountAmount ? this.props.basket.discountAmount : 0;
    let totalPrice = this.state.orderItems.amount.total ;
    console.log(this.state.accCharge);
    if(this.state.accCharge && (totalPrice + discountAmount > this.props.user.cacheBalance)) {

      this.setState({
        showGetway:true
      })
    } else if (!this.state.accCharge) {
      this.setState({
        showGetway:true
      })
    } else if (this.state.accCharge && (totalPrice + discountAmount <= this.props.user.cacheBalance)) {
      this.setState({
        showGetway:false
      })
    }
  }

  ChangeAccCharge = e => {
    this.setState({accCharge: !this.state.accCharge},()=> {
      this.showBankGetway();
      this.props.accChargeChanged({accCharge:this.state.accCharge});
      }
    );

  };

  componentDidMount() {
    if(this.props.basket.organizationAddressId != null) {
      console.log("ok")
    }
    this.getOrderItem();
    this.props.accChargeChanged({accCharge:false})
  }


  render() {
    const {orderItems} =this.state
    return (
      <div className="checkout hFull">
        <NavigationBar
          back
          title="سبد خرید"
          // background
        />
        {orderItems && <RestaurantHeaderCheckout data={orderItems.restaurant} cover={cover} logo={logo} />}
      <Container className="checkout">
        <div className="padd5">
          <GiftCode organid={this.props.basket.organizationAddressId} organCode={this.props.user.organization.discount.code} userAddressId={this.props.basket.addressId} orderId={this.props.basket.id}/>
          <p className="checkout-cacheTitle">پرداخت آنلاین با کارت های بانکی عضو شتاب</p>
          <UserCacheBalance onChange={this.ChangeAccCharge} accCharge={this.state.accCharge}/>
          {this.state.showGetway &&
          <Row className="banks-row" >
            {orderItems && orderItems.bankgateways.map((value,index) =>
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
          }
        </div>
      </Container>
      {orderItems &&
        <StickyPrice data={orderItems.amount} collapseShow={true} links='bank'/>
      }
      </div>
    );
  }
}




const mapDispatchToProps = dispatch => {
  return {
    changeBankGetway: value => {
      dispatch(gatewayChanged(value));
    },
    accChargeChanged: value => {
      dispatch(accChargedChanged(value));
    }
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

