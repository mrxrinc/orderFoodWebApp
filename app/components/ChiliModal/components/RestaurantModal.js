import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import RestaurantSideDishGroup from '../../RestaurantSideDishGroup';
import RestaurantSideDishRow from '../../RestaurantSideDishRow';
import ChiliModal from '..';
import { rateColor } from '../../GeneralFunctions';
import Stepper from '../../ChiliStepper';

class RestaurantModal extends Component {
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

  makeTempName = (id, name) => id + name;


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
                  <div className="flex price hP10 leftContent primary text16 wFull hCenter">
                    {/* <Stepper
                    className="topM20"
                    fontSize="18"
                    parentId={this.props.modalData.id}
                    value={this.props.modalData.count}
                    stepper={this.stepper}
                  /> */}
                  </div>
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
                  </div>
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
                                this.props.onChangeSideDish(
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
                      restaurantId={this.props.modalData.id}
                      data={this.props.modalData}
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
                  // disabled={!this.state.modalButton}
                  onClick={this.props.toggleModal}
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
});

export default connect(
  mapStateToProps,
  null,
)(RestaurantModal);
