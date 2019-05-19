import React from 'react';
import Countdown from 'react-countdown-now';
import './style.scss';
import ResturantImage from '../../images/test/restaurantProfile.jpg';
import AddressOriginDestination from '../../components/AddressOriginDestination';
import { Button } from 'reactstrap';
import AfterPaymentCardItem from '../../components/AfterPaymentCardItem';
import MapContainer from '../../components/AfterPaymentMap';
import { getDataAfterPayment } from '../../api/account';
import status02 from '../../images/after-payment-status/after-payment-status-02.png';
import { campaginCodeChanged, changeBasket, resetBasket } from '../../actions/Basket';
import { connect } from 'react-redux';
import { restaurantSearch } from '../../api/application/restaurant';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"




const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
  </GoogleMap>
))


export class AfterPayment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:{}
    };
  }


  componentDidMount() {
    this.dataAfterPayment();
  }

  dataAfterPayment = () => {
    getDataAfterPayment({
      orderId:this.props.match.params.id
    }).then(response => {
      this.props.resetBasket();
      this.setState({
        data:response.result
      })
    });
  };
  render() {
    const {data} = this.state;
    const {basket} = this.props;
    // Renderer callback with condition
    const renderer = ({ hours, minutes, seconds, completed }) => {
      if (completed) {
        // Render a completed state
        history.listen('/after-payment')
        // return <Redirect to='/after-payment' />
      } else {
        // Render a countdown
        return <span>{minutes}:{seconds}</span>;
      }
    };
    return (
      <div className="afterpayment">
        {/*<div className="afterpayment__header">*/}
          {/*<div className="d-flex justify-content-center">*/}
            {/*<div className="p-2">*/}
              {/*<div className="afterpayment__header-img" style={{ backgroundImage: `url(${ResturantImage})`}}>*/}
                {/*{' '}*/}
              {/*</div>*/}
            {/*</div>*/}
            {/*<div className="p-2">*/}
              {/*<span>{data.restaurant && data.restaurant.name}</span>*/}
              {/*<p>سفارش شما با موفقیت ثبت شد.</p>*/}
            {/*</div>*/}
          {/*</div>*/}
        {/*</div>*/}
        <div className="afterpayment__header">
          <div className="afterpayment__header__status">
            <div className="afterpayment__header__status-img" style={{ backgroundImage: `url(${status02})`}}></div>
            {data.restaurant && <div className="afterpayment__header__status-profile" style={{ backgroundImage: `url('${data.restaurant.profile}')`}}></div>}
          </div>
        </div>
        <div className="afterpayment__body">
          <div className="afterpayment__body-status">
            <span>{data.restaurant && data.restaurant.name}</span>
            <p>{data.status}</p>
          </div>
          <div className="countdown seconds">
            <div className="line"></div>
            {true && <Countdown date={Date.now() + 1000000} renderer={renderer}/>}
          </div>
          <div className="afterpayment__body-action">
            <button className="btn btn-success">سفارش تحویل گرفته شد</button>
            <button className="btn btn-danger">ثبت تاخیر</button>
          </div>
          <div className="afterpayment__body__map">
            <div className="afterpayment__body__map-box">
              {data.restaurant &&
              <MapContainer
                isMarkerShown
                restaurantPoint={data.restaurant.point}
                userPoint={data.user.point}
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />}
            </div>
          </div>
        </div>

        {/*<div className="text-center bottomM20">*/}
          {/*<Button color="success">پیگیری لحظه به لحظه این سفارش</Button>*/}
        {/*</div>*/}
        <div className="afterpayment__details">
          <div className="d-flex mb-3">
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-website"> </span>
              </div>
              <span className="afterpayment__details__box-title">کد پیگیری</span>
              <p className="afterpayment__details__box-body text-truncate">{data.hashId}</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-wallet-2"> </span>
              </div>
              <span className="afterpayment__details__box-title">تحویل سفارش</span>
              <p className="afterpayment__details__box-body">{data.delivery_type}</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-calendar"> </span>
              </div>
              <span className="afterpayment__details__box-title">تاریخ سفارش</span>
              <p className="afterpayment__details__box-body">{data.date}</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-time"> </span>
              </div>
              <span className="afterpayment__details__box-title">زمان سفارش</span>
              <p className="afterpayment__details__box-body">{data.time}</p>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
        <div className="p-3">
          <AddressOriginDestination dataRestaurant={data.restaurant} dataUser={data.user}/>
        </div>
        <div className="p-3">
          <AfterPaymentCardItem data={data.items} />
        </div>
        <div className="clearfix"></div>
        <div className="afterpayment__factor p-3">
          <ul>
            <li>
              <span>مجموعه سفارش</span>
              <span className="pull-left">{data.amount && data.amount.total - data.amount.pack - data.amount.carry - data.amount.tax} تومان</span>
            </li>
            <li>
              <span>بسته بندی</span>
              <span className="pull-left">{data.amount && data.amount.pack} تومان</span>
            </li>
            <li>
              <span>مالیات</span>
              <span className="pull-left">{data.amount &&data.amount.tax} تومان</span>
            </li>
            <li>
              <span>هزینه ارسال</span>
              <span className="pull-left">{data.amount && data.amount.carry} تومان</span>
            </li>
          </ul>
          {/*<ul>*/}
            {/*<li>*/}
              {/*<span className="total">مجموعه سفارش</span>*/}
              {/*<span className="pull-left total">۱۲۷/۰۰۰ تومان</span>*/}
            {/*</li>*/}
            {/*<li>*/}
              {/*<span className="discount-code">کد تخفیف*/}
                {/*<span className="discount-code"> (chilivery100)</span>*/}
              {/*</span>*/}
              {/*<span className="pull-left discount-code">۵/۰۰۰ تومان-</span>*/}
            {/*</li>*/}
          {/*</ul>*/}
          <ul>
            <li>
              <span className="bold total">قابل پرداخت</span>
              <span className="pull-left bold total">{data.amount && data.amount.total} تومان</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    resetBasket: () => {
      dispatch(resetBasket());
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
)(AfterPayment);



