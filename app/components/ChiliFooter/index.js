/**
 *
 * ChiliFooter
 *
 */

import React from 'react';
import { Link } from "react-router-dom";

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class ChiliFooter extends React.Component {
  render() {
    return (
      <footer className="chili-footer">
        <div className="container">
          <div className="row chili-footer__list">
            <div className="chili-footer__list-item col">
              <div className="chili-footer__list-icon">
                <i className="icon chilivery-yahoo" />
              </div>
              <div className="chili-footer__list-title">خانه</div>
            </div>

            <div className="chili-footer__list-item col">
              <div className="chili-footer__list-icon">
                <i className="icon chilivery-filter-restaurant-type" />
              </div>
              <div className="chili-footer__list-title">رستوران</div>
            </div>

            <div className="col">
              <Link to="/kit" className="chili-footer__list-item">
                <span className="chili-footer__list-icon">
                  <i className="icon chilivery-basket" />
                </span>
                <span className="chili-footer__list-title">سبد خرید</span>
              </Link>
            </div>

            <div className="chili-footer__list-item col">
              <div className="chili-footer__list-icon">
                <span className="chili-footer__badge badge badge-success">
                  9
                </span>
                <i className="icon chilivery-user" />
              </div>
              <div className="chili-footer__list-title">پروفایل</div>
            </div>

            <div className="chili-footer__list-item col">
              <div className="chili-footer__list-icon">
                <i className="icon chilivery-more" />
              </div>
              <div className="chili-footer__list-title">بیشتر</div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default ChiliFooter;
