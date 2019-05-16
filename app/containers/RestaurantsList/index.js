import React from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import RestaurantsListItem from '../../components/RestaurantsListItem/index';
import RestaurantFilterModal from '../../components/ChiliModal/components/RestaurantFilterModal';
import { restaurantSearch,restaurantListTag } from '../../api/application/restaurant';
import Loading from '../../components/ChiliLoading';
import NavigationBar from '../../components/NavigationBar';
import { getRegionBySlug } from '../../api/application/region';
import SearchInput, { createFilter } from 'react-search-input';
import icon from '../../images/icons/search_no_result.png';

const KEYS_TO_FILTERS = ['name'];

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
      filters:[],
      restaurantListTag:{},
      filterShow:false
    };
  }

  componentDidMount() {

    getRegionBySlug(this.state.pointSlug).then(
      response => {
        if(response.status){
          const {cityId,mapCenter} = response.result;
          this.setState({cityId,mapCenter});
          this.fetchRestauranList(cityId,mapCenter)
        }
      }
    )

    restaurantListTag().then(
      response => {
        if(response.status){
          this.setState({
            restaurantListTag: response.result
          },()=>{
            this.setState({
              filterShow:true
            })
          })
        } 
      }
    )

  }

  fetchRestauranList = (cityId,mapCenter) => {
    restaurantSearch(
      cityId, 
      `${mapCenter.lat},${mapCenter.lon}`,
      this.tagGenerator(this.state.filters)).then(
        response => {
        const restaurantList = response.result.data;
        this.setState({ restaurantList, loading: false });
      }
    );
  }

  toggleModal = () => {
    this.props.showModal({
      RestaurantFilterModal: !this.props.modals.RestaurantFilterModal,
    });
  };

  searchUpdated = (term)=> {
    this.setState({searchTerm: term})
  }

  tagGenerator = (tags) => {
    let tagsString = "";
    tags.forEach((item,index) => {
      if(
        item === "deliveryBy" || item === "discount" ||
        item === "newest" || item === "deliveryTime" ||
        item === "rating" || item === "financialCategory"
      ){
        tagsString += `&${item}=1`;
      }else{
        tagsString += `&tag[${index}]=${item}`;
      }
    });
    console.log('=========tagsString==================');
    console.log(tagsString);
    console.log('====================================');
    return tagsString;
  }

  handleFilterSelect = (event)=> {
    const {cityId,mapCenter} = this.state;

    let filter_list = this.state.filters;
    let check = event.target.checked;
    let checked_filter = event.target.value;
    if(check){
        this.setState({
            filters: [...this.state.filters, checked_filter]
        },()=>{
          this.fetchRestauranList(cityId,mapCenter)
        })
    }else{ 
        var index = filter_list.indexOf(checked_filter);
        if (index > -1) {
            filter_list.splice(index, 1);
            this.setState({
                filters: filter_list
            },()=>{
              this.fetchRestauranList(cityId,mapCenter)
            })
        } 
    }
  }

  back = () => {
    console.log('BACK');
  }

  render() {
    const { restaurantList } = this.state;
    const filteredRestaurant = restaurantList.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <div className="lightBg">
        <NavigationBar 
          back={this.back}
          title="لیست رستورانها"
          // titleOnPress
          // map
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
        <div>

          <ul>
            <li>
              A:<input 
                type="checkbox"
                name="A"
                value="709"
                onChange={this.handleFilterSelect}
              />
            </li>
            <li>
              B:<input type="checkbox" name="B" value="714"
                  onChange={this.handleFilterSelect}
              />
            </li>
            <li>
              C:<input type="checkbox" name="C" value="692"
                  onChange={this.handleFilterSelect}
              />
            </li>
          </ul>

          

        
          
        </div>
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
          
          {Object.keys(this.state.restaurantListTag).length > 0 ?
            <RestaurantFilterModal
              toggleModal={this.toggleModal}
              data={this.state.restaurantListTag}
              onChange={this.handleFilterSelect}
            />:null
          }

      </div>
    );
  }
}


const mapStateToProps = state => ({
  modals: {
    RestaurantFilterModal: state.Modals.RestaurantFilterModal,
  },
});

const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
    dispatch(showModal(showStatus))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsList);