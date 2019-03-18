/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Kit
 *
 */

import React from 'react';
import { AnimateField, AnimateFieldSheba } from '../../components/ChiliForm';

/* eslint-disable react/prefer-stateless-function */
export class Kit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: '',
      signUpGender: 'male',
      signUpPhone: '09358537536',
      signUpUserEmail: 'm.rastegar991@gmail.com',
      signUpSheba: '',
      signUpCity: '',
      loginPass: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    // const classes = this.props;
    const {
      loginUserName,
      signUpPhone,
      signUpUserEmail,
      signUpSheba,
      signUpGender,
      signUpCity,
      loginPass,
    } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="clearfix mhl ptl">
              <h1 className="mvm mtn fgc1">Grid Size: Unknown</h1>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-motochili"> </span>
                </div>
                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-filter-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-organization-code"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-setting"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-vip-medal"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-seafood"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-persian"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-kitchen"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-italian"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-homemade"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-fastfood"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-cafe"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-breakfast"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-vegeterian1"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-sort"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-organization"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-chilivery-logo2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-faq"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-my-address"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-faq2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-my-address2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-arrow-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-gender"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-birthday"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-crisp"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-chef-answer"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-suggested"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-warning-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-economic"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-economic_level1"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-economic_level2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-economic_level3"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-arrow"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-description"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-parking"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-website"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-delivery-zone"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-contract"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-tax"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-share-android"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-forward-android"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-back-android"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-notification"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-menu"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-clock"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-sheba"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-credit-card"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-star-square"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-location-chilivery"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-mailbox"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-policy"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-rules"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-add-rate"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-job-opportunity"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-add-restaurant"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-online-pay-help"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-how-to-buy"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-phone"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-about"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-reorder"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-order-details"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-delivery-time"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-radiobutton_empty"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-radiobutton_full"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-checkbox_empty"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-checkbox_full"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-zoom"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-search"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-dot"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-Receiption"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-delete"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-edit-number"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-time"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-calendar"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-tracking-code"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-sms"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-telegram"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-email-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-exit"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-campaign"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-referral"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-fav-restaurant"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-fav-food"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-my-transaction"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-my-order"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-edit"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-photo"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-speech"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-delivery"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-wallet-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-wallet"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-share"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-alert"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-smiley-bad"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-smiley-average"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-smiley-good2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-star"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-check-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-check"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-filter-restaurant-type"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-filter-food-type"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-sort-suggested"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-filter-open"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-sort-rate"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-sort-new"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-sort-economy"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-sort-discount"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-add"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-remove"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-close"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-chili"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-new"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-vegeterian"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-fav-empty"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-fav-full"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-filter"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-group-pins"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-location-restaurant"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-location-user"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-location"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-compass-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-compass"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-gift"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-forget-pass-3"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-forget-pass-1"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-forget-pass-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-email"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-mobile"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-arrow-top"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-arrow-left"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-arrow-bottom"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-arrow-right"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-back"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-more"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-basket"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-home"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant-2"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-restaurant"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-chilivery-logo"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-yahoo"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-google-plus"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-pass"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <div className="glyph fs1">
                <div className="clearfix bshadow0 pbs">
                  <span className="chilivery-user"> </span>
                </div>

                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <h1>فرم ها</h1>
            <AnimateField
              className="col-12"
              placeholder="وارد نمایید"
              name="loginUserName"
              type="text"
              onClick=""
              label="شماره همراه / آدرس ایمیل"
              value={loginUserName}
              onChange={this.onChange}
              icon="chilivery-user"
              iconColor="blue"
              validation={['شماره موبایل اشتباه است.']}
            />
            <AnimateField
              className="col-12"
              name="loginPass"
              type="password"
              onClick=""
              placeholder="وارد نمایید"
              label="رمز عبور"
              value={loginPass}
              onChange={this.onChange}
              // onKeyPress={this.handleKeyPress}
              // validation={
              //   typeof classes.validation.password === 'undefined'
              //     ? false
              //     : classes.validation.password
              // }
              required
            />

            <div className="chili-animate-field form-group col-sm-6">
              <div>
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="signUpGender"
                      checked={signUpGender === 'male'}
                      onChange={this.onChange}
                      // onKeyPress={this.handleKeyPressUpdate}
                      value="male"
                    />
                    <div className="radio-face" />
                    <i />
                  </div>
                  <span>مرد</span>
                </label>
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="signUpGender"
                      checked={signUpGender === 'female'}
                      onChange={this.onChange}
                      // onKeyPress={this.handleKeyPressUpdate}
                      value="female"
                    />
                    <div className="radio-face" />
                    <i />
                  </div>
                  <span>زن</span>
                </label>
              </div>
              <label> جنسیت </label>
            </div>

            <AnimateField
              className="col-sm-6"
              placeholder="وارد نمایید"
              name="signUpPhone"
              type="text"
              onClick=""
              label="شماره همراه"
              value={signUpPhone}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
              // validation={
              //   typeof classes.validation.userUpdate.phone_number === "undefined"?
              //   false:classes.validation.userUpdate.phone_number
              // }
              disabled
            />

            <AnimateField
              className="col-sm-6"
              placeholder="وارد نمایید"
              name="signUpUserEmail"
              type="email"
              onClick=""
              label="آدرس ایمیل"
              value={signUpUserEmail}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
              disabled
              // validation={
              //   typeof classes.validation.userUpdate.email === "undefined"?
              //   false:classes.validation.userUpdate.email
              // }
              // required={true}
            />
            <AnimateFieldSheba
              className="col-sm-6"
              name="signUpSheba"
              type="text"
              onClick=""
              placeholder="وارد نمایید"
              label="شماره شبا"
              value={signUpSheba}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
              // validation={
              //   typeof classes.validation.userUpdate.sheba_number === "undefined"?
              //   false:classes.validation.userUpdate.sheba_number
              // }
            />
            {/* <div className={"chili-animate-field form-group col-sm-6" + (typeof classes.validation.userUpdate.city_id === "undefined"?"":" panigale__border_red")}> */}
            <div className="chili-animate-field form-group col-sm-6">
              <div className="select-wrapper">
                <select
                  name="signUpCity"
                  value={signUpCity}
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPressUpdate}
                  id="inputState"
                  className="form-control"
                >
                  <option value="">شهر</option>
                  {/* {cityItem} */}
                </select>
              </div>
              <label>شهر</label>
            </div>

            <div className="chili-page-profile__user-edit-button form-group col-12">
              {/* <button className={!classes.loading.userProfileLoading?"btn btn-danger ml-0":"btn ml-0 btn-loading btn-disable disabled-link"}> */}
              <button type="button" className="btn btn-danger ml-0">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Kit;
