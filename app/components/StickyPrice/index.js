import React from 'react';
import { history } from '../../store';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './style.scss';
import toggleUp from "../../images/closed.png"
import toggleDown from "../../images/opened.png"
import { connect } from 'react-redux';
import { payOrderPost } from '../../api/account';
import { putChangeBasket } from '../../actions/Basket';

class StickyPrice extends React.PureComponent {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false,
      collaoseShow:false,
      totalPrice:0
    };
  }

  validationAddress = () => {
    if (this.props.links == "checkout" && !this.props.basket.addressId ) {
      this.setState({
        validAddress:true
      })
    } else {
      this.setState({
        validAddress:false
      })
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.basket !== this.props.basket) {
      this.calculationsFunction()
      this.validationAddress();
    }
  }

  calculationsFunction = () => {
    const {basket} = this.props;
    let totalCount = 0;
    let totalPrice = 0;
    const items = Object.keys(basket.items).map((item) =>{
      totalCount += basket.items[item].itemCount;
      totalPrice += basket.items[item].foodPrice * basket.items[item].itemCount;
      if (basket.items[item].options.length > 0) {
        const optionItem = basket.items[item].options.map((item) => {
          totalPrice += item.foodOptionPrice
        })
      }
      return {
        "orderItemFoodId" : basket.items[item].id,
        "itemCount" : basket.items[item].itemCount,
        "foodPrice": basket.items[item].foodPrice,
      }
    });
    this.setState({
      items:basket.items,
      totalCount,totalPrice
    })
  };

  componentDidMount() {
    this.calculationsFunction()
    const {links,basket} = this.props;
    this.validationAddress();
    if (links=== "cart" && !basket.addressId) {
      this.setState({
        validAddress : false
      })
    }
  }

  componentWillUnmount() {
    this.changeBasket(true)
  }


  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  totalPrice() {
    const {data,basket,user} = this.props;
    let discountAmount;
    let amountToPay;
    let useGateway;
    let tax = data ? data.tax : 0;
    let amountWithDelivery = this.state.totalPrice + parseInt(basket.deliveryZonePrice ? basket.deliveryZonePrice : 0);
    var howMuchWithCash = basket.accCharge ? user.cacheBalance : 0;
    var tempAmountToPay = amountWithDelivery + parseInt(tax);
    if(basket.discountAmount){
      discountAmount = basket.discountAmount;
      tempAmountToPay = tempAmountToPay - discountAmount;
    }
    else {
      discountAmount = 0;
    }
    if(tempAmountToPay > howMuchWithCash){
      amountToPay = tempAmountToPay - howMuchWithCash;
      // this.setState({
      //   totalPrice:amountToPay
      // })
    }
    else{
      amountToPay = 0;
      // this.setState({
      //   totalPrice:0
      // })
    }

    // useGateway = amountToPay !== 0; // set either use bank gateway or not


    return {amountToPay,tempAmountToPay};
  }

  changeBasket = (preventRedirect) => {
    const {basket,link} = this.props;
    const items = Object.keys(basket.items).map((item) =>{
      const updateData = {
        "orderItemFoodId" : item,
        "itemCount" : basket.items[item].itemCount
      };
      return updateData;
    });
    const basketData =
      {
        data : {
          id:basket.id,
          deliveryType:basket.deliveryType ? basket.deliveryType:false,
          restaurantId:basket.restaurantId,
          items:basket.items ,
        },
        nextPage : this.props.links,
        preventRedirect: preventRedirect
      };
      this.props.changeBasketData(basketData);
  };

  payOrder = () => {
    const {basket,link} = this.props;
    payOrderPost({
      "accCharge": basket.accCharge ? basket.accCharge : false,
      "acceptConditions": true,
      "deliveryZoneId":  basket.deliveryZoneId ? basket.deliveryZoneId:null,
      "gateway":  this.totalPrice().amountToPay == 0 ? false : true,
      "orderDeliveryType":  false,
      "orderId":  basket.id,
      "payAmount":  this.totalPrice().amountToPay,
      "addressId":  basket.addressId,
      "campaginCode":basket.campaginCode,
      "paymentType": this.totalPrice().amountToPay == 0 ? 'account':'bank',
      "bankgate": basket.gateway,
      "userAddressModel" : basket.organizationAddressId ? 'organ':'user'
    }).then(response => {
      if(response.status) {
        // https://payment.iiventures.com/pay/1obnZDyB5ZN8qiNV4hRTnTQrQEXjm5
        // window.location = response.result.url;
        if (response.go_to === 'app.success-pay') {
          history.push('/success-payment')
        }
        if(response.result.url) {
          window.location.href = response.result.url
        }
      }
    })
  }

  pushLink = () => {
    const {links,basket} = this.props;
    if (links=== "cart") {
      this.changeBasket();
    }
    if (links === "checkout") {
      this.changeBasket();
      // history.push("/checkout");
    }
    if (links === "bank") {
      this.payOrder()
    }
  };

  render() {
    const {data,basket,user,collapseShow} = this.props;
    const {totalCount,totalPrice,validAddress} = this.state;

    return (

      <div className="StickyPrice">
        {collapseShow &&
        <Collapse isOpen={this.state.collapse}>
          <div className="StickyPrice-togglebutton-down">
            <button onClick={this.toggle} >
              <img src={toggleDown} width="70px"/>
            </button>
          </div>
          <div className="StickyPrice__card">
            <ul>
              <li>
                <span>مجموع سفارشات</span>
                <span className="pull-left">{totalPrice } تومان</span>
              </li>
              {basket.deliveryZonePrice > 0 &&
              <li>
                <span>هزینه ارسال</span>
                <span className="pull-left">{basket.deliveryZonePrice} تومان</span>
              </li>
              }

              {data && data.tax > 0 &&
              <li>
                <span>مالیات</span>
                <span className="pull-left">{data.tax} تومان</span>
              </li>
              }
              {data && data.pack > 0 &&
              (<li>
                <span>هزینه بسته بندی</span>
                <span className="pull-left">{data.pack} تومان</span>
              </li>)
              }
              {basket.discountAmount &&
              (<li>
                <span>کد تخفیف</span>
                <span className="pull-left">{basket.discountAmount}- تومان</span>
              </li>)
              }
              {basket.accCharge &&
              (<li>
                <span>استفاده از کیف پول</span>
                <span className="pull-left">{
                  this.totalPrice().amountToPay == 0 ?
                  this.totalPrice().tempAmountToPay :
                  user.cacheBalance}- تومان</span>
              </li>)
              }


            </ul>
          </div>
        </Collapse>
        }
        {collapseShow && !this.state.collapse &&
        <div className="StickyPrice-togglebutton-up">
          <button onClick={this.toggle} >
            <img src={toggleUp} width="70px"/>
          </button>
        </div>
        }

        <div className="StickyPrice__price">
          <div className="StickyPrice__price-rbox">
            <button type="button">
              <span className="basket-counter">{totalCount}</span>
              <span className="text-price">{
                this.totalPrice().amountToPay == 0 ? 'رایگان':
                this.totalPrice().amountToPay + ' تومان'
                }
              </span>
            </button>
          </div>
          <div className="StickyPrice__price-lbox">
            {!validAddress ?
            <button onClick={this.pushLink} type="button">تایید سفارش
              <span className="chilivery-arrow-left"> </span>
            </button>
              :
            <button onClick={this.pushLink} type="button" disabled="disabled">انتخاب آدرس
              <span className="chilivery-arrow-left"> </span>
            </button>}
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    changeBasketData: data => {
      dispatch(putChangeBasket(data));
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
)(StickyPrice);
