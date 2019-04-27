import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import Countdown from 'react-countdown-now';
import './style.scss';
import status01 from '../../images/after-payment-status/after-payment-status-01.png';
import restaurantProfile from '../../images/test/restaurantProfile.jpg';

const Completionist = () => <span>ok</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Redirect to='/after-payment' />
  } else {
    // Render a countdown
    return <span>{minutes}:{seconds}</span>;
  }
};

/* eslint-disable react/prefer-stateless-function */
export class SuccessPayment extends React.PureComponent {

  render() {
    return (
      <div className="SuccessPayment">
        <div className="SuccessPayment__header">
          <div className="SuccessPayment__header__status">
            <div className="SuccessPayment__header__status-img" style={{ backgroundImage: `url(${status01})`}}></div>
          </div>
        </div>
        <div className="SuccessPayment__body text-center">
          <div className="SuccessPayment__body-img" style={{ backgroundImage: `url(${restaurantProfile})`}}></div>
          <span>رستوران باماهاس (میدان پالیزی)</span>
          <p>سفارش شما با موفقیت ثبت شد.</p>
        </div>
        <div className="SuccessPayment__footer">
          <div className="countdown seconds">
            <div className="line"></div>
            <Countdown date={Date.now() + 10000} renderer={renderer}/>
            <p>لطفا شکیبا باشید...</p>
          </div>
        </div>
      </div>
    );
  }
}

SuccessPayment.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default SuccessPayment;
