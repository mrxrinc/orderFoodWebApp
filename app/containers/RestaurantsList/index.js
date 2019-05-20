import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import RestaurantsListItem from '../../components/RestaurantsListItem/index';
import RestaurantFilterModal from '../../components/ChiliModal/components/RestaurantFilterModal';
import { restaurantSearch, restaurantListTag } from '../../api/application/restaurant';
import Loading from '../../components/ChiliLoading';
import NavigationBar from '../../components/NavigationBar';
import { getRegionBySlug } from '../../api/application/region';
import SearchInput, { createFilter } from 'react-search-input';
import icon from '../../images/icons/search_no_result.png';

const KEYS_TO_FILTERS = ['name'];
const otherFilter = {
  "hasDiscount": "تخفیف دار",
  "deliveryBy": "موتوچیلی",
  "created": "جدیدترین ها",
  "speed": "زمان ارسال",
  "rating": "بالاترین امتیاز",
  "price": "سطح اقتصادی"

}
import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class RestaurantsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      restaurantList: [],
      citySlug: props.match.params.citySlug,
      pointSlug: props.match.params.pointSlug,
      searchTerm: '',
      filters: [],
      restaurantListTag: {},
      filterShow: false,
      filterValidation: false,
      concatTag: [],
      mapCenter:''
    };
  }

  componentDidMount() {
    if(this.state.pointSlug){
      getRegionBySlug(this.state.pointSlug).then(
        response => {
          if (response.status) {
            const { cityId, mapCenter } = response.result;
            this.setState({ cityId, mapCenter });
            this.fetchRestauranList(cityId, mapCenter)
          }
        }
      )
    }else{
      this.setState({ 
        cityId:this.props.userPosition.cityId,
      },()=>{
        this.fetchRestauranList(this.state.cityId)
      });
    }

    restaurantListTag().then(
      response => {
        if (response.status) {
          const res = response.result;
          this.setState({
            restaurantListTag: res,
            concatTag: res.restaurantType.concat(res.foodType)
          }, () => {
            this.setState({
              filterShow: true
            })
          })
        }
      }
    )
  }

  fetchRestauranList = (cityId, mapCenter) => {
    restaurantSearch(
      cityId,
      `${ mapCenter ? mapCenter.lat + ',' + mapCenter.lon : '' }`,
      this.tagGenerator(this.state.filters)).then(
        response => {
          const restaurantList = response.result.data;
          const tagsCount = response.result.tagsCount;
          this.setState({ restaurantList, tagsCount, loading: false });
        }
      );
  }

  toggleModal = () => {
    this.props.showModal({
      RestaurantFilterModal: !this.props.modals.RestaurantFilterModal,
    });
  };

  searchUpdated = (term) => {
    this.setState({ searchTerm: term })
  }

  tagGenerator = (tags) => {
    let tagsString = "";
    tags.forEach((item, index) => {
      if (
        item === "created" || item === "speed" ||
        item === "rating" || item === "price"
      ) {
        tagsString += `&sort_by_${item}=1`;
      } else if (item === "deliveryBy" || item === "hasDiscount") {
        tagsString += `&${item}=1`;
      } else {
        tagsString += `&tag[${index}]=${item}`;
      }
    });
    return tagsString;
  }

  onFilterValidation = (value) => {
    const { cityId, mapCenter } = this.state;
    if (value) {
      this.setState({ filterValidation: true }, () => {
        this.fetchRestauranList(cityId, mapCenter);
        this.toggleModal();
      })
    } else {
      this.setState({
        filterValidation: false,
        filters: []
      }, () => {
        this.fetchRestauranList(cityId, mapCenter);
        this.toggleModal();
      })
    }
  }

  handleFilterSelect = (event) => {
    let filter_list = this.state.filters;
    let check = event.target.checked;
    let checked_filter = event.target.value;
    let check_type = event.target.type;

    if (check) {
      if (check_type !== "radio") {
        this.setState({ filters: [...this.state.filters, checked_filter] })
      } else {
        let cloneFilters = [...this.state.filters];
        cloneFilters.forEach(radio => {
          if (
            radio === "created" ||
            radio === "speed" ||
            radio === "rating" ||
            radio === "price"
          ) {
            let index = cloneFilters.indexOf(radio);
            if (index > -1) {
              cloneFilters.splice(index, 1);
            }
          }
        });
        this.setState({
          filters: [...cloneFilters, checked_filter]
        })
      }
    } else {
      var index = filter_list.indexOf(checked_filter);
      if (index > -1) {
        filter_list.splice(index, 1);
        this.setState({
          filters: filter_list
        })
      }
    }
  }
  deleteFilter = (filter) => {
    const { cityId, mapCenter } = this.state;
    console.log(this.state.filters)
    let filtersClone = [...this.state.filters];
    var index = filtersClone.indexOf(filter);
    if (index > -1) {
      filtersClone.splice(index, 1);
    }
    this.setState({
      filters: filtersClone,
    }, () => {
      console.log(filtersClone, this.state.filters);
      this.fetchRestauranList(cityId, mapCenter);
    })
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
          toggleModal={this.toggleModal}
          // like
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

        {this.state.filters.length > 0 ?
          <div className="rightP10 leftP10">
            {this.state.filters.map((filter, index) =>
              <React.Fragment>
                {(
                  filter === "deliveryBy" ||
                  filter === "hasDiscount" ||
                  filter === "created" ||
                  filter === "speed" ||
                  filter === "rating" ||
                  filter === "price"
                ) ?
                  <div className="chip">
                    {otherFilter[filter]}
                    <i className="chilivery-close rightP5" onClick={() => this.deleteFilter(filter)} />
                  </div> : null
                }
                {this.state.concatTag.map(tag =>
                  <React.Fragment>
                    {parseInt(filter) === tag.id ? (
                      <div className="chip">
                        {tag.name}
                        <i className="chilivery-close rightP5" onClick={() => this.deleteFilter(filter)} />
                      </div>
                    ) : null
                    }
                  </React.Fragment>
                )
                }
              </React.Fragment>
            )}
          </div>
          : null

        }
        <div className="padd15 rtl">
          {this.state.loading ?
            <Loading /> :
            <React.Fragment>
              {filteredRestaurant.length == 0 ?
                <div className="order-empty center"
                  style={{ height: 'calc(100vh - 200px)' }}
                >
                  <div className="order">
                    <div className="order-empty__icon bottomP15">
                      <img className="order-empty__img" src={icon} alt="" />
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
        {this.state.restaurantList.length > 0 ?
          <React.Fragment>
            {/* {Object.keys(this.state.restaurantListTag).length > 0 ? */}
              <RestaurantFilterModal
                toggleModal={this.toggleModal}
                data={this.state.restaurantListTag}
                onChange={this.handleFilterSelect}
                onFilterValidation={this.onFilterValidation}
                filters={this.state.filters}
                tagsCount={this.state.tagsCount}
              />
            {/* } */}
          </React.Fragment> : <div className="order-empty center"
            style={{ height: 'calc(100vh - 200px)' }}
          >
            <div className="order">
              <div className="order-empty__icon bottomP15">
                <img className="order-empty__img" src={icon} alt="" />
                <span className="order-empty__title">این رستوران در این مکان وجود ندارد</span>
              </div>
            </div>
          </div>
        }

      </div>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    RestaurantFilterModal: state.Modals.RestaurantFilterModal,
  },
  userPosition: state.UserPosition.neighborhood
});

const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
    dispatch(showModal(showStatus))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);