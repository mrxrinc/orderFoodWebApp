import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import Countdown from 'react-countdown-now';
import './style.scss';
import status01 from '../../images/after-payment-status/after-payment-status-01.png';
import restaurantProfile from '../../images/test/restaurantProfile.jpg';
import { getDataAfterPayment } from '../../api/account';
import { connect } from 'react-redux';
import Food from '../../images/test/food.jpg';
import { history } from '../../store';

const divStyle = {
  backgroundImage: `url(${Food})`,
};



/* eslint-disable react/prefer-stateless-function */
export class SuccessPayment extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:{},
      showCountDown:false
    };
  }

  componentDidMount() {
    this.dataAfterPayment();
  }
// Renderer callback with condition
  renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      // history.listen('/after-payment')
      return <Redirect to="/after-payment" />
    } else {
      // Render a countdown
      return <span>{minutes}:{seconds}</span>;
    }
  };

  dataAfterPayment = () => {
    getDataAfterPayment({
      orderId:this.props.basket.id
    }).then(response => {
      this.setState({
        data:response.result,
        showCountDown:true
      })
    });
  };

  render() {
    const {showCountDown,data} = this.state;
    return (
      <div className="SuccessPayment">
        <div className="SuccessPayment__header">
          <div className="SuccessPayment__header__status">
            <div className="SuccessPayment__header__status-img" style={{ backgroundImage: `url(${status01})`}}></div>
          </div>
        </div>
        <div className="SuccessPayment__body text-center">
          {data.restaurant && <div className="SuccessPayment__body-img" style={{ backgroundImage: `url('${data.restaurant.profile}')`}}/>}
          <span>{data.restaurant && data.restaurant.name}</span>
          <p>سفارش شما با موفقیت ثبت شد.</p>
        </div>
        <div className="SuccessPayment__footer">
          <div className="countdown seconds">
            <div className="line"></div>
            {showCountDown && <Countdown date={Date.now() + 1000} renderer={this.renderer}/>}
            <p>لطفا شکیبا باشید...</p>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  basket:state.Basket
});

export default connect(
  mapStateToProps,
  null
)(SuccessPayment);


