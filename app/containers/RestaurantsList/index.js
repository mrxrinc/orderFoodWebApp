import React from 'react';
import RestaurantsListItem from '../../components/RestaurantsListItem/index';
import logo from '../../images/restaurant-logo.jpg';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantsList extends React.PureComponent {
  render() {
    return (
      <div className="lightBg padd15 rtl">
        <RestaurantsListItem logo={logo} />
        <RestaurantsListItem logo={logo} />
        <RestaurantsListItem logo={logo} />
        <RestaurantsListItem logo={logo} />
        <RestaurantsListItem logo={logo} />
      </div>
    );
  }
}
