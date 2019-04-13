import React from 'react';
import './style.scss';
import { checkPropTypes } from 'prop-types';

const RestaurantHeaderCheckout = props => (
  <div className="header wFull">
    <div
      className="cover gray4Bg relative"
      style={{ backgroundImage: `url(${props.cover})` }}
    >
      <div className="curvature absolute bottom gray2Bg" />
      <div className="wFull absolute bottom center">
        <div
          className="avatar round10 gray5Bg relative centerBg contain"
          style={{ backgroundImage: `url(${props.logo})` }}
        >
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


    </div>
  </div>
);

export default RestaurantHeaderCheckout;
