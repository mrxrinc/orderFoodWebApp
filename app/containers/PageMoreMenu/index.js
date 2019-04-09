import React from 'react';
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
export default class PageMoreMenu extends React.PureComponent {
  render() {
    return (
      <div>
        <section className="partition">
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
                      <ul className="accordion__ul">
                        <li className="accordion__list">
                          <i className="icon chilivery-about"></i>
                          <span className="accordion__list-text">درباره ی چیلیوری بیشتر بدانید ...</span>
                        </li>
                        <li className="accordion__list">
                          <span className="icon chilivery-rules"></span>
                          <span className="accordion__list-text">قوانین و مقررات</span>
                        </li>
                        <li className="accordion__list">
                          <span className="icon chilivery-policy"></span>
                          <span className="accordion__list-text">حریم خصوصی</span>
                        </li>
                        <li className="accordion__list">
                          <span className="icon chilivery-phone"></span>
                          <span className="accordion__list-text">تماس با ما</span>
                        </li>
                      </ul>
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
              <div class="chili-more-menu__item">
                <a href="" class="accordion__title accordion_hide">
                  <i class="icon chilivery-fav-restaurant"></i>
                  <span class="accordion__list-text">ثبت رستوران</span>
                </a>
              </div>

              <div class="chili-more-menu__item">
                <a href="" class="accordion__title accordion_hide">
                  <i class="icon chilivery-job-opportunity"></i>
                  <span class="accordion__list-text">فرصت‌های شغلی</span>
                </a>
              </div>

              <div class="chili-more-menu__item">
                <a href="" class="accordion__title accordion_hide">
                  <i class="icon chilivery-add-rate"></i>
                  <span class="accordion__list-text">امتیاز به این برنامه</span>
                </a>
              </div>

            </div>
        </section>
      </div>
    );
  }
}
