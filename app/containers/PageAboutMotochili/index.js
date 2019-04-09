import React from 'react';
import './style.scss';
// eslint-disable-next-line react/prefer-stateless-function
// import moduleName from '../../images/icons/';
import map from './map.png';
import motoSpeed from '../../images/icons/motochili_speed.png';
import motoPrice from '../../images/icons/motochili_price.png';
import motoDelivery from '../../images/icons/motochili_delivery.png';
import motoSupport from '../../images/icons/motochili_support.png';
export default class PageAboutMotochili extends React.PureComponent {
  render() {
    return (
      <div className="motochili">
        <div className="container motochili-containt">
          <div className="motochili-explain">
            <div className="motochili-explain__title1">
              <p className="motochili__title1">
                موتوچیلی سامانه اختصاصی حمل و نقل سفارشات چیلیوری می باشد. این سیستم در تلاش است تا با بهره گیری از تکنولوژی های جدید خدماتی بهینه و در کمترین زمان ممکن را به شما ارائه دهد.
              </p>
            </div>
            <div className="motochili-explain__box1">
              <i className="icon chilivery-motochili" />
              <p className="motochili__box1"> فروشندگانی که با این علامت مشخص شده اند سفارش‌تان را از طریق موتوچیلی ارسال می نمایند.</p>
            </div>
            <div className="motochili-explain__box2">
              <h5 className="motochili__title2">مزایای استفاده از موتوچیلی چیست؟</h5>
              <div className="motochili__box2">
                <img src={map} alt="process" />
                <p className="motochili__textbox2"> (پیگیری سفارش (به زودی <br />
                  مشاهده مراحل سفارش و نام و محل دقیق پیک به صورت آنلاین بر روی نقشه
                </p>
              </div>
            </div>
            <div className="motochili-explain__list">
              <div className="motochili__list">
                <div className="motochili__item">
                  <div className="item1">
                    <img src={motoSpeed} alt="chilivery" />
                  </div>
                  <div className="item2">
                    <h6>دریافت سریع سفارش</h6>
                    <p>سفارش خود را خارج از صف سفارشات رستوران سریعتر تحویل بگیرید.</p>
                  </div>
                </div>
                <div className="motochili__item">
                  <div className="item1">
                    <img src={motoPrice} alt="tag" />
                  </div>
                  <div className="item2">
                    <h6>کاهش هزینه ارسال</h6>
                    <p>در بسیاری از موارد‍, هزینه ارسال سفارش کمتر از حالت عادی می باشد.</p>
                  </div>
                </div>
                <div className="motochili__item">
                  <div className="item1">
                    <img src={motoDelivery} alt="box" />
                  </div>
                  <div className="item2">
                    <h6>حمل و نقل تخصصی غذا</h6>
                    <p>با استفاده از باکس ویژه حمل غذا سفارشتان را گرم تر و با کیفیت بهتری دریافت می شود.</p>
                  </div>
                </div>
                <div className="motochili__item">
                  <div className="item1">
                    <img src={motoSupport} alt="customersupport" />
                  </div>
                  <div className="item2">
                    <h6>پشتیبانی چیلیوری</h6>
                    <p>پشتیبانی چیلیوری با ارتباط نزدیک با موتوچیلی در هر ساعت از شبانه روز پاسخگوی شماست.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
