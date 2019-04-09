import React from 'react';
import './style.scss';
import Stepper from '../IncrementDecrease';

const RestaurantHeader = () => (
  <div className="header wFull bgWhite">
    <div className="cover gray4Bg relative">
      <div className="curvature absolute bottom bgWhite" />
      <div className="wFull absolute bottom center">
        <div className="avatar round10 gray5Bg relative">
          <div className="discount flex center absolute bgRed white centerText">
            <span className="text16">70</span>
            <span className="text12 topM3 leftM3">%</span>
          </div>
        </div>
      </div>
    </div>

    <div className="details relative column hCenter wFull">
      <h2 className="text18 bold centerText primary">
        رستوران لوکس تهران (میدان پالیزی)
      </h2>

      <div className="rating round10 topM10 leftP3 flex center spaceAround">
        <ul className="reset gray4 center">
          <li className="chilivery-star-square yellow text25" />
          <li className="chilivery-star-square yellow text25" />
          <li className="chilivery-star-square yellow text25" />
          <li className="chilivery-star-square yellow text25" />
          <li className="chilivery-star-square text25" />
        </ul>

        <div className="primary text16 topM2">4,3</div>

        <div className="flex center gray text10">
          (<span className="chilivery-user" />
          <span className="text14 rightM3 topM3">125</span>)
        </div>
      </div>

      <div className="onOrder flex center vM10 primary">
        <span className="dot leftM5" />
        <span className="text14">در حال پذیرش سفارش</span>
      </div>

      <div className="onOrder flex center vM5 primary">
        <span className="chilivery-motochili leftM5 text22 gray8" />
        <span className="text12">
          <span>موتوچیلی</span> (<span>1500</span> <span>تومان</span>)
        </span>
      </div>

      <ul className="">
        <li></li>
      </ul>
    </div>
  </div>
);

export default RestaurantHeader;
