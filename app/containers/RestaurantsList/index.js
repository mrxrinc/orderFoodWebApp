import React from 'react';

import RestaurantsListItem from '../../components/RestaurantsListItem/index';
import { restaurantSearch } from '../../api/application/restaurant';
import Loading from '../../components/ChiliLoading';
import NavigationBar from '../../components/NavigationBar';
import { getRegionBySlug } from '../../api/application/region';
import SearchInput, { createFilter } from 'react-search-input';
import icon from '../../images/icons/search_no_result.png';

const KEYS_TO_FILTERS = ['name'];

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
export default class RestaurantsList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      restaurantList: [],
      citySlug: props.match.params.citySlug,
      pointSlug: props.match.params.pointSlug,
      searchTerm: '',
      // tag: '756',
    };
  }

  searchUpdated = (term)=> {
    this.setState({searchTerm: term})
  }

  componentDidMount() {
    getRegionBySlug(this.state.pointSlug).then(
      response => {
        if(response.status){
          const {cityId,mapCenter} = response.result;
          restaurantSearch(
            cityId, 
            `${mapCenter.lat},${mapCenter.lon}`,
            this.state.tag).then(
              response => {
              const restaurantList = response.result.data;
              this.setState({ restaurantList, loading: false });
            }
          );
        }
      }
    )
  }

  render() {
    const { restaurantList } = this.state;
    const filteredRestaurant = restaurantList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div className="lightBg">
        <NavigationBar 
          back
          title="لیست رستورانها"
          filter
          background
        />
        {!this.state.loading &&
          <div className="restaurant-list__search-input bgWhite">
            <SearchInput
              className="location__user-position-search-input center"
              onChange={this.searchUpdated}
              placeholder="جستجو ..."
            />
          </div>
        }
        <div className="padd15 rtl">
          {this.state.loading ? 
            <Loading /> :
            <React.Fragment>
              {filteredRestaurant.length == 0 ?
                  <div className="order-empty center"
                    style={{ height: 'calc(100vh - 200px)'}}
                  >
                    <div className="order">
                      <div className="order-empty__icon bottomP15">
                        <img className="order-empty__img" src={icon} alt=""/>
                        <span className="order-empty__title">این رستوران در این مکان وجود ندارد</span>
                      </div>
                    </div>
                  </div> :
                  filteredRestaurant.map((item, index) => (
                    <RestaurantsListItem key={index} {...item} />
                  ))
              }

            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}


