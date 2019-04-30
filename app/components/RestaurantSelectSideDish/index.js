import React from 'react';
import './style.scss';

const RestaurantSelectSideDish = props => (
  <div
    className={`restaurant-select hCenter rRowReverse spaceBetween ${props.className}`}
  >
    <button
      className="restaurant-select__add center"
      type="button"
      onClick={props.onClick}
    >
      <span className="content">  انتخاب {' '}</span>
      <span className="chilivery-add" />
      
    </button>
  </div>
);

export default RestaurantSelectSideDish;
