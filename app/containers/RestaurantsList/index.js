import React from 'react';
import RestaurantsListItem from '../../components/RestaurantsListItem/index';
import logo from '../../images/restaurant-logo.jpg';
import { restaurantSearch } from '../../api/application/restaurant';
import Loading from '../../components/ChiliLoading';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      restaurantList: [],
      cityId: props.match.params.cityId,
      point: props.match.params.point,
      // tag: '756',
    };
  }

  componentDidMount() {
    restaurantSearch(this.state.cityId, this.state.point, this.state.tag).then(
      response => {
        const restaurantList = response.result.data;
        this.setState({ restaurantList, loading: false });
      }
    );
  }

  render() {
    const { restaurantList } = this.state;
    return (
      <div className="lightBg padd15 rtl">
        {this.state.loading ? 
          <Loading /> :
          restaurantList.map((item, index) => (
            <RestaurantsListItem key={index} {...item} />
          ))
        }
      </div>
    );
  }
}
