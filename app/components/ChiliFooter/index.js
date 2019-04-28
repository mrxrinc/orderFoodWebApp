/**
 *
 * ChiliFooter
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import MotoChili from '../ChiliModal/components/MotoChili';
import AlertExp from '../ChiliModal/components/AlertExample';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import {getAppInit} from '../../api/global';
import {addToast} from '../../actions/Notifications';
import ChiliNotification from '../../components/ChiliNotification';


import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class ChiliFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.showAlert({
      text: 'salam',
      color: "success",
    });
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
  }

  alertExpToggle = () => {
    this.props.showModal({
      alertExp: true,
    });
  };

  render() {
    return (
      <React.Fragment>
        <footer className="chili-footer">
          <MotoChili headerAlign="center" headerColor="#eaeaea" bodyColor="#f5f5f5"/>
          <AlertExp/>

          <div className="container-fluid">
            <div className="row chili-footer__list">
              <div className="col">
                <Link to="/" className="chili-footer__list-item">
                  <div className="chili-footer__list-icon">
                    <i className="icon chilivery-yahoo" />
                  </div>
                  <div className="chili-footer__list-title">خانه</div>
                </Link>
              </div>

              <div className="col">
                <Link to="/restaurants-list/2/35.758367199999995,51.399477499999996" className="chili-footer__list-item">
                  <div className="chili-footer__list-icon">
                    <i className="icon chilivery-filter-restaurant-type" />
                  </div>
                  <div className="chili-footer__list-title">رستوران</div>
                </Link>
              </div>

              <div className="col">
                <Link to="/kit" className="chili-footer__list-item active">
                  <span className="chili-footer__list-icon">
                    <span className="chili-footer__badge badge badge-success">
                      <span>9</span>
                    </span>
                    <i className="icon chilivery-basket" />
                  </span>
                  <span className="chili-footer__list-title">سبد خرید</span>
                </Link>
              </div>

              <div className="col">
                <Link to="/profile" className="chili-footer__list-item">
                  <div className="chili-footer__list-icon">
                    <i className="icon chilivery-user" />
                  </div>
                  <div className="chili-footer__list-title">پروفایل</div>
                </Link>
              </div>

              <div className="col">
                <Link to="/more-menu" className="chili-footer__list-item">
                  <div className="chili-footer__list-icon">
                    <i className="icon chilivery-more" />
                  </div>
                  <div className="chili-footer__list-title">بیشتر</div>
                </Link>
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
  Notification:state.Notification
});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
      dispatch(showModal(showStatus))
  },
  showAlert: (showStatus) => {
    dispatch(addToast(showStatus));
},
});

export default connect(mapStateToProps, mapDispatchToProps)(ChiliFooter);
