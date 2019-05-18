import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';

import './style.scss';
import CheckoutCardItem from '../../components/CheckoutCardItem';
import { AnimateField } from '../../components/ChiliForm';
import MyAddress from '../../components/MyAddress';
import StickyPrice from '../../components/StickyPrice';
import RestaurantHeaderCheckout from '../../components/RestaurantHeaderCheckout';
import logo from '../../images/restaurant-logo.jpg';
import cover from '../../images/pattern.png';
import NavigationBar from '../../components/NavigationBar';

import dataSample from '../data.json';
import addressSample from '../address.json';
import { addressIdChanged, addToBasket, deliveryTypeChanged , getBasketItems } from '../../actions/Basket';
import { connect } from 'react-redux';
import { Checkout } from '../Checkout';
import { getOrderitems,getUserAddress } from '../../api/account';
import ProfileAddress from '../PageProfile';
import { createBasket } from '../../api/application/restaurant';
import { history } from '../../store';
import CartEmpty from './cartEmpty';
export class cart extends React.PureComponent {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      description: '',
      activeTabAddress: this.props.basket.deliveryType ? "2":"1",
      orderItems:{},
      AddressShow:false,
      showLoginForm:false
    };
  }


  getAddress = () => {
    const {basket} = this.props;
    getUserAddress({
      restaurantId:basket.restaurantId,
      orderId:basket.id
    }).then(
      response => {
        this.setState({
          userAddressList:response.result,
        },()=>{
          this.setState({
            AddressShow:true
          })
        })
      }
    )
  }

  componentDidMount() {
    let count = 0;
    if (!this.props.user.id) {
      this.setState({
        showLoginForm:true
      })
    }
    dataSample.result.items.map((item) => {
      count += item.count;
    })
    this.getAddress();
    const restaurantId = { restaurantId :  this.props.basket.restaurantId};

    setTimeout(
      () => this.props.getBasketItems(restaurantId),100
    )
  }


  toggle(tab) {
    if(tab === "1") {
      this.props.changeDeliveryType({deliveryType:false})
    } else {
      this.props.changeDeliveryType({deliveryType:true})
      // this.props.changeAddressId({addressId:'',organizationAddressId:'',deliveryZonePrice:0,deliveryZoneId:''})
    }
    if (this.state.activeTabAddress !== tab) {
      this.setState({
        activeTabAddress: tab
      });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const winLocation = this.p
    const {description,orderItems,activeTabAddress,showLoginForm} = this.state;
    const {basket} = this.props;
    return (
      <React.Fragment>
        {basket && basket.items && Object.keys(this.props.basket.items).length == 0 ?
          (
            <div className="whFull center">
              <CartEmpty />
            </div>
          ) : (
            <React.Fragment>
              <div className="cart bottomP50">
                <NavigationBar
                  back
                  title="سبد خرید"
                  background
                />

                {basket.profile && <RestaurantHeaderCheckout data={basket} cover={cover} logo={logo} />}
                <div className="cart__card-item">

                  {this.props.basket.items && Object.keys(this.props.basket.items).length > 0 &&
                  <CheckoutCardItem basket={this.props.basket}/>
                  }


                </div>
                {showLoginForm &&
                <div className="cart__login">
                  <p>کاربر گرامی لطفا جهت ادامه ثبت سفارش وارد حساب کاربری خود بشوید و یا در چیلیوری ثبت نام کنید:</p>
                  <button className="btn btn-success" onClick={()=> history.push("/authentication")}>ثبت نام</button>
                  <button className="btn btn-success" onClick={()=> history.push("/authentication")}>ورود</button>
                </div>
                }
                {!showLoginForm &&
                <React.Fragment>
                  <div className="food-delivery">
                    <div className="food-delivery__rbox">
                      <span>تحویل غذا </span>
                      {activeTabAddress == "1" &&
                      <span className="cost-sending">(هزینه ارسال: {basket.deliveryZonePrice && basket.deliveryZonePrice} تومان)</span>
                      }
                    </div>
                    <div className="food-delivery__lbox">
                      <div className="tab-box">
                        <ul className="nav">
                          <li className="nav-item">
                            <a className={classnames({ active: this.state.activeTabAddress === '1' })}
                               onClick={() => { this.toggle('1'); }}>ارسال به من</a>
                          </li>
                          <li className="nav-item">
                            <a className={classnames({ active: this.state.activeTabAddress === '2'})}
                               onClick={() => { this.toggle('2'); }}>در محل رستوران</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="clearfix"></div>
                  </div>
                  <TabContent activeTab={this.state.activeTabAddress}>
                    <TabPane tabId="1">
                      <div className="address">
                        <h4>آدرس های ذخیره شده</h4>
                        <p>تمامی آدرس های ذخیره شده شما خارح از محدوده رستوران است. برای ادامه آدرس جدید در محدوده رستوران ثبت نمایید:</p>
                        {this.state.AddressShow &&
                        <MyAddress data={this.state.userAddressList} type="cart" />
                        }
                      </div>
                    </TabPane>
                    <TabPane tabId="2">
                      <div className="address">
                        <h4>کاربر گرامی جهت تحویل سفارش به آدرس رستوران مراجعه نمایید:‌</h4>
                        <div className="address__inplace">
                <span className="address__inplace__header">
                  <span className="address__inplace__header-icon chilivery-restaurant"> </span>
                  <span className="address__inplace__header-text">{basket && basket.restaurantAddress}</span>
                </span>
                          <p>{orderItems.restaurant && orderItems.restaurant.address}</p>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                  <div className="description bottomM70">
                    <AnimateField
                      placeholder=" "
                      icon="chilivery-speech"
                      name="description"
                      type="text"
                      onClick=""
                      label="توضیحات و موارد بیشتر در مورد این سفارش"
                      value={description}
                      onChange={this.onChange}
                      // onKeyPress={this.handleKeyPressUpdate}
                    />
                  </div>
                </React.Fragment>
                }
                {/* FIXME */}
                {!showLoginForm && <StickyPrice links='checkout' redirect={`checkout/${this.props.basket.id}`} data={orderItems.amount}  collapseShow={true} showGetway={true}/>}
              </div>
            </React.Fragment>
          )}
      </React.Fragment>

    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeDeliveryType: value => {
      dispatch(deliveryTypeChanged(value));
    },
    changeAddressId: value => {
      dispatch(addressIdChanged(value));
    },
    getBasketItems: restaurantId => dispatch(getBasketItems(restaurantId)),
    addToBasket: value => dispatch(addToBasket(value))
  };
};

const mapStateToProps = state => ({
  user: state.auth,
  basket:state.Basket
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(cart);



