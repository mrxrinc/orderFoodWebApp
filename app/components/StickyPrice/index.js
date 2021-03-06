import React from 'react';
import { history } from '../../store';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './style.scss';
import toggleUp from "../../images/closed.png"
import toggleDown from "../../images/opened.png"
import { connect } from 'react-redux';
import { payOrderPost } from '../../api/account';
import { descriptionChanged, putChangeBasket } from '../../actions/Basket';
import { addToast } from '../../actions/Notifications';

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
    if (this.props.links == "checkout" && !this.props.basket.addressId && !this.props.basket.deliveryType) {
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
      if (typeof basket.items[item].options !== 'undefined' && basket.items[item].options.length > 0) {
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
    if(this.props.links !== "cart") {
      this.changeBasket(true)
    }
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
        nextPage : this.props.redirect?this.props.redirect:this.props.links,
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
      "orderDeliveryType":  basket.deliveryType,
      "orderDescription":basket.orderDescription ? basket.orderDescription:null,
      "orderId":  basket.id,
      "payAmount":  this.totalPrice().amountToPay,
      "addressId":  basket.addressId,
      "campaginCode":basket.campaginCode,
      "paymentType": this.totalPrice().amountToPay == 0 ? 'account':'bank',
      "bankgate": basket.gateway,
      "userAddressModel" : basket.organizationAddressId ? 'organ':'user',
      "isPWA": true
    }).then(response => {
      //FIXME
      if(response.status) {
        // https://payment.iiventures.com/pay/1obnZDyB5ZN8qiNV4hRTnTQrQEXjm5
        // window.location = response.result.url;
        if (response.go_to === 'app.success-pay') {
          history.push('/success-payment')
        }
        console.log(response);
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
      this.props.descriptionChanged({orderDescription:this.props.description})
      // history.push("/checkout");
    }
    if (links === "bank") {
      this.payOrder()
    }
  };

  render() {
    const {data,basket,user,collapseShow,minPriceSendLimit} = this.props;
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
                <span>?????????? ??????????????</span>
                <span className="pull-left">{totalPrice } ??????????</span>
              </li>
              {basket.deliveryZonePrice > 0 &&
              <li>
                <span>?????????? ??????????</span>
                <span className="pull-left">{basket.deliveryZonePrice} ??????????</span>
              </li>
              }

              {data && data.tax > 0 &&
              <li>
                <span>????????????</span>
                <span className="pull-left">{data.tax} ??????????</span>
              </li>
              }
              {data && data.pack > 0 &&
              (<li>
                <span>?????????? ???????? ????????</span>
                <span className="pull-left">{data.pack} ??????????</span>
              </li>)
              }
              {basket.discountAmount &&
              (<li>
                <span>???? ??????????</span>
                <span className="pull-left">{basket.discountAmount}- ??????????</span>
              </li>)
              }
              {basket.accCharge &&
              (<li>
                <span>?????????????? ???? ?????? ??????</span>
                <span className="pull-left">{
                  this.totalPrice().amountToPay == 0 ?
                  this.totalPrice().tempAmountToPay :
                  user.cacheBalance}- ??????????</span>
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
          <div className="StickyPrice__price-rbox" onClick={this.toggle} >
            <button type="button">
              <span className="basket-counter">{totalCount}</span>
              <span className="text-price">{
                this.totalPrice().amountToPay == 0 ? '????????????': this.totalPrice().amountToPay + ' ??????????'
                }
              </span>
              {this.props.showGetway && <span className="text-limit">{(basket.minPriceSendLimit > totalPrice) && ' (?????????? ??????????:  '+basket.minPriceSendLimit + ' ??????????)'}</span>}
            </button>
          </div>
          <div className="StickyPrice__price-lbox">
            {!validAddress ?
            <button onClick={this.pushLink} type="button" className={basket.minPriceSendLimit > this.totalPrice().tempAmountToPay && 'disabled'} disabled={basket.minPriceSendLimit > this.totalPrice().tempAmountToPay}>?????????? ??????????
              <span className="chilivery-arrow-left"> </span>
            </button>
              :
            <button onClick={() =>this.props.showAlert({text: "???????? ???????? ?????? ???? ???????????? ????????????.",color: "danger",})} type="button" >???????????? ????????
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
    descriptionChanged: value => {
      dispatch(descriptionChanged(value));
    },
    showAlert: (showStatus) => {
      dispatch(addToast(showStatus));
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
