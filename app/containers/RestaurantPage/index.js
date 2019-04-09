import React from 'react';
import RestaurantFoodCard from '../../components/RestaurantFoodCard/index';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantPage extends React.Component {
  render() {
    return (
      <div className="wrapper padd15 rtl center">
        <RestaurantFoodCard />
      </div>
    );
  }
}
