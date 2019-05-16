import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import RestaurantSideDishGroup from '../../RestaurantSideDishGroup';
import RestaurantSideDishRow from '../../RestaurantSideDishRow';
import ChiliModal from '..';
import { rateColor } from '../../GeneralFunctions';
import Stepper from '../../ChiliStepper';
import SaveSideDishService from '../../../containers/RestaurantPage/services/SaveSideDishService';
import { changeToGeneratedFoodId, addToBasket, changeBasket } from '../../../actions/Basket';

class RestaurantModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalRequiredGroupIds: [],
      checkboxValidation: true,
      radioValidation: false,
      modalContainer: [],
      modalButton: false,
      cloneBasketItem: {},
      sideConfirm: false,
    };
  }

  componentDidMount() {
    const cloneBasketItem = { ...this.props.basket };
    this.setState({ cloneBasketItem });
    this.resetModal();     
    if (this.props.modalData.hasOption) {
      const initialData = {
        itemCount: 1,
        restaurantId: this.props.restaurantId,
        food: this.props.modalData,      
      };    
      this.props.changeBasket(initialData);
    }

  }

  resetModal() {
    this.setState(
      {
        modalRequiredGroupIds: [],
        modalContainer: [],
        radioValidation: false,
        checkboxValidation: true,
      },
      () => {
        const { options } = this.props.modalData;
        if (options.length > 0) {
          this.setState({ modalButton: false, hasSidedish: true });
        } else {
          this.setState({ modalButton: true, hasSidedish: false });
        }
        const addedOptionValidationArray = options.map(option => ({
          ...option,
          canAddOptions: true,
        }));
        if (options.length > 1) {
          const copyOfModalData = this.props.modalData;
          copyOfModalData.options = addedOptionValidationArray;
          this.setState(copyOfModalData, () => {
            const requiredCategories = options.filter(
              category =>
                category.groupRequired && category.groupMaxSelectionLimit === 1,
            );
            requiredCategories.map(category =>
              this.setState(previousState => ({
                modalRequiredGroupIds: [
                  ...previousState.modalRequiredGroupIds,
                  category.groupId,
                ],
              })),
            );
          });
        }
      },
    );
  }

  onChangeSideDish = (optionId, group) => {
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
    const copyOfModalData = this.props.modalData;
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
    const copyOfModalData = this.props.modalData;
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
    const findExtraCheckbox = this.props.modalData.options.find(
      option => !option.canAddOptions,
    );
    let validation = true;
    if (typeof findExtraCheckbox !== 'undefined') {
      validation = false;
    }
    this.setState({ checkboxValidation: validation }, cb);
  };

  modalPrice = () => {
    let sum = 0;
    if (this.props.modalData) {
      const { itemCount } = this.props.modalData;
      const itemPrice = this.props.modalData.price;
      sum = itemPrice * itemCount;
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

  saveItems() {
    const beautiferSidedish = SaveSideDishService.sortMethod(
      this.state.modalContainer,
      this.props.modalData.id,
    );
    const { finalItem, optionGroup } = beautiferSidedish;
    const data = {
      foodData: this.props.modalData,
      restaurant: this.props.restaurantId,
      foodGeneratedId: finalItem,
      optionGroup,
    };
    this.props.changeToGeneratedFoodId(data);
  }

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

  makeTempName = (id, name) => id + name;

  sideDishConfirm = () => {
    if (this.state.hasSidedish) {
      this.saveItems();
    } else {
      this.props.toggleModal;
    }
    this.setState({ sideConfirm: true }, () => {
      this.props.toggleModal();
    });
  };

  componentWillUnmount() {
    if (this.state.sideConfirm === false) {
      this.props.addToBasket(this.state.cloneBasketItem);
    }
    this.setState({
      modalRequiredGroupIds: [],
      modalContainer: [],
      radioValidation: false,
      checkboxValidation: true,
    });
  }

  render() {
    const classes = this.props;
    return (
      <ChiliModal
        className="modal-restaurant__detail"
        toggle={this.props.toggleModal}
        modal={classes.modals.RestaurantPageModal}
        // // alert
        // headerAlign="right"
        // title="نظر و امتیاز دهید"
      >
        {this.props.modalData && (
          <React.Fragment>
            <div className="scroll modal-restaurant__detail-body lightBg">
              <div
                className="modal-restaurant__detail-head centerBg cover gray4Bg"
                style={{
                  backgroundImage: `url(${this.props.modalData.image})`,
                }}
              >
                <ul className="flex spaceBetween reset">
                  <li className="center">
                    <span
                      className="chilivery-close text28 gray6"
                      onClick={this.props.toggleModal}
                    />
                  </li>
                  {/* <li className="center">
                    <span className="chilivery-fav-full text25 red" />
                  </li> */}
                </ul>
              </div>

              <div className="modal-restaurant__detail-content padd10">
                <h3 className="text18 bold centerText primary">
                  {this.props.modalData.name}
                </h3>

                <div className="center vM30 relative">
                  <div className="fullLine" />

                  <div className="reviews absolute flex hP20 lightBg">
                    <div className="flex i2 center gray">
                      <span className="text14 leftM3 topM3">
                        {this.props.modalData.voteCount}
                      </span>
                      <span className="chilivery-user text12" />
                    </div>

                    <div
                      className={`flex i2 center round5 ${rateColor(
                        this.props.modalData.vote,
                      )}`}
                    >
                      <span className="white text14 leftM3 topM3">
                        {this.props.modalData.vote}
                      </span>
                      <span className="chilivery-smiley-good2 white text12" />
                    </div>
                  </div>
                </div>

                <div className="text12 gray5 hP5">
                  <p>{this.props.modalData.description}</p>
                </div>

                <div className="flex primary">
                  <div className="flex price hP10 leftContent primary text16 wFull hCenter" />
                  <ul className="flex reset hInherit">
                    {this.props.modalData.lastPrice && (
                      <li className="moto flex hCenter rightP10 overLine danger">
                        <span className="text12">
                          {this.props.modalData.lastPrice}
                        </span>
                        <span className="text8 topM3 rightM3">تومان</span>
                      </li>
                    )}
                    <li className="moto flex hCenter rightP10 bold primary">
                      <span className="text16">
                        {this.props.modalData.price}
                      </span>
                      <span className="text10 topM3 rightM3">تومان</span>
                    </li>
                  </ul>
                  <div className="flex price hP10 leftContent primary text16 wFull hCenter" />
                </div>
              </div>

              {this.props.modalData.hasOption && (
                <div>
                  {this.props.modalData.options.map((category, index) => (
                    <div
                      key={index}
                      className="modal-restaurant__detail-sideDishes topM30"
                    >
                      <RestaurantSideDishGroup
                        title={this.createTitle(category)}
                        key={category.groupId}
                        isValid={category.canAddOptions}
                      >
                        {category.options.map(option => (
                          <Fragment>
                            <RestaurantSideDishRow
                              type={this.calculateFinalSideDishPrice(category)}
                              price={this.checkWithDisplayType(
                                option.foodOptionPrice,
                                category.groupPriceDisplayType,
                                this.props.modalData.price,
                              )}
                              discount={this.defineSideDishDiscount(
                                option.foodOptionPrice,
                                option.foodOptionLastPrice,
                                category.groupPriceDisplayType,
                                this.props.modalData.price,
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
                      fontSize="18"
                      restaurantId={this.props.restaurantId}
                      data={this.props.modalData}
                      type={this.props.type}
                    />
                  </div>

                  {/* <div className="flex hCenter bold primary topM5">
                    <span className="text12 leftM5">مبلغ کل :</span>
                    <span className="text22">{this.modalPrice()}</span>
                    <span className="text12 topM5 rightM3">تومان</span>
                  </div> */}
                </div>
              </div>

              <div className="i2 center">
                <Button
                  color="success w80"
                  disabled={!this.state.modalButton}
                  onClick={() => this.sideDishConfirm()}
                >
                  تایید
                </Button>
              </div>
            </div>
          </React.Fragment>
        )}
      </ChiliModal>
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
  addToBasket: value => {
    dispatch(addToBasket(value));
  },
  changeToGeneratedFoodId: value => {
    dispatch(changeToGeneratedFoodId(value));
  },
  changeBasket: value => {
    dispatch(changeBasket(value));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantModal);