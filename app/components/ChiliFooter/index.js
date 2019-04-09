/**
 *
 * ChiliFooter
 *
 */

import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../ChiliModal/components/Login';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class ChiliFooter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.showModal({
      loginModal: true,
      forGotModal: false,
      resetPassModal: false,
      successChangePassModal: false,
      trackingModal: false,
      isVerifyModal: false,
      verifyModal: false,
    });
  }

  render() {
    return (
      <footer className="chili-footer">
        <Login />
        <div className="container">
          <div className="row chili-footer__list">
            <div className="col">
              <div className="chili-footer__list-item">
                <div className="chili-footer__list-icon">
                  <i className="icon chilivery-yahoo" />
                </div>
                <div className="chili-footer__list-title">خانه</div>
              </div>
            </div>

            <div className="col">
              <div className="chili-footer__list-item">
                <div className="chili-footer__list-icon">
                  <i className="icon chilivery-filter-restaurant-type" />
                </div>
                <div className="chili-footer__list-title">رستوران</div>
              </div>
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
              <div className="chili-footer__list-item">
                <div className="chili-footer__list-icon">
                  <i className="icon chilivery-user" />
                </div>
                <div className="chili-footer__list-title">پروفایل</div>
              </div>
            </div>

            <div className="col">
              <div className="chili-footer__list-item">
                <div className="chili-footer__list-icon">
                  <i className="icon chilivery-more" />
                </div>
                <div className="chili-footer__list-title">بیشتر</div>
              </div>
            </div>


          </div>
        </div>
      </footer>
    );
  }
}



const mapStateToProps = state => ({
  modals: {
      loginModal: state.Modals.loginModal,
  },
});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
      dispatch(showModal(showStatus))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ChiliFooter);
