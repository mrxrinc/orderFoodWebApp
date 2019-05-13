import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

class ProfileMenu extends React.Component{
  render() {
    return(
      <div className="chili-more-menu">
        <div className="chili-more-menu__item">
          <Link to="/profile/order" className="accordion__title accordion_hide">
            <span className="icon chilivery-warning-2 text22"> </span>
            <span className="accordion__list-text">سفارش های من</span>
          </Link>
        </div>

        <div className="chili-more-menu__item">
          <Link to="/profile/transaction" className="accordion__title accordion_hide">
            <span className="icon chilivery-sort-economy text22"> </span>
            <span className="accordion__list-text">تراکنش های من</span>
          </Link>
        </div>

        {/* <div className="chili-more-menu__item">
          <Link to="/profile/fav-restaurant" className="accordion__title accordion_hide">
            <span className="icon chilivery-fav-empty text22"> </span>
            <span className="accordion__list-text">رستوران های مورد علاقه من</span>
          </Link>
        </div> */}

        <div className="chili-more-menu__item">
          <Link to="/profile/my-Comments" className="accordion__title accordion_hide">
            <span className="icon chilivery-speech text22"> </span>
            <span className="accordion__list-text">نظرات من</span>
          </Link>
        </div>

        {/* <div className="chili-more-menu__item">
          <Link to="/profile/Chili-Event" className="accordion__title accordion_hide leftP40">
            <span className="icon chilivery-notification text22"> </span>
            <span className="accordion__list-text">اعلان ها</span>
            <span className="accordion__list-text  list-text__left">۱ اعلان خوانده نشده</span>
          </Link>
        </div> */}

        {/* <div className="chili-more-menu__item">
          <Link to="/profile/Chili-Introduce" className="accordion__title accordion_hide">
            <span className="icon chilivery-referral text22"> </span>
            <span className="accordion__list-text">معرفی چیلیوری به دوستان</span>
          </Link>
        </div> */}

        <div className="chili-more-menu__item">
          <Link to="/profile/change-pass" className="accordion__title accordion_hide">
            <span className="icon chilivery-gift text22"> </span>
            <span className="accordion__list-text">تغییر رمز عبور</span>
          </Link>
        </div>

        {/* <div className="chili-more-menu__item">
          <Link to="/profile/" className="accordion__title accordion_hide">
            <span className="icon chilivery-setting text22"> </span>  
            <span className="accordion__list-text">تنظیمات</span>
          </Link>
        </div> */}

        <div className="chili-more-menu__item">
          <span href="" className="accordion__title accordion_hide" onClick={()=> this.props.userLogOut()}>
            <span className="icon chilivery-arrow-2 text22"> </span>
            <span className="accordion__list-text">خروج</span>
          </span>
        </div>

      </div>
    );
  }
}

export default ProfileMenu;