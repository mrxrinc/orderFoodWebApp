import React from 'react';
import RestaurantHeader from '../../components/RestaurantHeader/index';
import RestaurantFoodCard from '../../components/RestaurantFoodCard/index';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantPage extends React.Component {
  render() {
    return (
      <div className="wrapper rtl">
        <RestaurantHeader />

        <div className="stickyMenu wFull grayBg" />

        <div className="hP10 vM10">
          <RestaurantFoodCard />
        </div>
      </div>
    );
  }
}
