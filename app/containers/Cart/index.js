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

import dataSample from '../data.json';
import addressSample from '../address.json';
import { gatewayChanged } from '../../actions/Basket';
import { connect } from 'react-redux';
import { Checkout } from '../Checkout';
import { getOrderitems } from '../../api/account';

export class cart extends React.PureComponent {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      description: '',
      activeTabAddress: '1',
      orderItems:{}
    };
  }
  getOrderItem = () => {
    const {basket} = this.props;
    getOrderitems({
      orderId:basket.basket.orderId
    }).then(response => {
      if(response.status) {
        this.setState({
          orderItems:response.result
        })
      }
    });
  };

  componentDidMount() {
    let count = 0;
    dataSample.result.items.map((item) => {
      count += item.count;
    })
    this.getOrderItem()
  }

  toggle(tab) {
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
    const {description,orderItems} = this.state;
    const {basket} = this.props;
    return (
      <div className="cart bottomP50">
        {orderItems.restaurant && <RestaurantHeaderCheckout data={orderItems.restaurant} cover={cover} logo={logo} />}
        <div className="cart__card-item">
          {orderItems.items && <CheckoutCardItem data={dataSample.result.items} datas={basket.basket.items} items={orderItems.items}/>}
        </div>
        <div className="food-delivery">
          <div className="food-delivery__rbox">
            <span>تحویل غذا </span>
            <span className="cost-sending">(هزینه ارسال: 0 تومان)</span>
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
              <MyAddress data={addressSample.result} />
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="address">
              <h4>کاربر گرامی جهت تحویل سفارش به آدرس رستوران مراجعه نمایید:‌</h4>
              <div className="address__inplace">
                <span className="address__inplace__header">
                  <span className="address__inplace__header-icon chilivery-restaurant"> </span>
                  <span className="address__inplace__header-text">یاماهاسا (هفت تیر)</span>
                </span>
                <p>	ابتدای پل کریمخان، خیابان حسینی، نبش 2 غربی، پلاک 18</p>
              </div>
            </div>
          </TabPane>
        </TabContent>
        <div className="description bottomM70">
          <AnimateField
            placeholder=" "
            icon="chilivery-speech"
            name="signUpPhone"
            type="text"
            onClick=""
            label="توضیحات و موارد بیشتر در مورد این سفارش"
            value={description}
            onChange={this.onChange}
            onKeyPress={this.handleKeyPressUpdate}
          />
        </div>
        <StickyPrice data={dataSample.result.amount}  collapseShow={true}/>
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
)(cart);



