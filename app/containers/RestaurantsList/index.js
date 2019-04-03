import React from 'react';
import RestaurantsListItem from '../../components/RestaurantsListItem/index';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantsList extends React.PureComponent {
  render() {
    return (
      <div className="listWrapper padd15 rtl">
        <RestaurantsListItem />
        <RestaurantsListItem />
        <RestaurantsListItem />
        <RestaurantsListItem />
        <RestaurantsListItem />
      </div>
    );
  }
}
