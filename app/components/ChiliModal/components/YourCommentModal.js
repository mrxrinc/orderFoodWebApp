import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import './YourCommentModal.scss';
import index from '../../../containers/RestaurantPage/components/rateFace';
import { addComment } from '../../../api/application/comment';
import { addToast } from '../../../actions/Notifications';


class YourCommentModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yourComment:            "خیلی خوب بود و کلی کیف داد.",
      moreDetailComment:      false,
      foodOveralAccourdion:   false,
      overall:                null,
      buyExperience:          null,
      deliverySpeed:          null,
      foodOverall:            null
    };
  }

	onChange = e => {
		this.setState({ [e.target.name]: e.target.value },()=>{
      if(this.state.overall !== "3" && this.state.overall !== null ){
        this.setState({
          moreDetailComment:true
        })
      }else{
        this.setState({
          moreDetailComment:false
        })
        
      }
      if(this.state.foodOverall !== "3" && this.state.foodOverall !== null ){
        this.setState({
          foodOveralAccourdion:true
        })
      }else{
        this.setState({
          foodOveralAccourdion:false
        })
      }
    });
  };
  
  toggleCommentModal = () => {
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
        <input type="radio" name={name} onChange={this.onChange} value="3"/>
        <span className={`checkmark ${fontSize}`}/>
      </label>
      <label className={`rCol center ${labelHide ? "label-hide" : "" }`}>
        <input type="radio" name={name} onChange={this.onChange} value="2"/>
        <span className={`checkmark ${fontSize}`}/>
      </label>
      <label className={`rCol center ${labelHide ? "label-hide" : "" }`}>
        <input type="radio" name={name} onChange={this.onChange} value="1"/>
        <span className={`checkmark ${fontSize}`}/>
      </label>
    </div>
  )

  subMit = () => {
    let foods = this.props.data.items.map(item => item.food.id);
    let yourComment = {
      "orderId":  this.props.data.id,
      "foods":foods,
      "reviewData":  {
        "overall":  this.state.overall,
        "buyExperience": this.state.buyExperience,
        "deliverySpeed":this.state.deliverySpeed,
        "foodOverall":this.state.foodOverall,
        "text":  "good",
        "foodQuality":foods.reduce((prev, curr) => {
                        prev[curr] = this.state[curr];
                        return prev;
                      }, {})
                    
      }
    }

    addComment(yourComment).then(
      response => {
        this.toggleCommentModal();
        if(response.status){
          this.props.showAlert({
            text: response.message_fa,
            color: "success",
          });
          () => this.props.onSuccess()
        }else{
          () => this.props.onSuccess()
          this.props.showAlert({
            text: response.message_fa,
            color: "danger",
          });
        }
      }
      ).catch(
        error => {
          this.toggleCommentModal();
          this.props.showAlert({
            text: error.message_fa,
            color: "danger",
          });
			}
		)


  }

  render() {
    const classes = this.props;
    return (
      <ChiliModal
        toggle={this.toggleCommentModal}
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
                  name:'overall',
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
                    {this.rateFace({name:'foodOverall',fontSize:'text30',labelHide:true})}
                  </div>
                  { this.state.foodOveralAccourdion &&
                    <ul className="col">
                      { this.props.data.items.map((item,index)=> 
                        <li className="row hCenter" key={index}>
                          <div className="col-6 gray6 rightP30">{item.food.name}</div>
                          <div className="col-6">
                            {this.rateFace({name:item.food.id,fontSize:'text25',labelHide:true})}
                          </div>
                        </li>
                      )}                      
                    </ul>
                  }
                </li>

                <li className="restaurant-comment__form-main-item row hCenter">
                  <div className="col-6">سرعت ارسال غذا</div>
                  <div className="col-6">
                    {this.rateFace({name:'deliverySpeed',fontSize:'text30',labelHide:true})}
                  </div>
                </li>

                <li className="restaurant-comment__form-main-item row hCenter">
                  <div className="col-6">تجربه سفارش با چیلیوری</div>
                  <div className="col-6">
                    {this.rateFace({name:'buyExperience',fontSize:'text30',labelHide:true})}
                  </div>
                </li>

              </ul>
            </div>
          }

          <div className="restaurant-comment__form topP40">
              <div className="chili-animate-field form-group">
								<div className="form-control">
									<textarea
										name="text"
										value={this.state.text}
                    onChange={this.onChange}
                    className="bold"
									>
									</textarea>
								</div>

								<label htmlFor="text" style={{paddingRight:0}}>نظر شما (در صورت تمایل)</label>
                <i
                  className={`chilivery-icon chilivery-speech yellow`}
                  style={{
                    color:'#A19E3E',
                  }}
                />
							</div>
          </div>

          <div className="center padd20">
            <button type="button" className="btn btn-success" onClick={this.subMit}>ثبت</button>
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
  showAlert: (showStatus) => {
    dispatch(addToast(showStatus));
	},
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(YourCommentModal);
