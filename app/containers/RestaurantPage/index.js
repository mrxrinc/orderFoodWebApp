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
  createBasket,
} from '../../api/application/restaurant';
import Loading from '../../components/ChiliLoading';
import { rateColor } from '../../components/GeneralFunctions';
import { addToBasket } from '../../actions/Basket';
import './style.scss';
import TabThree from './components/TabThree';

const basketTempData = {};

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      restaurantDetail: null,
      loading: true,
      modalData: null,
      basket: null,
      tabOne: true,
      tabTwo: false,
      tabThree: false,
    };
  }

  tabClick = (slug) => {
    console.log('====================================');
    console.log(slug);
    console.log('====================================');
    switch (slug) {
      case 'tabOne':
        this.setState({
          tabOne: true,
          tabTwo: false,
          tabThree: false,
        })
        break;
      case 'tabTwo':
        this.setState({
          tabOne: false,
          tabTwo: true,
          tabThree: false,
        })
        break;
      case 'tabThree':
        this.setState({
          tabOne: false,
          tabTwo: false,
          tabThree: true,
        })
        break;
    
      default:
        break;
    }
  }

  componentDidMount() {
    console.log('======>>>> ID FROM PROPS ====>', this.props.match.params.id);
    restaurantDetail(this.state.id).then(response => {
      this.setState({ restaurantDetail: response.result }, () => {
        this.setState({ loading: false });

        createBasket(this.state.id).then(basketResp => {
          console.log('Basket Response ==>', basketResp.result);
          this.setState({ basket: basketResp.result });
        });
        console.log('Restaurant Detail ====> ', this.state.restaurantDetail);
      });
    });
  }

  openFoodModal = food => {
    this.setState({ modalData: food }, () => {
      console.log('MODAL DATA ==>', this.state.modalData);
      if (!this.state.modalData.count) {
        // for the first time increasing from inside of the modal
        this.setState({ modalData: { ...this.state.modalData, count: 0 } });
      }
      this.toggleModal();
    });
  };

  onChangeSideDish = optionId => {
    console.log("%%%%%%%%%",optionId);
  }

  toggleModal = () => {
    this.props.showModal({
      RestaurantPageModal: !this.props.modals.RestaurantPageModal,
    });
  };

  stepper = (id, count, role, food) => {
    console.log('Stepper ===>', id, count, role);
    const data = this.state.restaurantDetail;
    const menu = data.menuSections;
    const newMenu = menu.map(group => {
      const newFoods = group.foods.map(food => {
        if (food.id === id) {
          const key = food.id;
          const basket = {};
          if (food.count) {
            let count = null;
            if (role === 'add') count = food.count + 1;
            else if (role === 'remove') count = food.count - 1;
            const data = { ...food, count };
            basket[key] = data;
            Object.assign(basketTempData, basket);
            if (this.state.modalData)
              this.setState({ modalData: { ...this.state.modalData, count } });
            return data;
          } else {
            const data = { ...food, count: 1 };
            basket[key] = data;
            Object.assign(basketTempData, basket);
            if (this.state.modalData)
              this.setState({
                modalData: { ...this.state.modalData, count: 1 },
              });
            return data;
          }
        } else if (food.count && food.count > 0) {
          return food;
        }
        return { ...food, count: 0 };
      });
      return { ...group, foods: newFoods };
    });
    console.log('newMenu ===>', newMenu);

    this.setState({
      restaurantDetail: { ...this.state.restaurantDetail, menuSections: newMenu }
    }, () => {
      console.log('new State ===>', this.state.restaurantDetail);
      console.log('modalData State ===>', this.state.modalData);
      console.log('BASKET_TEMP_DATA', basketTempData);

      //continue to redux
      const dataForBasket = {
        restaurantId: this.state.restaurantDetail.id,
        orderId: this.state.basket.id,
        items: basketTempData
      }
      this.props.addToBasket({ basket: dataForBasket });
    });
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
    category.groupRequired ? title += 'حداقل ' : title += 'حداکثر ';
    title += category.groupMaxSelectionLimit;
    title += `مورد) `;
    return title;
  }

  calculateFinalSideDishPrice = category => {
    if (category.groupMaxSelectionLimit === 1 && category.groupRequired) {
      return "radio";
    }
    return "checkbox";
  }

  // finalPrice = category => {
  //   if (category.groupPriceDisplayType == 0) {

  //   }
  // }

  defineSideDishDiscount = option => {
    if (
      option.foodOptionLastPrice != null &&
      option.foodOptionLastPrice !== 0
    ) {
      return { realPrice: option.foodOptionLastPrice, hasDiscount: true };
    }
    return { realPrice: option.foodOptionPrice, hasDiscount: false };
  }

  render() {
    const data = this.state.restaurantDetail;
    return (
      <div>
        {!this.state.loading ? (
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
            />

            {/* <div className="stickyMenu wFull" /> */}

            {this.state.tabOne &&
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
                        price={food.price}
                        lastPrice={food.lastPrice}
                        count={food.count}
                        stepper={this.stepper}
                        item={food} // to get inside Stepper component
                      />
                    ))}
                  </RestaurantFoodGroup>
                ))}
                <StickyPrice data={{}} link='/cart' collapseShow={false}/>
              </div>
            }
            {this.state.tabTwo &&
              <h1>tab2</h1>
            }
            {this.state.tabThree &&
              <div className="container-fluid">
                <TabThree data={data}/>
              </div>
            }

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
                            <RestaurantSideDishGroup title={this.createTitle(category)} key={category.groupId}>
                               { category.options.map(option => (
                                      <Fragment>
                                       <input value={this.name} onChange={this.handleChange} />
                                      <RestaurantSideDishRow
                                      type={this.calculateFinalSideDishPrice(category)}
                                      discount = {this.defineSideDishDiscount(option)}
                                      price = {option.foodOptionPrice}
                                      name={option.foodOptionName}
                                      id={option.foodOptionId}
                                      onClick={() => this.onChangeSideDish(option.foodOptionId)}
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
                      <Button color="success w80" onClick={this.toggleModal}>
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
});
const mapDispatchToProps = dispatch => ({
  showModal: showStatus => dispatch(showModal(showStatus)),
  addToBasket: value => {
    dispatch(addToBasket(value));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantPage);
