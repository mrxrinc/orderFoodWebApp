import React from 'react';
import './style.scss';
import { CheckBox } from '../ChiliForm';

const RestaurantSideDishRow = props => (
  <div className="sideDishRow flex primary hP20 bgWhite">
    <div className="flex hP10 primary text16 wFull hCenter">
      <CheckBox {...props} />
    </div>

    <div className="center rightP10">
      <span className="leftM2">33,000</span>+
      <span className="text12 gray6 rightM5">(تومان)</span>
    </div>
  </div>
);

export default RestaurantSideDishRow;
