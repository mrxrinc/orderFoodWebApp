import React from 'react';
import './style.scss';
import Stepper from '../IncrementDecrease';

const RestaurantFoodCard = props => (
  <div className="foodCard" onClick={props.onClick}>
    <div className="head center">
      <div className="rightHand center relative">
        <div
          className="imageBox cover gray4Bg"
          style={{ backgroundImage: `url(${props.foodImg})` }}
        />

        <span className="discount flex center absolute bgRed white centerText">
          <span className="text14">30</span>
          <span className="text12 topM3 leftM3">%</span>
        </span>

        <span className="zoom flex center absolute white">
          <span className="chilivery-zoom text18" />
        </span>
      </div>
      <div className="leftHand relative">
        <h2 className="font bold largeText primary bottomM10">باگت جردن</h2>

        <p className="description gray5 overhide bottomM5">
          250 گرم گوشت، پنیر مخصوص، پیاز حلقه شده، سس باربیوکیو، کاهو، گوجه
          فرنگی، جعفری، ...
        </p>

        <div className="reviews flex topM3">
          <div className="flex i2 center gray">
            <span className="text14 leftM3 topM3">87</span>
            <span className="chilivery-user text12" />
          </div>

          <div className="flex i2 center tagBg round5">
            <span className="white text14 leftM3 topM3">4/7</span>
            <span className="chilivery-smiley-good2 white text12" />
          </div>
        </div>

        <div className="absolute top left center favorite">
          <span className="chilivery-fav-full black red" />
        </div>
      </div>
    </div>

    <div className="footer flex primary">
      <ul className="flex reset hInherit">
        <li className="moto flex hCenter rightP10 overLine gray">
          <span className="text12">25,000</span>
          <span className="text8 topM3 rightM3">تومان</span>
        </li>
        <li className="moto flex hCenter rightP10 bold primary">
          <span className="text16">20,000</span>
          <span className="text10 topM3 rightM3">تومان</span>
        </li>
      </ul>
      <div className="flex price hP10 leftContent primary text16 wFull hCenter">
        <Stepper fontSize="18"/>
      </div>
    </div>
  </div>
);

export default RestaurantFoodCard;
