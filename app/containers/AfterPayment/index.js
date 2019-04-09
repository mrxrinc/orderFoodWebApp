import React from 'react';
import './style.scss';
import ResturantImage from '../../images/test/restaurantProfile.jpg';
import AddressOriginDestination from '../../components/AddressOriginDestination';
import { Button } from 'reactstrap';
import AfterPaymentCardItem from '../../components/AfterPaymentCardItem';

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
        <div className="text-center bottomM20">
          <Button color="success">پیگیری لحظه به لحظه این سفارش</Button>
        </div>
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
        <div className="p-3">
          <AddressOriginDestination />
        </div>
        <div className="p-3">
          <AfterPaymentCardItem />
        </div>
        <div className="clearfix"></div>
        <div className="afterpayment__factor p-3">
          <ul>
            <li>
              <span>مجموعه سفارش</span>
              <span className="pull-left">۱۲۷/۰۰۰ تومان</span>
            </li>
            <li>
              <span>بسته بندی</span>
              <span className="pull-left">۰ تومان</span>
            </li>
            <li>
              <span>مالیات</span>
              <span className="pull-left">۰ تومان</span>
            </li>
            <li>
              <span>هزینه ارسال</span>
              <span className="pull-left">۰ تومان</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="total">مجموعه سفارش</span>
              <span className="pull-left total">۱۲۷/۰۰۰ تومان</span>
            </li>
            <li>
              <span className="discount-code">کد تخفیف
                <span className="discount-code"> (chilivery100)</span>
              </span>
              <span className="pull-left discount-code">۵/۰۰۰ تومان-</span>
            </li>
          </ul>
          <ul>
            <li>
              <span className="bold total">قابل پرداخت</span>
              <span className="pull-left bold total">۱۲۲/۰۰۰ تومان</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AfterPayment;
