import React from 'react';
import './style.scss';
import ResturantImage from '../../images/test/restaurantProfile.jpg';
import AddressOriginDestination from '../../components/AddressOriginDestination';

const ResturantImagesUrl = {
  backgroundImage: `url(${ResturantImage})`,
};

export class AfterPayment extends React.PureComponent {
  render() {
    return (
      <div className="afterpayment">
        <div className="afterpayment__header">
          <div className="d-flex justify-content-center">
            <div className="p-2">
              <div className="afterpayment__header-img" style={ResturantImagesUrl}>
                {' '}
              </div>
            </div>
            <div className="p-2">
              <span>رستوران لوکس تهران (میدان پالیزی)</span>
              <p>سفارش شما با موفقیت ثبت شد.</p>
            </div>
          </div>
        </div>
        <button>پیگیری لحظه به لحظه این سفارش</button>
        <div className="afterpayment__details">
          <div className="d-flex mb-3">
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-website"> </span>
              </div>
              <span className="afterpayment__details__box-title">کد پیگیری</span>
              <p className="afterpayment__details__box-body">vnrx23d</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-website"> </span>
              </div>
              <span className="afterpayment__details__box-title">نحوه پرداخت</span>
              <p className="afterpayment__details__box-body">آنلاین</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-website"> </span>
              </div>
              <span className="afterpayment__details__box-title">تاریخ سفارش</span>
              <p className="afterpayment__details__box-body">96/7/24</p>
            </div>
            <div className="flex-fill afterpayment__details__box">
              <div className="afterpayment__details__box-icon">
                <span className="chilivery-website"> </span>
              </div>
              <span className="afterpayment__details__box-title">زمان سفارش</span>
              <p className="afterpayment__details__box-body">13:17:58</p>
            </div>
          </div>
        </div>
        <div className="p-2">
          <AddressOriginDestination />
        </div>
      </div>
    );
  }
}

export default AfterPayment;
