import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import './YourCommentModal.scss';

class YourCommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourComment:"خیلی خوب بود و کلی کیف داد."
    };
  }

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
  };
  
  toggleLogin = () => {
    this.props.showModal({
      yourCommentModal: false,
    });
  };

  render() {
    const classes = this.props;
    return (
      <ChiliModal
        toggle={this.toggleLogin}
        modal={classes.modals.yourCommentModal}
        headerAlign={classes.headerAlign}
        headerColor={classes.headerColor}
        bodyColor={classes.bodyColor}
        // alert
        headerAlign="right"
        title="جزییات سفارش"
        className="chili-modal__alert"
      >
        <div className="container-fluid restaurant-comment">
          <div className="text-center padd15">به این سفارش امتیاز دهید</div>
          <div className="center restaurant-comment__facerate round20 boxShadow1">
            <div className="rCol center padd15">
              <i className="icon chilivery-star green text50"></i>
              <div className="padd10">راضی</div>
            </div>
            <div className="rCol center padd15">
              <i className="icon chilivery-star green text50"></i>
              <div className="padd10">راضی</div>
            </div>
            <div className="rCol center padd15">
              <i className="icon chilivery-star green text50"></i>
              <div className="padd10">راضی</div>
            </div>
          </div>

          <div className="restaurant-comment__form-rate topP40">
              <div className="text-center">لطفاً در صورت تمایل فرم زیر را کامل نمایید:</div>
              <ul className="restaurant-comment__form-main-list topP20">

                <li className="restaurant-comment__form-main-item row hCenter">
                  <div className="col-6">سرعت ارسال غذا</div>
                  <div className="col-6 center">
                    <div className="rCol center padd15">
                      <i className="icon chilivery-star green text30"></i>
                    </div>
                    <div className="rCol center padd15">
                      <i className="icon chilivery-star green text30"></i>
                    </div>
                    <div className="rCol center padd15">
                      <i className="icon chilivery-star green text30"></i>
                    </div>
                  </div>
                </li>

                <li className="restaurant-comment__form-main-item row hCenter">
                  <div className="col-6">سرعت ارسال غذا</div>
                  <div className="col-6 center">
                    <div className="rCol center padd15">
                      <i className="icon chilivery-star green text30"></i>
                    </div>
                    <div className="rCol center padd15">
                      <i className="icon chilivery-star green text30"></i>
                    </div>
                    <div className="rCol center padd15">
                      <i className="icon chilivery-star green text30"></i>
                    </div>
                  </div>
                </li>

              </ul>
          </div>

          
          <div className="restaurant-comment__form topP40">
              <div className="chili-animate-field form-group">
								<div className="form-control">
									<textarea
										name="yourComment"
										value={this.state.yourComment}
                    onChange={this.onChange}
                    className="bold"
									>
									</textarea>
								</div>

								<label htmlFor="yourComment" style={{paddingRight:0}}>نظر شما (در صورت تمایل)</label>
                <i
                  className={`chilivery-icon chilivery-speech yellow`}
                  style={{
                    color:'#A19E3E',
                  }}
                />

							</div>
          </div>
          <div className="center topM40">
            <button type="button" className="btn btn-success btn-big">
              ثبت
            </button>
          </div>

        </div>        
      </ChiliModal>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
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
)(YourCommentModal);
