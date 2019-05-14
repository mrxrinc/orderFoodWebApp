import React from 'react';
import './style.scss';

const RestaurantFoodGroup = props => (
  <div className="foodGroup" id={props.tag}>
    <div className="head bottomM10">
      <div className="flex hCenter rightP10 vM5 primary">
        <span
          className={`chilivery-restaurant-${
            props.icon
          } leftM10 text28 primary`}
        />
        <span className="text14 topM5 bold">{props.title}</span>
      </div>
    </div>

    <div className="items">{props.children}</div>
  </div>
);

export default RestaurantFoodGroup;
