/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import 'react-circular-progressbar/dist/styles.css';
import { rateColor } from '../../..//components/GeneralFunctions';
import comment_empty from '../../../images/icons/comment_empty.png';
import MyComments from '../../../containers/PageProfile/MyComments';
import { orderReviewGet } from '../../../api/account';
import AfterPaymentCardItem from '../../../components/AfterPaymentCardItem';
import { showModal } from '../../../actions/Modals';
import OrderReviewModal from '../../../components/ChiliModal/components/OrderReviewModal';
import YourCommentModal from '../../../components/ChiliModal/components/YourCommentModal';
import { commentForRestaurant } from '../../../api/application/comment';
import RateFace from './rateFace';
import ChiliLoading from '../../../components/ChiliLoading';
class TabTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      orderReview: {},
      orderReviewShow: false,
      orderRate: false,
      commentData: {},
      rateCount: {},
    };
  }

  componentDidMount() {

    this.fetchComments();
    this.props.showModal({
      yourCommentModal: true,
    });
  }

  fetchComments = () => {
    commentForRestaurant(this.props.id).then(
      response => {
        this.setState({
          commentData: response.result
        }, () => {
          this.setState({
            orderRate: true
          })
        })
      }
    )
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
      className={`flex center leftContent round5 rightP5 leftP5 ${rateColor(vRate)}`}
      style={{ minWidth: '48px' }}
    >
      <span className="white text16 leftM3 topM5">{vRate}</span>
      <span className="chilivery-smiley-good2 white text14" />
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
          <span className="info" onClick={() => this.getOrderReview(order)}> (جزئیات سفارش)</span>
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

    const { commentData } = this.state
    return (
      <React.Fragment>
        {this.state.orderRate ?
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
                    {this.rateStar(commentData.foodQuality)}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-6 hCenter">
              <div className="restauran-comment__rateface flex">
                <div className="row">
                  <RateFace
                    iconStar="chilivery-star green"
                    color="#1CBD2F"
                    end={commentData.rateCount[3].avg}
                  />
                  <RateFace
                    iconStar="chilivery-smiley-average yellow"
                    color="#f79e40"
                    end={commentData.rateCount[2].avg}
                  />
                  <RateFace
                    iconStar="chilivery-smiley-bad red"
                    color="#e1373c"
                    end={commentData.rateCount[1].avg}
                  />

                </div>
              </div>
            </div>

            {(commentData.canWriteComment !== null && commentData.canWriteComment !== false) ?
              <div className="col-12">
                {this.submitYourComment(commentData.canWriteComment.id)}
              </div> : null
            }

            {commentData.comments.length > 0 ?
              <div className="col-12">
                <div className="topP40">
                  <MyComments data={commentData.comments} />
                </div>
              </div> :
              <div className="col-12">
                {this.rateEmpty}
              </div>
            }

            <div className="modals">

              {this.state.orderReviewShow &&
                <OrderReviewModal data={this.state.orderReview} headerAlign="center" headerColor="#eaeaea" bodyColor="#f5f5f5" />
              }

              {(commentData.canWriteComment !== null && commentData.canWriteComment !== false) ?
                <YourCommentModal
                  data={commentData.canWriteComment}
                  headerAlign="center"
                  headerColor="#eaeaea"
                  bodyColor="#f5f5f5"
                  onSuccess={this.fetchComments}
                /> : null
              }
            </div>
          </div> : <ChiliLoading/>
        }
      </React.Fragment>
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

