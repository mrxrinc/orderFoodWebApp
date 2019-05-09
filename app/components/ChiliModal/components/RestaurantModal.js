import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { Modal } from 'reactstrap';
import RestaurantSideDishGroup from '../../../components/RestaurantSideDishGroup';
import RestaurantSideDishRow from '../../../components/RestaurantSideDishRow';
import ChiliModal from '../../../components/ChiliModal';
import { Button } from 'reactstrap';
import { rateColor } from '../../../components/GeneralFunctions';
import Stepper from '../../../components/ChiliStepper';
class AlertBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalData: props.modalData,
      modalContainer: [],
      //when modal with sidedish foods opens , we create collection for Id's of radio buttons
      modalRequiredGroupIds: [],
      //when modal with sidedish foods opens , we create flag for whole checkbox validation
      checkboxValidation: true,
      //when modal with sidedish foods opens , we create container for whole user's input
      modalButton: false,

    };
  }

  componentDidMount(){
    console.log('===========moda==================');
    console.log(this.props);
    console.log('====================================');
  }

  modalPrice = () => {
    let sum = 0;
    if (this.props.modalData) {
      const { count } = this.props.modalData;
      const itemPrice = this.props.modalData.price;
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

  makeTempName = (id, name) => id + name;




  render() {
    const classes = this.props;
    return (
      <ChiliModal
        className="modal-restaurant__detail"
        toggle={this.props.toggleLogin}
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
                <div className="flex price hP10 leftContent primary text16 wFull hCenter">
                  {/* <Stepper
                    className="topM20"
                    fontSize="18"
                    parentId={this.props.modalData.id}
                    value={this.props.modalData.count}
                    stepper={this.stepper}
                  /> */}
                </div>
              </div>
            </div>

            {this.props.modalData.hasOption && (
              <div>
                {this.props.modalData.options.map(category => (
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
                  {/* 
                  <Stepper
                    className="topM10"
                    fontSize="18"
                    parentId={this.props.modalData.id}
                    value={this.props.modalData.count}
                    // stepper={this.stepper}
                  /> */}

                  <Stepper
                    fontSize="18"
                    restaurantId={
                      this.props.type === "modal" ?
                      this.props.modalData.item.id:
                      this.props.modalData.id
                    
                    }
                    data={
                      this.props.type === "modal" ?
                      this.props.basket.items[this.props.modalData.item.id]:
                      this.props.basket.items[this.props.modalData.id]
                    }
                    type={this.props.type}
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
    </ChiliModal>
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
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertBody);