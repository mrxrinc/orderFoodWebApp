import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { showModal } from '../../actions/Modals';
import {history} from '../../store';
import foodImg from '../../images/foodImg.jpg';
import logo from '../../images/restaurant-logo.jpg';
import cover from '../../images/cover.jpg';

import RestaurantHeader from '../../components/RestaurantHeader/index';
import RestaurantFoodGroup from '../../components/RestaurantFoodGroup/index';
import RestaurantFoodCard from '../../components/RestaurantFoodCard/index';
import Modal from '../../components/ChiliModal/index';
import Stepper from '../../components/IncrementDecrease';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class RestaurantPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      RestaurantPageModal: false,
    };
  }

  toggleModal = (e) => {
    e.preventDefault();
    this.setState(
      { RestaurantPageModal: !this.state.RestaurantPageModal },
      () => {
        this.props.showModal({
          RestaurantPageModal: this.state.RestaurantPageModal,
        });
        if(this.state.RestaurantPageModal === false){
          history.push("/cart");
        }
      },
      );
  };

  render() {
    return (
      <div className="lightBg rtl">
        <RestaurantHeader toggle={this.toggleModal} cover={cover} logo={logo} />

        <div className="stickyMenu wFull" />

        <div className="hP10 vM10">
          <RestaurantFoodGroup
            title="چلوکباب"
            icon="chilivery-restaurant-italian"
          >
            <RestaurantFoodCard onClick={this.toggleModal} foodImg={foodImg} />
            <RestaurantFoodCard foodImg={foodImg} />
            <RestaurantFoodCard foodImg={foodImg} />
          </RestaurantFoodGroup>

          <RestaurantFoodGroup
            title="غذای ایرانی"
            icon="chilivery-restaurant-homemade"
          >
            <RestaurantFoodCard foodImg={foodImg} />
            <RestaurantFoodCard foodImg={foodImg} />
            <RestaurantFoodCard foodImg={foodImg} />
          </RestaurantFoodGroup>
        </div>

        <Modal
          className="modal-restaurant__detail"
          modal={this.props.modals.RestaurantPageModal}
          toggle={this.toggleModal}
        >
          <div className="scroll modal-restaurant__detail-body lightBg">
            <div
              className="modal-restaurant__detail-head centerBg cover gray4Bg"
              style={{ backgroundImage: `url(${foodImg})` }}
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
                پیتزا مخصوص یونانی قارچ و گوشت تند پنجره‌ای ویژه رستوران لوکس
                تهران
              </h3>

              <div className="center vM30 relative">
                <div className="fullLine" />

                <div className="reviews absolute flex hP20 lightBg">
                  <div className="flex i2 center gray">
                    <span className="text14 leftM3 topM3">87</span>
                    <span className="chilivery-user text12" />
                  </div>

                  <div className="flex i2 center tagBg round5">
                    <span className="white text14 leftM3 topM3">4/7</span>
                    <span className="chilivery-smiley-good2 white text12" />
                  </div>
                </div>
              </div>

              <div className="text12 gray5 hP5">
                <p>
                  خمیر مخصوص ، 250 گرم گوشت ، پنیر مخصوص ، پیاز حلقه شده ، سس
                  باربیکیو ، قارچ حلقه شده ، فلفل دلمه‌ای ، سوسیس ، ژامبون مخصوص
                  ، گوجه فرنگی ، پنیر مخصوص ، پیاز حلقه شده ، قارچ حلقه شده ،
                  دلـمه‌ای ، سوسیس ، ژامبون مخصوص
                </p>
              </div>

              <div className="flex primary">
                <ul className="flex reset hInherit">
                  <li className="moto flex hCenter rightP10 overLine danger">
                    <span className="text12">25,000</span>
                    <span className="text8 topM3 rightM3">تومان</span>
                  </li>
                  <li className="moto flex hCenter rightP10 bold primary">
                    <span className="text16">20,000</span>
                    <span className="text10 topM3 rightM3">تومان</span>
                  </li>
                </ul>
                <div className="flex price hP10 leftContent primary text16 wFull hCenter">
                  <Stepper className="topM20" fontSize="18" />
                </div>
              </div>
            </div>
          </div>

          <div className="modal-restaurant__detail-footer wFull flex bgWhite">
            <div className="center i2">
              <div className="">
                <div className="flex hP10 primary text16 center">
                  <Stepper fontSize="18" />
                </div>

                <div className="flex hCenter bold primary topM8">
                  <span className="text12 leftM5">مبلغ کل :</span>
                  <span className="text22">20,000</span>
                  <span className="text12 topM5 rightM3">تومان</span>
                </div>
              </div>
            </div>

            <div className="i2 center">
              <Button color="success w80" onClick={this.toggleModal}>تایید</Button>
            </div>
          </div>
        </Modal>
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
  showModal: showStatus => {
    dispatch(showModal(showStatus));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantPage);
