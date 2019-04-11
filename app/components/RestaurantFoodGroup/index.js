import React from 'react';
import './style.scss';

const RestaurantFoodGroup = props => (
  // eslint-disable-next-line react/prop-types
  <div className="foodGroup">{props.children}</div>
);

export default RestaurantFoodGroup;
