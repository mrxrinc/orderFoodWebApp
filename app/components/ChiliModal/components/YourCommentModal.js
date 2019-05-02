import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import './YourCommentModal.scss';

class YourCommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourComment:"خیلی خوب بود و کلی کیف داد.",
      moreDetailComment:false,
      foodOveralAccourdion: false,
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

  accordionToggle = () => {
    this.setState({
      foodOveralAccourdion: !this.state.foodOveralAccourdion
    })
  }

  rateFace = ({name,fontSize,labelHide}) => (
    <div className="center restaurant-comment__facerate">
      <label className={`rCol center ${labelHide ? "label-hide" : "" }`}>
        <input type="radio" name={name}/>
        <span className={`checkmark ${fontSize}`}/>
      </label>
      <label className={`rCol center ${labelHide ? "label-hide" : "" }`}>
        <input type="radio" name={name}/>
        <span className={`checkmark ${fontSize}`}/>
      </label>
      <label className={`rCol center ${labelHide ? "label-hide" : "" }`}>
        <input type="radio" name={name}/>
        <span className={`checkmark ${fontSize}`}/>
      </label>
    </div>
  )

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
        title="نظر و امتیاز دهید"
        className="chili-modal__alert"
      >
        <div className="container-fluid restaurant-comment">
          <div className="text-center padd15">به این سفارش امتیاز دهید</div>
          <div className="center round20 boxShadow1" style={{height:'130px'}}>
              {this.rateFace({
                  name:'radioMian',
                  fontSize:'text50',
                })
              }
          </div>

          { this.state.moreDetailComment &&
            <div className="restaurant-comment__form-rate topP40">
              <div className="text-center">لطفاً در صورت تمایل فرم زیر را کامل نمایید:</div>
              <ul className="restaurant-comment__form-main-list topP20">

                <li className="restaurant-comment__form-main-item row hCenter">
                  <div className="col-6" onClick={this.accordionToggle}>کیفیت غذا</div>
                  <div className="col-6">
                    {this.rateFace({name:'name1',fontSize:'text30',labelHide:true})}
                  </div>
                  { this.state.foodOveralAccourdion &&
                    <ul className="col">

                      <li className="row hCenter">
                        <div className="col-6 gray6 rightP30">همبرگر</div>
                        <div className="col-6">
                          {this.rateFace({name:'name1',fontSize:'text25',labelHide:true})}
                        </div>
                      </li>
                      
                      <li className="row hCenter">
                        <div className="col-6 gray6 rightP30">همبرگر</div>
                        <div className="col-6">
                          {this.rateFace({name:'name1',fontSize:'text25',labelHide:true})}
                        </div>
                      </li>
                      
                    </ul>
                  }
                </li>

                <li className="restaurant-comment__form-main-item row hCenter">
                  <div className="col-6">سرعت ارسال غذا</div>
                  <div className="col-6">
                    {this.rateFace({name:'name1',fontSize:'text30',labelHide:true})}
                  </div>
                </li>

                <li className="restaurant-comment__form-main-item row hCenter">
                  <div className="col-6">تجربه سفارش با چیلیوری</div>
                  <div className="col-6">
                    {this.rateFace({name:'name2',fontSize:'text30',labelHide:true})}
                  </div>
                </li>

              </ul>
            </div>
          }

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

          <div className="center padd20">
            <button type="button" className="btn btn-success">ثبت</button>
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
