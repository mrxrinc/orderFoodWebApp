import React from 'react';
import './style.scss';
import { getSendGifCode } from '../../api/account';
import { campaginCodeChanged } from '../../actions/Basket';
import { connect } from 'react-redux';
import { cart } from '../../containers/Cart';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { addToast } from '../../actions/Notifications';

/* eslint-disable react/prefer-stateless-function */
class GiftCode extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      data:'',
      campaginCode:'',
      giftCode: false,
      userAddressModel: '',
      userAddressId:'',
      orderId:'',
      organCode:''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({"campaginCode": event.target.value});
  }
  clearGifCode= () => {
    this.setState({
      giftCode:false
    },() => {
      this.props.changeCampaginCode({campaginCode:'',discountAmount:''})
    })
  };

  sendGifCode = () => {
    getSendGifCode(
      {
        "campaginCode":this.state.campaginCode,
        "orderId":this.state.orderId,
        "userAddressId":this.state.userAddressId,
        "userAddressModel":this.state.userAddressModel
      }
    ).then(response => {
      if(response.status) {
        this.setState({
          data:response.result,
          giftCode:true
        },()=>{
          this.props.changeCampaginCode({campaginCode:this.state.campaginCode,discountAmount:this.state.data.discountAmount})
        })
      } else {
        this.props.showAlert({
          text: response.message_fa,
          color: "danger",
        });
      }
    });
  };
  componentDidMount() {
    if(this.props.organid) {
      this.setState({
        orderId:this.props.orderId,
        campaginCode:this.props.organCode,
        userAddressModel:'organ',
        userAddressId:this.props.userAddressId
      },()=>
        this.sendGifCode()
      )
    }else {
      this.setState({
        orderId:this.props.orderId,
        campaginCode:'',
        userAddressModel:'user',
        userAddressId:this.props.userAddressId
      })
    }
  }
  componentWillUnmount() {
    this.props.changeCampaginCode({campaginCode:'',discountAmount:''})
  }

  render() {
    const {giftCode,data} = this.state;
    let button;
    let detail;
    if(giftCode) {
      button = <button type="button" className="btn edit ml-0" onClick={this.clearGifCode}>????????????</button>;
      detail = <p className="giftCode__container-detail"><span className="chilivery-check-2"> </span><strong> {data && data.discountAmount} ??????????</strong>?????????? ?????????? ??????????</p>
    } else {
      button =<button type="button" className="btn success ml-0" onClick={this.sendGifCode}>??????????</button>;
      detail = <input type="text" placeholder="???? ?????????? ???? ???????? ???????? " value={this.state.campaginCode} onChange={this.handleChange}  />
    }
    return (
      <form>
        <div className="giftCode__container">
          <div className="giftCode__container-icon">
            <div className="giftCode__container-icon-cut giftCode__container-icon-cut--1"> </div>
            <div className="giftCode__container-icon-cut giftCode__container-icon-cut--2"> </div>
            <span className="chilivery-forget-pass-1"> </span>
          </div>
          {detail}
          <div className="giftCode__container-btn">
            {button}
          </div>
        </div>
      </form>
    );
  }
}



const mapDispatchToProps = dispatch => {
  return {
    changeCampaginCode: value => {
      dispatch(campaginCodeChanged(value));
    },
    showAlert: (showStatus) => {
      dispatch(addToast(showStatus));
    }
  };
};

export default connect(null,
  mapDispatchToProps
)(GiftCode);


