/**
 *
 * ChiliFooter
 *
 */

import React from 'react';
import { NavLink } from 'react-router-dom';
import MotoChili from '../ChiliModal/components/MotoChili';
import AlertExp from '../ChiliModal/components/AlertExample';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import {getAppInit} from '../../api/global';
import {balanceGet} from '../../api/account';
import {addToast} from '../../actions/Notifications';
import ChiliNotification from '../../components/ChiliNotification';
import {updateUserBalance} from '../../actions/Auth';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class ChiliFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalCount:this.props.basket.totalCount,
    };
  }

  componentDidMount() {
    // notification sample 
    // this.props.showAlert({
    //   text: 'salam',
    //   color: "success",

    // });
    this.props.showModal({
      motochiliModal: false,
      UserPositionModal: false,
      alertExp: false,
      successChangePassModal: false,
      trackingModal: false,
      isVerifyModal: false,
      verifyModal: false,
    });

    getAppInit().then(
      response => {
        localStorage.setItem("token",response.result.session.token)
      }
    )

    if(this.props.Auth.mobileNumber && localStorage.getItem('token')){
      this.props.updateUserBalance();
    }
  }

  alertExpToggle = () => {
    this.props.showModal({
      alertExp: true,
    });
  };

  componentDidUpdate(prevProps){
    if(!localStorage.getItem("token")){
      getAppInit().then(
        response => {
          localStorage.setItem("token",response.result.session.token)
        }
      )
    }

    // if(prevProps.basket !== this.props.basket){

    //   console.log('=========this.props.basket.totalCount===========');
    //   console.log(this.props.basket.totalCount);
    //   console.log('====================================');
    //   this.setState({
    //     totalCount:this.props.basket.totalCount
    //   })
    // }
  }

  render() {
    return (
      <React.Fragment>
        <footer className="chili-footer">
          <MotoChili headerAlign="center" headerColor="#eaeaea" bodyColor="#f5f5f5"/>
          {/* <AlertExp/> */}

          <div className="container-fluid">
            <div className="row chili-footer__list">
              <div className="col">
                <NavLink exact to="/" className={"chili-footer__list-item" + (this.state.pathname === "/" ? " active" : "")}>
                  <div className="chili-footer__list-icon">
                    <i className="icon chilivery-yahoo" />
                  </div>
                  <div className="chili-footer__list-title">خانه</div>
                </NavLink>
              </div>

              { typeof this.props.UserPosition !== "undefined" ?
                <div className="col">
                  <NavLink
                    activeClassName="active"
                    to={`/restaurants/${this.props.UserPosition.citySlug}/${this.props.UserPosition.slug}`} className="chili-footer__list-item">
                    <div className="chili-footer__list-icon">
                      <i className="icon chilivery-filter-restaurant-type" />
                    </div>
                    <div className="chili-footer__list-title">رستوران</div>
                  </NavLink>
                </div>:null
              }

              <div className="col">
                <NavLink 
                  to={`${(typeof this.props.basket !== "undefined" && Object.keys(this.props.basket.items).length > 0) ? "/cart":"/"}`}
                  className="chili-footer__list-item"
                >
                  <span className="chili-footer__list-icon">
                    {/* {(typeof this.props.basket !== "undefined" && Object.keys(this.props.basket.items).length > 0) &&
                      <span className="chili-footer__badge badge badge-success">
                        <span>{this.state.totalCount}</span>
                      </span>
                    } */}

                    <i className="icon chilivery-basket" />
                  </span>
                  <span className="chili-footer__list-title">سبد خرید</span>
                </NavLink>
              </div>

              <div className="col">
                {this.props.Auth.id ?
                <NavLink to="/profile" className="chili-footer__list-item">
                  <div className="chili-footer__list-icon">
                    <i className="icon chilivery-user" />
                  </div>
                  <div className="chili-footer__list-title">پروفایل</div>
                </NavLink>:
                <NavLink to="/authentication" className="chili-footer__list-item">
                  <div className="chili-footer__list-icon">
                    <i className="icon chilivery-user" />
                  </div>
                  <div className="chili-footer__list-title">ورود/ثبتنام</div>
                </NavLink>
                }
              </div>

              <div className="col">
                <NavLink to="/more-menu" className="chili-footer__list-item">
                  <div className="chili-footer__list-icon">
                    <i className="icon chilivery-more" />
                  </div>
                  <div className="chili-footer__list-title">بیشتر</div>
                </NavLink>
              </div>


            </div>
          </div>
          
        </footer>
        <div className="container-fluid chili-footer__notification mt-3 absolute top">
          <ChiliNotification/>
        </div>
      </React.Fragment>
    );
  }
}



const mapStateToProps = state => ({
  Notification:state.Notification,
  Auth:state.auth,
  UserPosition:state.UserPosition.neighborhood,
  basket:state.Basket,
});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
      dispatch(showModal(showStatus))
  },
  showAlert: (showStatus) => {
    dispatch(addToast(showStatus));
  },
  updateUserBalance: () => {
    dispatch(updateUserBalance());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ChiliFooter);
