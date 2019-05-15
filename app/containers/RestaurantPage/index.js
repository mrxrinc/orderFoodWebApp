/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
// import { Button } from 'reactstrap';
import { showModal } from '../../actions/Modals';
// import { history } from '../../store';

import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantFoodGroup from '../../components/RestaurantFoodGroup';
import RestaurantFoodCard from '../../components/RestaurantFoodCard';

// import Modal from '../../components/ChiliModal';
// import Stepper from '../../components/ChiliStepper';
import RestaurantModal from '../../components/ChiliModal/components/RestaurantModal';
import StickyPrice from '../../components/StickyPrice';
import NavigationBar from '../../components/NavigationBar';
import {
  restaurantDetail,
  createBasket,
  restaurantDetailBySlug,
} from '../../api/application/restaurant';
import { changeBasketPost } from '../../api/account';

import Loading from '../../components/ChiliLoading';
import { accChargedChanged, addToBasket } from '../../actions/Basket';
import { storeRestaurant } from '../../actions/restaurant';
import './style.scss';
import TabThree from './components/TabThree';
import TabTwo from './components/TabTwo';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import $ from 'jquery';
import { object } from 'prop-types';
import icon from '../../images/icons/no_address.png'


class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      citySlug: this.props.match.params.citySlug,
      restaurantSlug: this.props.match.params.restaurantSlug,
      restaurant: null,
      tabOne: true,
      tabTwo: false,
      tabThree: false,
      activeTab: 'tabOne',
      basketToState: {},
      basketObjItems: {},
      activeSticky: null,
      isRestaurant: true,
      StickyPriceShow:false
    };
  }

  openFoodModal = food => {
    this.setState({ modalData: food }, () => {
      if (
        typeof this.props.basket.items[this.state.modalData.id] != 'undefined'
      ) {
        this.state.modalData.item.itemCount = this.props.basket.items[
          this.state.modalData.id
        ].itemCount;
      }
      this.toggleModal();
    });
  };

  componentDidMount() {
    this.props.accChargeChanged({ accCharge: false })
    restaurantDetailBySlug(this.state.citySlug, this.state.restaurantSlug).then(restaurantResp => {
      this.setState({ restaurant: restaurantResp.result }, () => {
        console.log('RESTAURANT DETAIL ====>>>> ', this.state.restaurant);
        if (restaurantResp.status) {
          createBasket(this.state.restaurant.id).then((response) => {
            this.setState({
              basketObjItems: response.result.items,
              basketObj: response.result,
            }, () => {

              let basketToArray = Object.keys(this.state.basketObjItems);
              let basketStoreObjItems = this.props.basket.items;
              let basketStoreObj = this.props.basket;


              if (basketToArray.length > 0) {
                if (JSON.stringify(this.state.basketObjItems) === JSON.stringify(basketStoreObjItems)) {
                  this.setState({
                    basketToState: basketStoreObj,
                  }, () => {
                    console.log('========= server full from current =================');
                    console.log('basketToState from store');
                    console.log(this.state.basketToState);
                    console.log('====================================');
                    // this.setState({
                    //   StickyPriceShow:true
                    // })
                  })
                } else {
                  this.props.addToBasket(this.state.basketObj);
                  console.log('============= server full from current ==============');
                  console.log('setBasketToStore from server');
                  console.log('====================================');
                }

              } else {
                if (this.state.basketObj.id === basketStoreObj.id) {
                  this.setState({
                    basketToState: basketStoreObj,
                    }, () => {
                      console.log('========== server null from current ================');
                      console.log('basketToState from store');
                      console.log(this.state.basketToState);
                      console.log('====================================');
                    })
                  } else {
                    this.props.addToBasket(this.state.basketObj);
                    console.log('============ server null from other =================');
                    console.log('setBasketToStore from server');
                    console.log('====================================');
                  }
                }
              })
          })
          .catch(err => {
            console.log(err);
          });
        } else {
          this.setState({ isRestaurant: false });
        }
      });
    });
  }

  componentDidUpdate(prevProps){
    if(prevProps.basket !== this.props.basket){
      console.log()
      if(Object.keys(this.props.basket.items).length == 0){
        this.setState({
          StickyPriceShow:false
        })
      }else{
        this.setState({
          StickyPriceShow:true
        })
      }

    }
  }

  tabClick = slug => {
    switch (slug) {
      case 'tabOne':
        this.setState({
          tabOne: true,
          tabTwo: false,
          tabThree: false,
          activeTab: 'tabOne'
        });
        break;
      case 'tabTwo':
        this.setState({
          tabOne: false,
          tabTwo: true,
          tabThree: false,
          activeTab: 'tabTwo',
        });
        break;
      case 'tabThree':
        this.setState({
          tabOne: false,
          tabTwo: false,
          tabThree: true,
          activeTab: 'tabThree',
        });
        break;

      default:
        break;
    }
  };

  toggleModal = () => {
    this.props.showModal({
      RestaurantPageModal: !this.props.modals.RestaurantPageModal,
    });
  };

  scrollPointer = cat => {
    console.log('CAT', `cat-${cat.id}`);
    this.setState({ activeSticky: `cat-${cat.id}` });
  }

  render() {
    const data = this.state.restaurant;
    $(document).ready(function () {
      $('#owl').owlCarousel({
        rtl: true,
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        autoWidth: true
      });
    })

    return (
      <React.Fragment>
        {this.state.isRestaurant ? (
          <div>
            <NavigationBar
              back
              title={data && data.name}
              // like
              // share
              background
            />
            {data ? (
              <React.Fragment>
                <div className="lightBg rtl">
                  <RestaurantHeader
                    cover={data.cover}
                    logo={data.profile}
                    discount={data.discount}
                    name={data.name}
                    deliveryName={data.deliveryName}
                    deliveryIcon={data.deliveryIcon}
                    deliveryTime={data.deliveryZoneList}
                    isOpen={this.state.restaurant.isOpen}
                    commentCount={data.commentCount}
                    rateAverage={data.rateAverage}
                    tabClick={this.tabClick}
                    activeTab={this.state.activeTab}
                  />

                  {this.state.tabOne && (
                    <React.Fragment>
                      <div className="stickyMenu wFull ">
                        <div id="owl" className="owl-carousel owl-theme zIndex0 hInherit">
                          {Object.values(data.menuSections).map(cat => (
                            <div key={cat.id} className="hInherit">
                              <div
                                className={`stickyMenu-item center hP20 text14
                                  ${this.state.activeSticky === `cat-${cat.id}` && ' stickyMenu-item_active'}`
                                }
                                onClick={() => this.scrollPointer(cat)}
                              >
                                <a href={`#cat-${cat.id}`}>
                                  {cat.name}
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="hP10 vM10">
                        {this.state.restaurant.menuSections.map(group => (
                          <RestaurantFoodGroup
                            key={group.id}
                            title={group.name}
                            icon={group.iconSlug} // Fix these iconssssssss
                            tag={`cat-${group.id}`}
                          >
                            {group.foods.map(food => {
                              const _data = {
                                restaurantId: this.state.restaurant.id,
                                id: food.id,
                                name: food.name,
                                hasPic: food.hasPic,
                                hasOption: food.hasOption,
                                foodImg: food.image,
                                description: food.description,
                                discount: food.salePercentage,
                                vote: food.vote,
                                voteCount: food.voteCount,
                                price: food.foodPrice,
                                lastPrice: food.lastPrice,
                                item: food,
                              };

                              return (
                                <RestaurantFoodCard
                                  onClick={() => this.openFoodModal(_data)}
                                  restaurantId={this.state.restaurant.id}
                                  key={food.id}
                                  id={food.id}
                                  name={food.name}
                                  hasPic={food.hasPic}
                                  hasOption={food.hasOption}
                                  foodImg={food.image}
                                  description={food.description}
                                  discount={food.salePercentage}
                                  vote={food.vote}
                                  voteCount={food.voteCount}
                                  price={food.foodPrice}
                                  lastPrice={food.lastPrice}
                                  foodIsOpen={food.isOpen}
                                  restaurantIsOpen={this.state.restaurant.isOpen}
                                  item={food} // to get inside Stepper component
                                />
                              );
                            })}
                          </RestaurantFoodGroup>
                        ))}
                      </div>


                      {/* {typeof this.props.basket !== 'undefined' &&
                        typeof this.props.basket.items !== 'undefined' &&
                        Object.keys(this.props.basket.items).length > 0 && (
                          )} */}
                        {this.state.StickyPriceShow &&
                          <StickyPrice links='cart' collapseShow={false} minPriceSendLimit={this.state.restaurant && this.state.restaurant.minPriceSendLimit}/>
                        }

                    </React.Fragment>
                  )}

                  {this.state.tabTwo && (
                    <div className="container-fluid">
                      <div>
                        <TabTwo id={data.id} />
                      </div>
                    </div>
                  )}

                  {this.state.tabThree && (
                    <div className="container-fluid">
                      <TabThree data={data} />
                    </div>
                  )}

                  {this.props.modals.RestaurantPageModal && (
                    <RestaurantModal
                    toggleModal={this.toggleModal}
                      onChangeSideDish={this.onChangeSideDish}
                      modalData={this.state.modalData.item}
                      restaurantId={this.state.restaurant.id}
                      key={this.state.modalData.item.id}
                      type="modal"
                    />
                  )}
                </div>
              </React.Fragment>
            ) : (
              <Loading />
            )}
          </div>
        ) : (
          <div className="order-empty hFull center">
            <div className="order-empty__icon">
              <img className="order-empty__img" src={icon} alt=""/>
              <span className="order-empty__title">"رستورانی در این محل یافت نشد"</span>
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    RestaurantPageModal: state.Modals.RestaurantPageModal,
  },
  basket: state.Basket,
});
const mapDispatchToProps = dispatch => ({
  showModal: showStatus => dispatch(showModal(showStatus)),
  addToBasket: value => {
    dispatch(addToBasket(value));
  },
  storeRestaurant: value => dispatch(storeRestaurant(value)),
  accChargeChanged: value => {
    dispatch(accChargedChanged(value));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantPage);
