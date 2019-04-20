import React from 'react';
import RestaurantsListItem from '../../components/RestaurantsListItem/index';
import logo from '../../images/restaurant-logo.jpg';
import { restaurantSearch } from '../../api/application/restaurant';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      restaurantList: [],
      cityId: '2',
      point: '35.737226079112496,51.41403033862298',
      tag: '756',
    };
  }

  componentDidMount() {
    restaurantSearch(this.state.cityId, this.state.point, this.state.tag).then(
      response => {
        const restaurantList = response.result.data;
<<<<<<< HEAD
=======

>>>>>>> 4fbfd726608effb79c508cc391ac4377461dcb71
        this.setState({ restaurantList });
        console.log('=============homeGetResponse=================');
        console.log(this.state.restaurantList);
        console.log('====================================');
      },
    );
  }

  render() {
    const { restaurantList } = this.state;
    return (
      <div className="lightBg padd15 rtl">
        {restaurantList.map((item, index) => (
          <RestaurantsListItem key={index} data={item} logo={item.profile} />
        ))}
<<<<<<< HEAD
=======
        {/* <RestaurantsListItem logo={logo} />
        <RestaurantsListItem logo={logo} />
        <RestaurantsListItem logo={logo} />
        <RestaurantsListItem logo={logo} /> */}
>>>>>>> 4fbfd726608effb79c508cc391ac4377461dcb71
      </div>
    );
  }
}
