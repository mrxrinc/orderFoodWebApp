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
      data:{},
      userPaid:0
    };
  }


  componentDidMount() {
    this.dataAfterPayment();
  }

  calcTotalFunction = () => {
    const {data} = this.state;
    if (data.campaign.amount) {
       this.setState({
         userPaid: data.amount.total - data.campaign.amount
       })
    } else {
      this.setState({
        userPaid: data.amount.total
      })
    }
  }

  dataAfterPayment = () => {
    getDataAfterPayment({
      orderId:this.props.match.params.id
    }).then(response => {
      this.props.resetBasket();
      this.setState({
        data:response.result
      }, () => this.calcTotalFunction())
    });
  };
  render() {
    const {data,userPaid} = this.state;
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
              {/*<p>?????????? ?????? ???? ???????????? ?????? ????.</p>*/}
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
            <button className="btn btn-success">?????????? ?????????? ?????????? ????</button>
            <button className="btn btn-danger">?????? ??????????</button>
          </div>
          <div className="afterpayment__body__map">
            <div className="afterpayment__body__map-box">
              {data.restaurant &&
              <MapContainer
                isMarkerShown
                restaurantPoint={data.restaurant.point}
                userPoint={data.user.point}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkG04u0uupV9fgz0kQhfrQM8BUx1NWMf0&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />}
            </div>
          </div>
        </div>

        {/*<div className="text-center bottomM20">*/}
          {/*<Button color="success">???????????? ???????? ???? ???????? ?????? ??????????</Button>*/}
        {/*</div>*/}
        <div className="afterpayment__details">
          <div className="d-flex mb-3">
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-website"> </span>
              </div>
              <span className="afterpayment__details__box-title">???? ????????????</span>
              <p className="afterpayment__details__box-body text-truncate">{data.hashId}</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-wallet-2"> </span>
              </div>
              <span className="afterpayment__details__box-title">?????????? ??????????</span>
              <p className="afterpayment__details__box-body">{data.delivery_type}</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-calendar"> </span>
              </div>
              <span className="afterpayment__details__box-title">?????????? ??????????</span>
              <p className="afterpayment__details__box-body">{data.date}</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-time"> </span>
              </div>
              <span className="afterpayment__details__box-title">???????? ??????????</span>
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
              <span>???????????? ??????????</span>
              <span className="pull-left">{data.amount && data.amount.total - data.amount.pack - data.amount.carry - data.amount.tax} ??????????</span>
            </li>
            <li>
              <span>???????? ????????</span>
              <span className="pull-left">{data.amount && data.amount.pack} ??????????</span>
            </li>
            <li>
              <span>????????????</span>
              <span className="pull-left">{data.amount &&data.amount.tax} ??????????</span>
            </li>
            <li>
              <span>?????????? ??????????</span>
              <span className="pull-left">{data.amount && data.amount.carry} ??????????</span>
            </li>
            {/*<li className="gift">*/}
              {/*<span>???? ??????????</span>*/}
              {/*<span className="pull-left">{data.campaign && data.campaign.amount} ??????????</span>*/}
            {/*</li>*/}
          </ul>
          {data.campaign && data.campaign.amount > 0 &&
            <ul>
              <li>
                <span className="total">???????????? ??????????</span>
                <span className="pull-left total">{data.amount && data.amount.total} ??????????</span>
              </li>
              <li>
                <span className="discount-code">???? ??????????
                  <span className="discount-code"> ({data.campaign && data.campaign.code})</span>
                </span>
                <span className="pull-left discount-code"> {data.campaign && data.campaign.amount} ?????????? </span>
              </li>
            </ul>
          }

          <ul>
            <li>
              <span className="bold total">???????? ????????????</span>
              <span className="pull-left bold total">{userPaid} ??????????</span>
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



