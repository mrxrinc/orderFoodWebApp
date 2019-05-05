/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { showModal } from '../../actions/Modals';
import { history } from '../../store';

import RestaurantHeader from '../../components/RestaurantHeader';
import RestaurantFoodGroup from '../../components/RestaurantFoodGroup';
import RestaurantFoodCard from '../../components/RestaurantFoodCard';
import RestaurantSideDishGroup from '../../components/RestaurantSideDishGroup';
import RestaurantSideDishRow from '../../components/RestaurantSideDishRow';
import Modal from '../../components/ChiliModal';
import Stepper from '../../components/Stepper';
import StickyPrice from '../../components/StickyPrice';
import {
  restaurantDetail,
  createBasket
} from '../../api/application/restaurant';
import Loading from '../../components/ChiliLoading';
import { rateColor } from '../../components/GeneralFunctions';
import { addToBasket } from '../../actions/Basket';
import { storeRestaurant } from '../../actions/restaurant';
import './style.scss';
import TabThree from './components/TabThree';

let basketTempData = {};

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      modalData: null,
      basket: null,
      tabOne: true,
      tabTwo: false,
      tabThree: false,
      modalButton: false,
      modalRequired: [],
      modalContainer: [],
      showSticky: false
    };
    // basketTempData = this.props.basket;
  }

  componentDidMount() {
    console.log('======>>>> ID FROM PROPS ====>', this.props.match.params.id);
    restaurantDetail(this.state.id).then(restaurantResp => {
      this.props.storeRestaurant(restaurantResp.result);
      createBasket(this.state.id).then(basketResp => {
        console.log('Basket Response ==>', basketResp.result);
        this.props.addToBasket(basketResp.result);
        this.updateRestaurantData(restaurantResp.result); // TO REFRESH THE RESTAURANT DATA ACCORDING TO BASKET
      });
    });
  }
  
  updateRestaurantData = data => {          
    const menu = data.menuSections;
    const newMenu = menu.map(group => {
      const newFoods = group.foods.map(food => {
        if(this.props.basket && this.props.basket.items[food.id]) {
          return { ...food, itemCount: this.props.basket.items[food.id].itemCount ,foodPrice:food.price};
        }
        return { ...food, foodPrice: food.price };
      });
      return { ...group, foods: newFoods };
    });
    const newData = { ...data, menuSections: newMenu };
    console.log('UPDATE BASKET DATA TO RESTAURANT ITEMS', newData);
    this.props.storeRestaurant(newData);
  }

  tabClick = slug => {
    console.log('====================================');
    console.log(slug);
    console.log('====================================');
    switch (slug) {
      case 'tabOne':
        this.setState({
          tabOne: true,
          tabTwo: false,
          tabThree: false,
        });
        break;
      case 'tabTwo':
        this.setState({
          tabOne: false,
          tabTwo: true,
          tabThree: false,
        });
        break;
      case 'tabThree':
        this.setState({
          tabOne: false,
          tabTwo: false,
          tabThree: true,
        });
        break;

      default:
        break;
    }
  };

  openFoodModal = food => {
    this.setState({ modalRequired: [] });
    this.setState({ modalData: food }, () => {
      console.log('MODAL DATA ==>', this.state.modalData);
      const requiredCategories = this.state.modalData.options.filter(
        category =>
          category.groupRequired && category.groupMaxSelectionLimit === 1,
      );
      requiredCategories.map(category =>
        this.state.modalRequired.push(category.groupId),
      );
      console.log("^^^",this.state.modalRequired);
      if (!this.state.modalData.count) {
        // for the first time increasing from inside of the modal
        this.setState({ modalData: { ...this.state.modalData, count: 0 } });
      }
      this.toggleModal();
    });
  };

  onChangeSideDish = (optionId, group) => {    
    this.state.modalContainer.push(group.groupId);
    if (this.hasSubArray(this.state.modalContainer, this.state.modalRequired)) {
      this.setState({ modalButton: true });
    }  
  };

  hasSubArray = (master, sub) => sub.every((i => v => i = master.indexOf(v, i) + 1)(0))

  toggleModal = () => {
    this.props.showModal({
      RestaurantPageModal: !this.props.modals.RestaurantPageModal,
    });
    // this.state.modalRequired = [];
    this.state.modalContainer = [];
  };

  stepper = (id, count, role, item) => { // it take 4 arguments
    console.log('Stepper ===>', id, count, role);
    const data = this.props.restaurant;
    const menu = data.menuSections;
    const newMenu = menu.map(group => {
      const newFoods = group.foods.map(food => {
        if (food.id === id) {
          const key = food.id;
          const basket = {};

          if (food.itemCount) { // if we have this food in the basket
            let itemCount = null;
            if (role === 'add') itemCount = food.itemCount + 1;
            else if (role === 'remove') itemCount = food.itemCount - 1;
            else itemCount = food.itemCount;
            const data = { ...food, itemCount, foodPrice: food.price };

            if (itemCount === 0) {  // to remove item from basket
              delete basketTempData[key];
            } else {
              basket[key] = data; // to add the itemCount info
              Object.assign(basketTempData, basket);
            }
            
            if (this.state.modalData)
              this.setState({ modalData: { ...this.state.modalData, itemCount } });
            return data;
          } 
          const data = { ...food, itemCount: 1, foodPrice: food.price };
          basket[key] = data;
          Object.assign(basketTempData, basket);
          if (this.state.modalData)
            this.setState({
              modalData: { ...this.state.modalData, itemCount: 1, foodPrice: food.price },
            });
          return data;
        } else if (food.itemCount && food.itemCount > 0) {
          return food;
        }
        return { ...food, itemCount: 0, foodPrice: food.price };
      });
      return { ...group, foods: newFoods };
    });
    console.log('newMenu ===>', newMenu);

    // update restaurant store
    this.props.storeRestaurant({
      ...this.props.restaurant,
      menuSections: newMenu
    });

    // update basket
    const dataForBasket = {
      ...this.props.basket,
      items: basketTempData,
    };
    this.props.addToBasket(dataForBasket);
    
    console.log('NEW RESTAURANT DATA ===>', this.props.restaurant);
    console.log('MODAL DATA ===>', this.state.modalData);
    console.log('BASKET_TEMP_DATA', basketTempData);
  };

  modalPrice = () => {
    let sum = 0;
    if (this.state.modalData) {
      const { count } = this.state.modalData;
      const itemPrice = this.state.modalData.price;
      sum = itemPrice * count;
    }
    console.log(sum);
    return sum;
  };

  createTitle = category => {
    let title = `انتخاب ${category.groupName}`;
    title += ' (';
    category.groupRequired ? (title += 'حداقل ') : (title += 'حداکثر ');
    title += category.groupMaxSelectionLimit;
    title += `مورد) `;
    return title;
  };

  calculateFinalSideDishPrice = category => {
    if (category.groupMaxSelectionLimit === 1 && category.groupRequired) {
      return 'radio';
    }
    return 'checkbox';
  };

  checkWithDisplayType = (foodOptionPrice, displayType, foodPrice) => {
    if (displayType === 0) {
      return foodOptionPrice + foodPrice;
    }
    return foodOptionPrice;
  };

  defineSideDishDiscount = (
    foodOptionPrice,
    foodOptionLastPrice,
    displayType,
    foodPrice,
  ) => {
    console.log("***",foodOptionPrice,
      foodOptionLastPrice,
      displayType,
      foodPrice,
    );
    if (foodOptionLastPrice != null && foodOptionLastPrice !== 0) {      
      return {
        realPrice: this.checkWithDisplayType(
          foodOptionLastPrice,
          displayType,
          foodPrice,
        ),
        hasDiscount: true,
      };
    }    
    return {
      hasDiscount: false,
    };
  };

  render() {
    const data = this.props.restaurant;
    return (
      <div>
        {data ? (
          <div className="lightBg rtl">
            <RestaurantHeader
              cover={data.cover}
              logo={data.profile}
              discount={data.discount}
              name={data.name}
              deliveryName={data.deliveryName}
              deliveryIcon={data.deliveryIcon}
              deliveryPrice={12000} // Fix the delivery price
              isOpen
              commentCount={data.commentCount}
              rateAverage={data.rateAverage}
              tabClick={this.tabClick}
            />

            {/* <div className="stickyMenu wFull" /> */}

            {this.state.tabOne && (
              <React.Fragment>
                <div className="hP10 vM10">
                  {data.menuSections.map(group => (
                    <RestaurantFoodGroup
                      key={group.id}
                      title={group.name}
                      icon="italian" // Fix these iconssssssss
                    >
                      {group.foods.map(food => (
                        <RestaurantFoodCard
                          onClick={() => this.openFoodModal(food)}
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
                          count={food.itemCount}
                          stepper={this.stepper}
                          item={food} // to get inside Stepper component
                        />
                      ))}
                    </RestaurantFoodGroup>
                  ))}
                </div>

                {typeof this.props.basket.items !== 'undefined' &&
                  Object.keys(this.props.basket.items).length > 0 && (
                  <StickyPrice data={{}} link='/cart' collapseShow={false}/>
                  )}
              </React.Fragment>
            )}
            {this.state.tabTwo && <h1>tab2</h1>}
            {this.state.tabThree && (
              <div className="container-fluid">
                <TabThree data={data} />
              </div>
            )}

            <Modal
              className="modal-restaurant__detail"
              modal={this.props.modals.RestaurantPageModal}
              toggle={this.toggleModal}
            >
              {this.state.modalData && (
                <React.Fragment>
                  <div className="scroll modal-restaurant__detail-body lightBg">
                    <div
                      className="modal-restaurant__detail-head centerBg cover gray4Bg"
                      style={{
                        backgroundImage: `url(${this.state.modalData.image})`,
                      }}
                    >
                      <ul className="flex spaceBetween reset">
                        <li className="center">
                          <span
                            className="chilivery-close text28 gray6"
                            onClick={this.toggleModal}
                          />
                        </li>
                        <li className="center">
                          <span className="chilivery-fav-full text25 red" />
                        </li>
                      </ul>
                    </div>

                    <div className="modal-restaurant__detail-content padd10">
                      <h3 className="text18 bold centerText primary">
                        {this.state.modalData.name}
                      </h3>

                      <div className="center vM30 relative">
                        <div className="fullLine" />

                        <div className="reviews absolute flex hP20 lightBg">
                          <div className="flex i2 center gray">
                            <span className="text14 leftM3 topM3">
                              {this.state.modalData.voteCount}
                            </span>
                            <span className="chilivery-user text12" />
                          </div>

                          <div
                            className={`flex i2 center round5 ${rateColor(
                              this.state.modalData.vote,
                            )}`}
                          >
                            <span className="white text14 leftM3 topM3">
                              {this.state.modalData.vote}
                            </span>
                            <span className="chilivery-smiley-good2 white text12" />
                          </div>
                        </div>
                      </div>

                      <div className="text12 gray5 hP5">
                        <p>{this.state.modalData.description}</p>
                      </div>

                      <div className="flex primary">
                        <ul className="flex reset hInherit">
                          {this.state.modalData.lastPrice && (
                            <li className="moto flex hCenter rightP10 overLine danger">
                              <span className="text12">
                                {this.state.modalData.lastPrice}
                              </span>
                              <span className="text8 topM3 rightM3">تومان</span>
                            </li>
                          )}
                          <li className="moto flex hCenter rightP10 bold primary">
                            <span className="text16">
                              {this.state.modalData.price}
                            </span>
                            <span className="text10 topM3 rightM3">تومان</span>
                          </li>
                        </ul>
                        <div className="flex price hP10 leftContent primary text16 wFull hCenter">
                          <Stepper
                            className="topM20"
                            fontSize="18"
                            parentId={this.state.modalData.id}
                            value={this.state.modalData.count}
                            stepper={this.stepper}
                          />
                        </div>
                      </div>
                    </div>

                    {this.state.modalData.hasOption && (
                      <div>
                        {this.state.modalData.options.map(category => (
                          <div className="modal-restaurant__detail-sideDishes topM30">
                            <RestaurantSideDishGroup
                              title={this.createTitle(category)}
                              key={category.groupId}
                            >
                              { category.options.map(option => (
                                <Fragment>
                                  <input
                                    value={this.name}
                                    onChange={this.handleChange}
                                  />
                                  <RestaurantSideDishRow
                                    type={this.calculateFinalSideDishPrice(
                                      category,
                                    )}
                                    price={this.checkWithDisplayType(
                                      option.foodOptionPrice,
                                      category.groupPriceDisplayType,
                                      this.state.modalData.price,
                                    )}
                                    discount={this.defineSideDishDiscount(
                                      option.foodOptionPrice,
                                      option.foodOptionLastPrice,
                                      category.groupPriceDisplayType,
                                      this.state.modalData.price,
                                    )}
                                    name={option.foodOptionName}
                                    id={option.foodOptionId}
                                    onClick={() =>
                                      this.onChangeSideDish(
                                        option.foodOptionId,
                                        category,
                                      )
                                    }
                                    groupId={category}
                                  />
                                </Fragment>
                              )) }
                            </RestaurantSideDishGroup>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="modal-restaurant__detail-footer wFull flex bgWhite">
                    <div className="center i2">
                      <div>
                        <div className="flex hP10 primary text16 center">
                          <Stepper
                            className="topM10"
                            fontSize="18"
                            parentId={this.state.modalData.id}
                            value={this.state.modalData.count}
                            stepper={this.stepper}
                          />
                        </div>

                        <div className="flex hCenter bold primary topM5">
                          <span className="text12 leftM5">مبلغ کل :</span>
                          <span className="text22">{this.modalPrice()}</span>
                          <span className="text12 topM5 rightM3">تومان</span>
                        </div>
                      </div>
                    </div>

                    <div className="i2 center">
                      <Button
                        color="success w80"
                        disabled={!this.state.modalButton}
                        onClick={this.toggleModal}
                      >
                        تایید
                      </Button>
                    </div>
                  </div>
                </React.Fragment>
              )}
            </Modal>
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
  basket:state.Basket,
  restaurant: state.restaurant
});
const mapDispatchToProps = dispatch => ({
  showModal: showStatus => dispatch(showModal(showStatus)),
  addToBasket: value => dispatch(addToBasket(value)),
  storeRestaurant: value => dispatch(storeRestaurant(value)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantPage);
