import React from 'react';
import ListItem from '../../components/ListItem/index';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantsList extends React.PureComponent {
  render() {
    return (
      <div className="listWrapper padd15 rtl">
        <ListItem />
        {/* <div>asas</div> */}
      </div>
    );
  }
}
