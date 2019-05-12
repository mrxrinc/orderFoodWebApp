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
} from '../../api/application/restaurant';
import { changeBasketPost } from '../../api/account';

import Loading from '../../components/ChiliLoading';
import { addToBasket } from '../../actions/Basket';
import { storeRestaurant } from '../../actions/restaurant';
import './style.scss';
import TabThree from './components/TabThree';
import TabTwo from './components/TabTwo';

// let basketTempData = {};

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      restaurant: null,
      tabOne: true,
      tabTwo: false,
      tabThree: false,
      activeTab: 'tabOne',
      basketToState: {},
      basketObjItems: {},
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
    restaurantDetail(this.state.id).then(restaurantResp => {
      this.setState({ restaurant: restaurantResp.result });
    });

    createBasket(this.state.id).then((response) => {
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

  }


  componentWillUnmount() {
    changeBasketPost(this.props.basket).then(
      response => {
        console.log('========changeBasketPost===============');
        console.log(response);
        console.log('====================================');
      }
    ).catch(
      err => {
        console.log('===========err==================');
        console.log(err.response);
        console.log('====================================');
      }
    )
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


  render() {
    const data = this.state.restaurant;
    return (
      <div>
        <NavigationBar
          back
          fixTitle={data && data.name}
          like
          share
          scroll={199}
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

            {/* <div className="stickyMenu wFull" /> */}

            {this.state.tabOne && (
              <React.Fragment>
                <div className="hP10 vM10">
                  {this.state.restaurant.menuSections.map(group => (
                    <RestaurantFoodGroup
                      key={group.id}
                      title={group.name}
                      icon="italian" // Fix these iconssssssss
                    >
                      {group.foods.map(food => {

                        const _data = {
                          restaurantId: this.state.id,
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
                            restaurantId={this.state.id}
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
                            // stepper={this.stepper}
                            item={food} // to get inside Stepper component
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantPage);
