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
import Stepper from '../../components/ChiliStepper';
import StickyPrice from '../../components/StickyPrice';
import NavigationBar from '../../components/NavigationBar';
import {
  restaurantDetail,
  createBasket,
} from '../../api/application/restaurant';
import {
  changeBasketPost,
  putChangeBasket
} from '../../api/account';

import Loading from '../../components/ChiliLoading';
import { rateColor } from '../../components/GeneralFunctions';
import { addToBasket } from '../../actions/Basket';
import { storeRestaurant } from '../../actions/restaurant';
import './style.scss';
import TabThree from './components/TabThree';
import TabTwo from './components/TabTwo';

let basketTempData = {};

class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      restaurant: null,
      modalData: null,
      basket: null,
      tabOne: true,
      tabTwo: false,
      tabThree: false,
      activeTab: 'tabOne',
      modalButton: false,
      //when modal with sidedish foods opens , we create collection for Id's of radio buttons
      modalRequiredGroupIds: [],
      //when modal with sidedish foods opens , we create flag for whole checkbox validation
      checkboxValidation: true,
      //when modal with sidedish foods opens , we create container for whole user's input
      modalContainer: [],
      sameRestaurant: false,
      basketToState:{},
      basketObjItems:{}
    };
  }


  componentDidMount() {

    restaurantDetail(this.state.id).then(restaurantResp => {
      this.setState({ restaurant: restaurantResp.result });
    })

    createBasket(this.state.id).then((response) => {
      console.log('=========fetchBasket==================');
      console.log(response);
      console.log('====================================');
    
      this.setState({
        basketObjItems:response.result.items,
        basketObj:response.result,
      },()=>{

        let basketToArray = Object.keys(this.state.basketObjItems);
        let basketStoreObjItems = this.props.basket.items;
        let basketStoreObj = this.props.basket;
    
    
        if(basketToArray.length > 0){
          if( JSON.stringify(this.state.basketObjItems) === JSON.stringify(basketStoreObjItems) ) {
              this.setState({
                basketToState:basketStoreObj,
              },()=>{
                console.log('========= server full from current =================');
                console.log('basketToState from store');
                console.log(this.state.basketToState);
                console.log('====================================');
              })
          }else{
              this.props.addToBasket(this.state.basketObj);
              console.log('============= server full from current ==============');
              console.log('setBasketToStore from server');
              console.log('====================================');
          }

        }else{
          if( this.state.basketObj.id === basketStoreObj.id ) {
            this.setState({
              basketToState:basketStoreObj,
            },()=>{
              console.log('========== server null from current ================');
              console.log('basketToState from store');
              console.log(this.state.basketToState);
              console.log('====================================');
            })
          }else{
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

  componentWillUnmount(){
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

  // stepper = (id, count, role, item) => { // it takes 4 arguments
  //   console.log('Stepper ===>', id, count, role);
  //   const data = this.state.restaurant;
  //   const menu = data.menuSections;
  //   const newMenu = menu.map(group => {
  //     const newFoods = group.foods.map(food => {
  //       if (food.id === id) {
  //         const key = food.id;
  //         const basket = {};

  //         if (food.itemCount) { // if we have this food in the basket
  //           let itemCount = null;
  //           if (role === 'add') itemCount = food.itemCount + 1;
  //           else if (role === 'remove') itemCount = food.itemCount - 1;
  //           else itemCount = food.itemCount;
  //           const data = { ...food, itemCount, foodPrice: food.price };

  //           if (itemCount === 0) {  // to remove item from basket
  //             delete basketTempData[key];
  //           } else {
  //             basket[key] = data; // to add the itemCount info

  //             this.assignDataToBasket(basketTempData, basket);
  //           }

  //           if (this.state.modalData) {
  //             this.setState({ modalData: { ...this.state.modalData, itemCount } });
  //           }
  //           return data;
  //         }
  //         const data = { ...food, itemCount: 1, foodPrice: food.price };
  //         basket[key] = data;

  //         this.assignDataToBasket(basketTempData, basket);

  //         if (this.state.modalData)
  //           this.setState({
  //             modalData: { ...this.state.modalData, count: 1 },
  //           });
  //         return data;
  //       }
  //       if (food.count && food.count > 0) {
  //         return food;
  //       }
  //       return { ...food, count: 0 };
  //     });
  //     return { ...group, foods: newFoods };
  //   });
  //   console.log('newMenu ===>', newMenu);

  //   // update restaurant store
  //   this.setState({
  //     restaurant: {
  //       ...this.props.restaurant,
  //       menuSections: newMenu
  //     }
  //   });

  //   // update basket
  //   const dataForBasket = {
  //     ...this.props.basket,
  //     items: basketTempData,
  //   };

  //   this.props.addToBasket(dataForBasket);

  //   console.log('NEW RESTAURANT DATA ===>', this.props.restaurant);
  //   console.log('MODAL DATA ===>', this.state.modalData);
  //   console.log('BASKET_TEMP_DATA', basketTempData);
  // };

  tabClick = slug => {
    switch (slug) {
      case 'tabOne':
        this.setState({
          tabOne: true,
          tabTwo: false,
          tabThree: false,
          activeTab:'tabOne'
        })
        break;
      case 'tabTwo':
        this.setState({
          tabOne: false,
          tabTwo: true,
          tabThree: false,
          activeTab:'tabTwo'
        })
        break;
      case 'tabThree':
        this.setState({
          tabOne: false,
          tabTwo: false,
          tabThree: true,
          activeTab:'tabThree'
        })
        break;

      default:
        break;
    }
  };

  makeTempName = (id, name) => id + name;

  openFoodModal = food => {
    this.setState({ modalRequiredGroupIds: [] });
    this.setState({ modalData: food }, () => {
      console.log('MODAL DATA ==>', this.state.modalData.options);
      const { options } = this.state.modalData;
      if (options.length > 0) {
        this.setState({ modalButton: false });
      } else {
        this.setState({ modalButton: true });
      }
      const addedOptionValidationArray = options.map(option => ({
        ...option,
        canAddOptions: true,
      }));
      if (this.state.modalData.options.length > 1) {
        const copyOfModalData = this.state.modalData;
        copyOfModalData.options = addedOptionValidationArray;
        this.setState(copyOfModalData);
      }

      const requiredCategories = options.filter(
        category =>
          category.groupRequired && category.groupMaxSelectionLimit === 1,
      );
      requiredCategories.map(category =>
        this.state.modalRequiredGroupIds.push(category.groupId),
      );      
      if (!this.state.modalData.count) {
        // for the first time increasing from inside of the modal
        this.setState({ modalData: { ...this.state.modalData, count: 0 } });
        this.setState({ checkboxValidation: true });
        this.setState({ checkboxValidation: true });
        this.setState({ radioValidation: true });
        this.setState({ modalContainer: [] }); 
      }
      this.toggleModal();
    });
  };

  onChangeSideDish = (optionId, group) => {
    this.state.modalContainer.push(group.groupId);
    const newObj = {
      options: [],
    };
    let groupIndexOf;
    let selectedCategory;
    const { modalContainer } = this.state;
    selectedCategory = modalContainer.find(
      category => category.groupId === group.groupId,
    );
    if (
      modalContainer.length === 0 ||
      typeof selectedCategory === 'undefined'
    ) {
      newObj.groupId = group.groupId;
      newObj.groupMaxSelectionLimit = group.groupMaxSelectionLimit;
      newObj.groupRequired = group.groupRequired;
      newObj.options.push(optionId);
      this.setState(
        {
          modalContainer: [...this.state.modalContainer, newObj],
        },
        () => {
          selectedCategory = this.state.modalContainer.find(
            category => category.groupId === group.groupId,
          );
          groupIndexOf = this.state.modalContainer.indexOf(selectedCategory);
          if (group.groupRequired) {
            this.checkRadio(optionId, groupIndexOf, () => {
              this.checkModalButtonDisable();
            });
          }
        },
      );
    } else {
      groupIndexOf = modalContainer.indexOf(selectedCategory);
      // CHECKBOX VALIDATION
      if (!group.groupRequired) {
        this.validateCheckBox(
          optionId,
          group.groupId,
          selectedCategory,
          groupIndexOf,
          () => {
            this.checkModalButtonDisable();
          },
        );
      } else {
        this.checkRadio(optionId, groupIndexOf, () => {
          this.checkModalButtonDisable();
        });
      }
    }
  };

  checkModalButtonDisable = () => {
    console.log(this.state.radioValidation && this.state.checkboxValidation);    
    if (this.state.radioValidation && this.state.checkboxValidation) {
      this.setState({
        modalButton: true,
      });
    } else {
      this.setState({
        modalButton: false,
      });      
    }
  };

  checkRadio = (optionId, groupIndexOf, cb) => {
    const copyOfModalContainer = this.state.modalContainer;
    copyOfModalContainer[groupIndexOf].options = [];
    this.setState(copyOfModalContainer, () => {
      this.setState(
        () => {
          const list = this.state.modalContainer[groupIndexOf].options.push(
            optionId,
          );
          return list;
        },
        () => {
          this.checkAllRadioButtons(cb);
        },
      );
    });
  };

  checkAllRadioButtons = cb => {
    let validation = true;
    const radioCount = this.state.modalContainer.filter(
      group => group.groupRequired,
    );
    const modalRequiredGroupIdsLength = this.state.modalRequiredGroupIds.length;
    console.log(333);
    if (radioCount.length < modalRequiredGroupIdsLength) {
      validation = false;
    }
    this.setState({ radioValidation: validation }, cb);
  };

  validateCheckBox = (
    optionId,
    groupId,
    selectedCategory,
    groupIndexOf,
    cb,
  ) => {
    const { modalContainer } = this.state;
    // checkbox checking
    const optionIndex = selectedCategory.options.indexOf(optionId);
    const copyOfModalData = this.state.modalData;
    const optionObject = copyOfModalData.options.find(
      option => option.groupId === groupId,
    );
    const indexOfOption = copyOfModalData.options.indexOf(optionObject);
    // whenever option currently is in state.modalContainer and we want to remove it
    if (optionIndex > -1) {
      modalContainer[groupIndexOf].options.splice(optionIndex, 1);
      this.setState(
        () => {
          const list = this.state.modalContainer[groupIndexOf].options.filter(
            item => item !== optionId,
          );
          return list;
        },
        () => {
          this.completeValidation(groupIndexOf, indexOfOption, cb);
        },
      );
    } else {
      // check to adding and validation
      this.setState(
        () => {
          const list = this.state.modalContainer[groupIndexOf].options.push(
            optionId,
          );
          return list;
        },
        () => {
          this.completeValidation(groupIndexOf, indexOfOption, cb);
        },
      );
    }
  };

  completeValidation = (groupIndexOf, indexOfOption, cb) => {
    this.checkCurrentGroup(groupIndexOf, indexOfOption);
    this.checkAllCheckboxes(cb);
  };

  checkCurrentGroup = (groupIndexOf, indexOfOption) => {
    const copyOfModalData = this.state.modalData;
    if (
      this.state.modalContainer[groupIndexOf].options.length >
      this.state.modalContainer[groupIndexOf].groupMaxSelectionLimit
    ) {
      copyOfModalData.options[indexOfOption].canAddOptions = false;
      this.setState(copyOfModalData);
    } else {
      copyOfModalData.options[indexOfOption].canAddOptions = true;
      this.setState(copyOfModalData);
    }
  };

  checkAllCheckboxes = cb => {
    const findExtraCheckbox = this.state.modalData.options.find(
      option => !option.canAddOptions,
    );
    let validation = true;
    if (typeof findExtraCheckbox !== 'undefined') {
      validation = false;
    }
    this.setState({ checkboxValidation: validation }, cb);
  };

  toggleModal = () => {
    this.props.showModal({
      RestaurantPageModal: !this.props.modals.RestaurantPageModal,
    });
  };

  

  assignDataToBasket(basketTempData, basket) {
    if(this.state.sameRestaurant) {
      console.log('STPPER SAME RESTAURANT', this.state.sameRestaurant)
      Object.assign(basketTempData, basket);
    } else {
      this.setState({ sameRestaurant: true }, () => {
        basketTempData = basket;
        console.log('STPPER SAME RESTAURANT', this.state.sameRestaurant);
      })
    }
  }

  modalPrice = () => {
    let sum = 0;
    if (this.state.modalData) {
      const { count } = this.state.modalData;
      const itemPrice = this.state.modalData.price;
      sum = itemPrice * count;
    }
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
                          // stepper={this.stepper}
                          item={food} // to get inside Stepper component
                        />
                      ))}
                    </RestaurantFoodGroup>
                  ))}
                </div>


                {typeof this.props.basket !== 'undefined' &&
                typeof this.props.basket.items !== 'undefined' &&
                  Object.keys(this.props.basket.items).length > 0 && (
                  <StickyPrice  links='cart' collapseShow={false} />
                )}

              </React.Fragment>
            )}

            {this.state.tabTwo &&
            <div className="container-fluid">
              <div>
                <TabTwo id={data.id}/>

              </div>
            </div>
            }
            {this.state.tabThree &&
              <div className="container-fluid">
                <TabThree data={data} />
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
                            <RestaurantSideDishGroup
                              title={this.createTitle(category)}
                              key={category.groupId}
                              isValid={category.canAddOptions}
                            >
                              {category.options.map(option => (
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
                                    tempName={this.makeTempName(
                                      option.foodOptionId,
                                      option.foodOptionName,
                                    )}
                                    onClick={() =>
                                      this.onChangeSideDish(
                                        option.foodOptionId,
                                        category,
                                      )
                                    }
                                    groupId={category.groupId}
                                    key={option.foodOptionId}
                                  />
                                </Fragment>
                              ))}
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
                            // stepper={this.stepper}
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
