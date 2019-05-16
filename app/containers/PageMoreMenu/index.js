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
import NavigationBar from '../../components/NavigationBar';
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
        <NavigationBar
					background
					title="بیشتر"
				/>
        <Accordion className="chili-more-menu__item-wrapper">
            <AccordionItem
              className="chili-more-menu__item"
            >
              <AccordionItemTitle hideBodyClassName="accordion_hide" aria-selected="false">
                <i className="icon chilivery-chilivery-logo2"></i>
                <span className="accordion__list-text">درباره ی چیلیوری</span>
                {/* https://chilivery.com/staticapp/about-chilivery/ */}
              </AccordionItemTitle>
              <AccordionItemBody>
                <div className="accordion__ul">
                  <Link to="/static/about-chilivery" className="accordion__list">
                    <i className="icon chilivery-about"></i>
                    <span className="accordion__list-text">درباره ی چیلیوری بیشتر بدانید ...</span>
                  </Link>
                  <div className="accordion__list" onClick={this.motochiliModal}>
                    <i className="icon chilivery-motochili"></i>
                    <span className="accordion__list-text">درباره ی موتوچیلی ...</span>
                  </div>
                  <Link to="/static/law" className="accordion__list">
                    <span className="icon chilivery-rules"></span>
                    <span className="accordion__list-text">قوانین و مقررات</span>
                    {/* https://chilivery.com/staticapp/law/ */}
                  </Link>
                  <Link to="/static/privacy" className="accordion__list">
                    <span className="icon chilivery-policy"></span>
                    <span className="accordion__list-text">حریم خصوصی</span>
                    {/* https://chilivery.com/staticapp/privacy/ */}
                  </Link>
                  <Link to="/static/contactsus" className="accordion__list">
                    <span className="icon chilivery-phone"></span>
                    <span className="accordion__list-text">تماس با ما</span>
                    {/* https://chilivery.com/staticapp/contactsus/ */}
                  </Link>
                </div>
              </AccordionItemBody>
            </AccordionItem>
            <AccordionItem
              className="chili-more-menu__item"
            >
              {/* <AccordionItemTitle hideBodyClassName="accordion_hide" aria-selected="false">
                <i className="icon chilivery-warning-2"></i>
                <span className="accordion__list-text">راهنما</span>
              </AccordionItemTitle> */}
              <AccordionItemBody>
                <ul className="accordion__ul">

                  <Link to="/static/purchase-guide" className="accordion__list">
                    <span className="icon chilivery-basket"></span>
                    <span className="accordion__list-text">راهنمای خرید</span>
                    {/* https://chilivery.com/staticapp/purchase-guide/ */}
                  </Link>

                  <Link to="/static/payment-guide" className="accordion__list">
                    <span className="icon chilivery-online-pay-help"></span>
                    <span className="accordion__list-text">راهنمای پرداخت آنلاین</span>
                    {/* https://chilivery.com/staticapp/payment-guide/ */}
                  </Link>

                  <Link to="/static/faq" className="accordion__list">
                    <span className="icon chilivery-faq2"></span>
                    <span className="accordion__list-text">سوالات متداول</span>
                    {/* https://chilivery.com/staticapp/faq/ */}
                  </Link>
                </ul>
              </AccordionItemBody>
            </AccordionItem>
        </Accordion>
        <div className="chili-more-menu__item">
          <Link to="/static/cooperation" className="accordion__title accordion_hide">
            <i className="icon chilivery-fav-restaurant"></i>
            <span className="accordion__list-text">ثبت رستوران</span>
            {/* https://chilivery.com/staticapp/cooperation/ */}
          </Link>
        </div>

        <div className="chili-more-menu__item">
          <Link to="/static/opportunity" className="accordion__title accordion_hide">
            <i className="icon chilivery-job-opportunity"></i>
            <span className="accordion__list-text">فرصت‌های شغلی</span>
            {/* https://chilivery.com/staticapp/opportunity/ */}
          </Link>
        </div>

        {/* <div className="chili-more-menu__item">
          <a href="" className="accordion__title accordion_hide">
            <i className="icon chilivery-add-rate"></i>
            <span className="accordion__list-text">امتیاز به این برنامه</span>
          </a>
        </div> */}

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