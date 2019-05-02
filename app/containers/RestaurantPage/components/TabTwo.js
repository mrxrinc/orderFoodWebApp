/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { rateColor } from '../../..//components/GeneralFunctions';
import comment_empty from '../../../images/icons/comment_empty.png';
import MyComments from '../../../containers/PageProfile/MyComments';
import { orderReviewGet } from '../../../api/account';
import AfterPaymentCardItem from '../../../components/AfterPaymentCardItem';
import { showModal } from '../../../actions/Modals';
import OrderReviewModal from '../../../components/ChiliModal/components/OrderReviewModal';
import YourCommentModal from '../../../components/ChiliModal/components/YourCommentModal';
import {commentForRestaurant} from '../../../api/application/comment';

class TabTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      percentage: {
        start: 0,
        orderReview: {},
        orderReviewShow: false,
        commentData:{}
      }
    };
  }

  componentDidMount() {
    
    commentForRestaurant(this.props.id).then(
      response => {
        this.setState({
          commentData: response.result
        },()=>{
          console.log('===============respose.result===========');
          console.log(this.state.commentData);
          console.log('====================================');
        })
      }
    )

    const rateAnimate = (() => {
      let setTimer = setInterval(() => {
        this.setState({
          percentage: {
            start: this.state.percentage.start + 1,
            end: 75,
          }
        }, () => {
          if (this.state.percentage.start >= this.state.percentage.end) {
            clearTimeout(setTimer);
          }
        })
      }, 0);
    })()

  }

  yourCommentModal = () => {
    this.props.showModal({
      yourCommentModal: true,
    });
  }

  orderReviewModal = () => {
    this.props.showModal({
      orderReviewModal: true,
    });
  };


  getOrderReview = (orderId) => {
    orderReviewGet(orderId).then(
      response => {
        this.setState({
          orderReview: response.result.order,
          orderReviewShow: true,
        }, () => {
          this.orderReviewModal();
        })
      }
    )
  }

  rateStar = (vRate) => (
    <div
      className={`flex center round5 rightP5 leftP5 ${rateColor(vRate)}`}
    >
      <span className="white text16 leftM3 topM5">{vRate}</span>
      <span className="chilivery-smiley-good2 white text14" />
    </div>
  )

  rateFace = (vStart, iconStart, color) => (
    <div className="col text-center padd5">
      <div className="center">
        <CircularProgressbar
          percentage={vStart}
          styles={{
            path: {
              stroke: color,
              transition: 'stroke-dashoffset 0s ease 0s',
            },
          }}
        />
        <span className={`icon absolute text30 icon ${iconStart}`}> </span>
      </div>
      <span>{vStart}%</span>
    </div>
  )

  rateEmpty = (() => (
    <div className="restauran-comment__empty center rCol topP40 bottomP40">
      <img src={comment_empty} className="i3 bottomP20"></img>
      <div className="restauran-comment__empty-box text-center text14">
        <div className="restauran-comment__empty-title bold bottomP15">تاکنون هیچ نظری درباره این رستوران ارسال نشده است!</div>
        <div className="restauran-comment__empty-desc">از این رستوران سفارش دهید و سپس اولین نفری باشید که به این رستوران نظر و امتیاز خواهد داد.
        </div>
      </div>
    </div>
  ))()


  submitYourComment = (order) => (
    <div className="restauran-comment__submit center rCol padd15 round20 topM40">
      <div className="restauran-comment__submit-box text-center text14">
        <div className="restauran-comment__submit-title bottomP15">
          <span className="dInlineBlock">نظر شما درباره سفارش</span>
          <span className="dInlineBlock rightP5 leftP5">{order}</span>
          <span className="info" onClick={() => this.getOrderReview('CHL-9XA640YA')}> (جزئیات سفارش)</span>
        </div>
        <div className="restauran-comment__submit-title padd10 round10 purple5Bg white">
          <i className="icon chilivery-forget-pass-1 text18 leftP5"></i>
          <span className="bold text12">با هر نظر به سفارش‌های خود، ۵٪ تخفیف بگیرید.</span>
        </div>
        <button className="btn btn-success btn-big topM15" onClick={this.yourCommentModal}>ثبت امتیاز و نظر</button>
      </div>
    </div>
  )

  render() {

    const {commentData} = this.state
    return (
      <div className="row padd10">

        <div className="col-6 hCenter">
          <div className="restauran-comment__ratebox flex rCol wFull">
            <div className="flex center bottomP10">
              <span className="text14 leftP10">سرعت ارسال</span>
              <div className="rightMauto">
                {this.rateStar(commentData.deliverySpeed)}
              </div>
            </div>
            <div className="flex center">
              <span className="text14 leftP10">کیفیت غذا</span>
              <div className="rightMauto">
                {this.rateStar(commentData)}
              </div>
            </div>
          </div>
        </div>

        <div className="col-6 hCenter">
          <div className="restauran-comment__rateface flex">
            <div className="row">

              {this.rateFace(
                this.state.percentage.start,
                "chilivery-star green",
                "#1CBD2F"
              )}

              {this.rateFace(
                this.state.percentage.start,
                "chilivery-smiley-average yellow",
                "#FFD500"
              )}

              {this.rateFace(
                this.state.percentage.start,
                "chilivery-smiley-bad red",
                "#e1373c"
              )}

            </div>
          </div>
        </div>

        <div className="col-12">
          <div className="topP40">
            <MyComments type={'profile1'} />
          </div>
        </div>

        <div className="col-12">
          {this.submitYourComment('9Z9WA8Y')}
        </div>

        <div className="col-12">
          {this.rateEmpty}
        </div>

        <div className="modals">
          {this.state.orderReviewShow &&
            <OrderReviewModal data={this.state.orderReview} headerAlign="center" headerColor="#eaeaea" bodyColor="#f5f5f5" />
          }
          <YourCommentModal data={this.state.orderReview} headerAlign="center" headerColor="#eaeaea" bodyColor="#f5f5f5" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    orderReviewModal: state.Modals.orderReviewModal,
    yourCommentModal: state.Modals.yourCommentModal,
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
)(TabTwo);

