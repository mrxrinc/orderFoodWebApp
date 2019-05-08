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
      collaoseShow:false
    };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.basket !== this.props.basket) {
      this.calculationsFunction()
    }
  }

  calculationsFunction = () => {
    const {basket} = this.props;
    let totalCount = 0;
    let totalPrice = 0;
    const items = Object.keys(basket.items).map((item) =>{
      totalCount += basket.items[item].itemCount;
      totalPrice += basket.items[item].foodPrice * basket.items[item].itemCount;
      return {
        "orderItemFoodId" : basket.items[item].id,
        "itemCount" : basket.items[item].itemCount,
        "foodPrice": basket.items[item].foodPrice,
      }
    });
    this.setState({
      items,totalCount,totalPrice
    })
  };

  componentDidMount() {
    // this.calculationsFunction()
  }

  componentWillUnmount() {
    // this.changeBasket()
  }


  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  totalPrice() {
    const {data,basket,user} = this.props;

    var total = this.state.totalPrice;
    if(basket.accCharge) {
      total = total - user.cacheBalance;
    }
    if(basket.accCharge) {
      total = total - basket.discountAmount;
    }
    if(total <= 0) {
      total = 0;
    }
    if(data) {
      total = parseInt(total) + parseInt(basket.deliveryZonePrice) + parseInt(data.tax) + parseInt(data.pack)
    }
    return total;
  }

  changeBasket = () => {
    // const {basket,link} = this.props;
    // const items = Object.keys(basket.items).map((item) =>{
    //   var updateData = {
    //     "orderItemFoodId" : item,
    //     "itemCount" : basket.items[item].itemCount
    //   };
    //   return updateData;
    // });
    // putChangeBasket(
    //   {
    //     "id":basket.id,
    //     "deliveryType":basket.deliveryType ? basket.deliveryType:false,
    //     "restaurantId":basket.restaurantId,
    //     "items":items
    //   }
    // ).then(response => {
    //   if(response.status) {
    //     // link ? history.push(link) : history.push("/checkout");
    //     if (link !== '/cart') history.push(link)
    //     this.setState({
    //     })
    //   }
    // });
  };

  payOrder = () => {
    const {basket,link} = this.props;
    payOrderPost({
      "accCharge": basket.accCharge ? basket.accCharge : false,
      "acceptConditions": true,
      "deliveryZoneId":  basket.deliveryZoneId ? basket.deliveryZoneId:null,
      "gateway":  true,
      "orderDeliveryType":  false,
      "orderId":  basket.id,
      "payAmount":  "200",
      "addressId":  basket.addressId,
      "campaginCode":basket.campaginCode,
      "paymentType": "bank",
      "bankgate": basket.gateway,
      "userAddressModel" : basket.organizationAddressId ? 'organ':'user'
    }).then(response => {
      if(response.status) {
        // https://payment.iiventures.com/pay/1obnZDyB5ZN8qiNV4hRTnTQrQEXjm5
        // window.location = response.result.url;
        if (response.go_to === 'app.success-pay') {
          history.push('/success-payment')
        }
      }
    })
  }

  pushLink = () => {
    const {links} = this.props;
    if (links=== "cart") {
      this.changeBasket();
      history.push("/cart");
    }
    if (link === "/checkout") {
      // this.changeBasket();
      link ? history.push(link) : history.push("/checkout");
    }
    if (links === "bank") {
      this.payOrder()
    }
  };

  render() {
    const {data,basket,user,collapseShow} = this.props;
    const {totalCount,totalPrice} = this.state;

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
                <span className="pull-left">{user.cacheBalance}- تومان</span>
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
              <span className="text-price">{this.totalPrice()} تومان</span>
            </button>
          </div>
          <div className="StickyPrice__price-lbox">
            <button onClick={this.pushLink} type="button">تایید سفارش
              <span className="chilivery-arrow-left"> </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    changeBasketData: data => {
      dispatch(putChangeBasket(data.basketData));
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
