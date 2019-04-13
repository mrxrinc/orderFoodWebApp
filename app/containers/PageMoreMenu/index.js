import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss';
// import moduleName from 'module';
// eslint-disable-next-line react/prefer-stateless-function
class PageMoreMenu extends React.PureComponent {

  motochiliModal = () => {
    this.props.showModal({
      motochiliModal: true,
    });
  };
  
  render() {
    return (
      <div className="chili-more-menu">
        <Accordion className="chili-more-menu__item-wrapper">
            <AccordionItem
              className="chili-more-menu__item"
            >
              <AccordionItemTitle hideBodyClassName="accordion_hide" aria-selected="false">
                <i className="icon chilivery-chilivery-logo2"></i>
                <span className="accordion__list-text">درباره ی چیلیوری</span>
              </AccordionItemTitle>
              <AccordionItemBody>
                <div className="accordion__ul">
                  <div className="accordion__list" onClick={this.motochiliModal}>
                    <i className="icon chilivery-about"></i>
                    <span className="accordion__list-text">درباره ی چیلیوری بیشتر بدانید ...</span>
                  </div>
                  <div className="accordion__list" onClick={this.motochiliModal}>
                    <i className="icon chilivery-motochili"></i>
                    <span className="accordion__list-text">درباره ی موتوچیلی ...</span>
                  </div>
                  <Link to="/" className="accordion__list">
                    <span className="icon chilivery-rules"></span>
                    <span className="accordion__list-text">قوانین و مقررات</span>
                  </Link>
                  <Link to="/" className="accordion__list">
                    <span className="icon chilivery-policy"></span>
                    <span className="accordion__list-text">حریم خصوصی</span>
                  </Link>
                  <Link to="/" className="accordion__list">
                    <span className="icon chilivery-phone"></span>
                    <span className="accordion__list-text">تماس با ما</span>
                  </Link>
                </div>
              </AccordionItemBody>
            </AccordionItem>
            <AccordionItem
              className="chili-more-menu__item"
            >
              <AccordionItemTitle hideBodyClassName="accordion_hide" aria-selected="false">
                <i className="icon chilivery-warning-2"></i>
                <span className="accordion__list-text">راهنما</span>
              </AccordionItemTitle>
              <AccordionItemBody>
                <ul className="accordion__ul">
                  <li className="accordion__list">
                    <span className="icon chilivery-basket"></span>
                    <span className="accordion__list-text">راهنمای خرید</span>
                  </li>
                  <li className="accordion__list">
                    <span className="icon chilivery-online-pay-help"></span>
                    <span className="accordion__list-text">راهنمای پرداخت آنلاین</span>
                  </li>
                  <li className="accordion__list">
                    <span className="icon chilivery-faq2"></span>
                    <span className="accordion__list-text">سوالات متداول</span>
                  </li>
                </ul>
              </AccordionItemBody>
            </AccordionItem>
        </Accordion>
        <div className="chili-more-menu__item">
          <a href="" className="accordion__title accordion_hide">
            <i className="icon chilivery-fav-restaurant"></i>
            <span className="accordion__list-text">ثبت رستوران</span>
          </a>
        </div>

        <div className="chili-more-menu__item">
          <a href="" className="accordion__title accordion_hide">
            <i className="icon chilivery-job-opportunity"></i>
            <span className="accordion__list-text">فرصت‌های شغلی</span>
          </a>
        </div>

        <div className="chili-more-menu__item">
          <a href="" className="accordion__title accordion_hide">
            <i className="icon chilivery-add-rate"></i>
            <span className="accordion__list-text">امتیاز به این برنامه</span>
          </a>
        </div>

      </div>
    );
  }
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
      dispatch(showModal(showStatus))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageMoreMenu);