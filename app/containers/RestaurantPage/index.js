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
  restaurantDetailBySlug
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

// window.onscroll(() => {
//   console.log('yoyo')
// })

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      citySlug:this.props.match.params.citySlug,
      restaurantSlug:this.props.match.params.restaurantSlug,
      restaurant: null,
      tabOne: true,
      tabTwo: false,
      tabThree: false,
      activeTab: 'tabOne',
      basketToState: {},
      basketObjItems: {},
      activeSticky: null
    };
  }

  openFoodModal = food => {
    this.setState({ modalData: food }, () => {
      if(typeof this.props.basket.items[this.state.modalData.id] != "undefined"){
        this.state.modalData.item['itemCount'] = this.props.basket.items[this.state.modalData.id].itemCount;
      }
      this.toggleModal();
    });
  };

  componentDidMount() {
    this.props.accChargeChanged({accCharge:false})
    restaurantDetailBySlug(this.state.citySlug,this.state.restaurantSlug).then(restaurantResp => {
      this.setState({ restaurant: restaurantResp.result },()=>{
        console.log('RESTAURANT DETAIL ====>>>> ', this.state.restaurant);

        $(document).ready(function () {
          $('#owl').owlCarousel({
            rtl: true,
            loop: false,
            margin: 10,
            nav: false,
            dots: false,
            autoWidth: true,
            // responsive: {
            //   0: {
            //     items: 3,
            //   },
            //   768: {
            //     items: 3,
            //   },
            //   992: {
            //     items: 4,
            //   },
            //   1200: {
            //     items: 5,
            //   },
            //   1440: {
            //     items: 6,
            //   },
            // },
          });
        })

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

        }).catch((err) => {
          console.log(err)
        });
      });
    });


  }



  tabClick = slug => {
    switch (slug) {
      case 'tabOne':
        this.setState({
          tabOne: true,
          tabTwo: false,
          tabThree: false,
          activeTab: 'tabOne'
        })
        break;
      case 'tabTwo':
        this.setState({
          tabOne: false,
          tabTwo: true,
          tabThree: false,
          activeTab: 'tabTwo'
        })
        break;
      case 'tabThree':
        this.setState({
          tabOne: false,
          tabTwo: false,
          tabThree: true,
          activeTab: 'tabThree'
        })
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
    console.log('CAT', `#${cat.iconSlug}`);
    this.setState({ activeSticky: cat.iconSlug });
  }

  render() {
    const data = this.state.restaurant;
    return (
      <div id="ScrollView">
        <NavigationBar
          back
          title={data && data.name}
          // like
          // share
          background
        />
        {data ? (
          <div className="lightBg rtl">
            <RestaurantHeader
              cover={data.cover}
              logo={data.profile}
              discount={data.discount}
              name={data.name}
              deliveryName={data.deliveryName}
              deliveryIcon={data.deliveryIcon}
              deliveryPrice={12000}
              isOpen
              commentCount={data.commentCount}
              rateAverage={data.rateAverage}
              tabClick={this.tabClick}
              activeTab={this.state.activeTab}
            />

            <div className="stickyMenu wFull ">
              <div id="owl" className="owl-carousel owl-theme zIndex0 hInherit">
                {Object.values(data.menuSections).map(cat => (
                  <div key={cat.id} className="hInherit">
                    <div 
                      className={`stickyMenu-item center hP20 text14 
                        ${this.state.activeSticky === cat.iconSlug && ' stickyMenu-item_active'}`
                      }
                      onClick={() => this.scrollPointer(cat)}
                    >
                      <a href={`#${cat.iconSlug}`}>
                        {cat.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {this.state.tabOne && (
              <React.Fragment>
                <div className="hP10 vM10">
                  {this.state.restaurant.menuSections.map(group => (
                    <RestaurantFoodGroup
                      key={group.id}
                      title={group.name}
                      tag={group.iconSlug}
                      icon={group.iconSlug} // Fix these iconssssssss
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
                          item: food
                        }

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
                            price={food.price}
                            lastPrice={food.lastPrice}
                            item={food} // to get inside Stepper component
                            restaurantIsOpen={data.isOpen}
                            foodIsOpen={food.isOpen}
                          />
                        )
                        })
                      }
                    </RestaurantFoodGroup>
                  ))}
                </div>


                {typeof this.props.basket !== 'undefined' &&
                  typeof this.props.basket.items !== 'undefined' &&
                  Object.keys(this.props.basket.items).length > 0 && (
                    <StickyPrice links='cart' collapseShow={false} />
                  )}

              </React.Fragment>
            )}

            {this.state.tabTwo &&
              <div className="container-fluid">
                <div>
                  <TabTwo id={data.id} />

                </div>
              </div>
            }

            {this.state.tabThree &&
              <div className="container-fluid">
                <TabThree data={data} />
              </div>
            }

            {this.props.modals.RestaurantPageModal && <RestaurantModal
              toggleModal={this.toggleModal}
              onChangeSideDish={this.onChangeSideDish}
              modalData={this.state.modalData.item}
              restaurantId={this.state.restaurant.id}
              key={this.state.modalData.item.id}
              type="modal"
            />}

          </div>
        ) : (
            <Loading />
          )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    RestaurantPageModal: state.Modals.RestaurantPageModal,
  },
  basket: state.Basket
});
const mapDispatchToProps = dispatch => ({
  showModal: showStatus => dispatch(showModal(showStatus)),
  addToBasket: value => {
    dispatch(addToBasket(value));
  },
  storeRestaurant: value => dispatch(storeRestaurant(value)),
  accChargeChanged: value => {
    dispatch(accChargedChanged(value));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantPage);
