import React from 'react';
import './style.scss';

const RestaurantsListItem = () => (
  <div className="listItem">
    <div className="head center">
      <div className="right center relative">
        <div className="imageBox bg" />
        <span className="discount flex center absolute top left bgRed white centerText">
          <span className="text14">30</span>
          <span className="text12 topM3 leftM3">%</span>
        </span>
      </div>
      <div className="left relative">
        <h2 className="font bold largeText primary">باگت جردن</h2>

        <ul className="flex">
          <li className="text12">ایتالیایی</li>
          <li className="text12">ایتالیایی</li>
          <li className="text10">ایتالیایی</li>
        </ul>

        <div className="flex economy spaceBetween">
          <div className="flex hCenter">
            <span className="chilivery-economic_level3 primary flex hCenter" />
            <span className="chilivery-restaurant-vegeterian tag" />
          </div>

          <div className="suggested flex center">
            <span className="white text12 centerText hP10">پیشنهادی</span>
          </div>
        </div>

        <div className="absolute top left center favorite">
          <span className="chilivery-fav-full black red" />
        </div>
      </div>
    </div>

    <div className="addressRate flex rRow wFull">
      <div className="wFull flex hCenter rightP10 gray overhide">
        <span className="chilivery-location text18" />
        <span className="text12 rightM5">سهروردی شمالی - پالیزی</span>
      </div>
      <div className="reviews flex leftM10 vM3">
        <div className="flex i2 center gray">
          <span className="text16 leftM3 topM5">87</span>
          <span className="chilivery-user text14" />
        </div>

        <div className="flex i2 center tagBg round5">
          <span className="white text16 leftM3 topM5">4/7</span>
          <span className="chilivery-smiley-good2 white text14" />
        </div>
      </div>
    </div>

    <div className="fullLine vM5" />

    <div className="delivery flex rRow primary">
      <div className="moto flex hCenter rightP10 overhide">
        <span className="chilivery-motochili text25" />
        <span className="text14 bold rightM10">موتوچیلی</span>
      </div>
      <div className="flex price hP10 leftContent primary text16 wFull hCenter">
        <span className="leftM5">1500</span>
        <span>تومان</span>
      </div>
    </div>
  </div>
);

export default RestaurantsListItem;
