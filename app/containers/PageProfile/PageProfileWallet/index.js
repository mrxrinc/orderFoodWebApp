import React,{Component} from 'react';
import { connect } from "react-redux";
import { AnimateField } from '../../../components/ChiliForm';
import './editprofile.scss';
import {history} from '../../../store';
import BankList from '../../../components/ChiliBankList';
import { walletIncreace,walletIncreaceGift,endIncrease } from '../../../api/account/';
import {addToast} from '../../../actions/Notifications';
import {getUserGiftBalance} from '../../../actions/Auth';
import PanigaleEnNumber from '../../../components/ChiliNumber';
import {
  addValidation,removeValidation
} from 'actions/Validations';
import {
  disableLoading,
  enableLoading
} from 'actions/Loading';

class ProfileWallet extends React.Component{
	constructor(props){
		super(props)
		this.state={
			userCredit: '',
      userCreditGift: '',
      gatewayId: '',
		}
	}
	
  submitBalance = (e) => {
    e.preventDefault();
    this.props.enableLoading({walletIncLoading:true});
    walletIncreace({
      payAmount: PanigaleEnNumber(this.state.userCredit),
			bankgate: this.state.gatewayId,
			"acceptConditions": true,
    }).then(response => {
      this.props.disableLoading({walletIncLoading:false});
      if(response.status){
        this.props.showAlert({
          text: 'درحال انتقال به بانک',
          color: "success",
        });
        window.location = response.result.url;
        this.props.removeValidation({
          walletInc: {},
        });
      }else{
        this.props.showAlert({
          text: response.message_fa,
          color: "danger",
          delay:3000
          })
      }
    }).catch(error =>{
      this.props.disableLoading({walletIncLoading:false});
        if(error.status === 422){
          this.props.addValidation({
            walletInc: error.data.errors,
          });
        }else{
          this.props.showAlert({
            text: error.message_fa,
            color: "danger",
          });
        }
    })
  }

  submitGift = (e) => {
    e.preventDefault();
    this.props.enableLoading({walletIncGiftLoading:true});

    walletIncreaceGift({
      campaignCode: PanigaleEnNumber(this.state.userCreditGift),
    }).then(response => {
      this.props.disableLoading({walletIncGiftLoading:false});
      if(response.status){
        this.props.showAlert({
          text: response.message_fa,
          color: "success",
          delay:3000
        })
        this.props.onUpdateBalance({
          payAmount:response.data.new_balance
        });
        this.setState({userCreditGift:''});
      }else{
        this.props.showAlert({
          text: response.message_fa,
          color: "danger",
          delay:3000
        })
      }

    }).catch(error =>{
      this.props.disableLoading({walletIncGiftLoading:false});
      if(error.status === 422){
        this.props.addValidation({
          giftInc: error.data.errors,
        });
      }else{
        this.props.showAlert({
          text: error.message_fa,
          color: "danger",
        });
      }
    })
  }


  handleKeyPressBalance = (e) => {
    if (e.key === 'Enter') {
      this.submitBalance(e);
    }
  }

  handleKeyPressGift = (e) => {
    if (e.key === 'Enter') {
      this.submitGift(e);
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChangeGateway = (name, value) => {
    this.setState({ [name]: value });
  }
  onChangeNumber = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  componentDidMount() {

    // check user login
    if (typeof this.props.user.id === "undefined") {
      history.push("/");
    }

    // get location token for endIncrease API
    const locationToken = history.location.search.match(/token=([^&]*)/)
    if(locationToken){
      endIncrease(locationToken[1]).then(response => {
        if(response.status === "success"){
          this.props.showAlert({
            text: response.message,
            color: "success",
            delay:3000
          })
          this.props.onUpdateBalance({
            payAmount:response.data.new_balance
          });
        }else{
          this.props.showAlert({
            text: response.message,
            color: "danger",
            delay:3000
          })
        }
      }).catch(error =>{
        this.props.showAlert({
          text: error.message,
          color: "danger",
          delay:3000
        })
      })
    }
  }

	render(){
		const {
      userCredit,
      userCreditGift,
      gatewayId,

    } = this.state;
    const classes = this.props;
		return(
			<div className="profile-edit">
				<div className="container">
        <div className="panigale-page-profile__credit">
          <div className="row">
            <AnimateField
              className="col-12"
              placeholder="وارد نمایید"
              name="userCredit"
              type="text"
              label=" مبلغ افزایش موجودی (تومان)"
              value={userCredit}
              onChange={this.onChangeNumber}
              onKeyPress={this.handleKeyPressBalance}
              validation={
                typeof classes.validation.wallet.payAmount === "undefined"?
                false:classes.validation.wallet.payAmount
              }
              required={true}
            />

            <div className="panigale-animate-field form-group col-sm-8 mt-3">
              <div className="panigale-page-profile__credit-list">
                <BankList
                  gatewayId={gatewayId}
                  onChange={this.handleChangeGateway}
                />
              </div>
              {gatewayId &&
                <label>انتخاب درگاه بانکی</label>
              }
            </div>

            {gatewayId &&
              <div className="form-group col-sm-4">
                <button className={!classes.loading.walletIncLoading?"btn btn-danger ml-0":"btn ml-0 btn-loading btn-disable disabled-link"}
                    onClick={this.submitBalance}>ثبت
                </button>
              </div>
            }


          </div>
        </div>

        <h2 className="panigale-page-profile__title panigale-page-profile__password mt-4">
          <i className="icon icon-present mr-2"></i>
          افزایش موجودی با کد هدیه
        </h2>
        <div className="panigale-page-profile__user-edit">
          <div className="row">
            <AnimateField
              className="col"
              placeholder="وارد نمایید"
              name="userCreditGift"
              type="text"
              label="کد افزایش موجودی"
              value={userCreditGift}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressGift}
              validation={
                typeof classes.validation.gift.gift_code === "undefined"?
                false:classes.validation.gift.gift_code
              }
              required={true}
            />
            <div className="panigale-page-profile__credit-gift form-group col-auto">
              <button className={!classes.loading.walletIncGiftLoading?"btn btn-danger":"btn btn-loading btn-disable disabled-link"}
								onClick={this.submitGift}>ثبت
							</button>
            </div>
          </div>
        </div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
  user: state.auth,
  validation: {
    wallet:state.Validation.walletInc,
    gift:state.Validation.giftInc,
  },
  loading: {
    walletIncLoading:state.Loading.walletIncLoading,
    walletIncGiftLoading:state.Loading.walletIncGiftLoading,
  },
});

const mapDispatchToProps = dispatch => ({
  showAlert: (showStatus) => {
    dispatch(addToast(showStatus));
  },
  onUpdateBalance: (showStatus) => {
    dispatch(getUserGiftBalance(showStatus));
  },
  addValidation: (validationStatus) => {
    dispatch(addValidation(validationStatus));
  },
  removeValidation: (validationStatus) => {
      dispatch(removeValidation(validationStatus));
  },
  disableLoading: (loadingStatus) => {
    dispatch(disableLoading(loadingStatus));
  },
  enableLoading: (loadingStatus) => {
      dispatch(enableLoading(loadingStatus));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileWallet)