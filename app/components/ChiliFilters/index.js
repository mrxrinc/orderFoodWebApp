import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { CheckBox } from '../../components/ChiliForm';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
class Filters extends React.Component {
  render() {
    return (
      <div className="bottomP20">
        <Container fluid className="filters">

          <Row noGutters className="filters__grey py-4">
            <span className="chilivery-sort d-inline-block topP3 leftP3">
              {' '}
            </span>
            <div className="d-inline-block">مرتب سازی رستوران ها براساس:</div>
          </Row>
          <Row className="mb-4 text-center">

            <Col className="">

            <label className="filters__boxes midText overhide">
              <div className="label-parent">
                <input
                  type="radio"
                  className="radio-input"
                  name="sort"
                  onChange={this.props.onChange}
                  checked={this.props.filters.indexOf('newest') > -1}
                  value="newest"
                />
                <div className="box-face"/>

                <div className="filters__boxes-wrapper">       
                  <div className="fs1 filters__grey">
                    <div className="clearfix bshadow0">
                      <span className="chilivery-sort-new"> </span>
                    </div>
                    <div className="fs0 bshadow0 clearfix hidden-true">
                      <span className="unit pvs fgc1">liga: </span>
                    </div>
                  </div>
                  <span>جدیدترین ها</span> 
                </div>


              </div>
            </label>

            </Col>
            <Col className="">

              <label className="filters__boxes midText overhide">
                <div className="label-parent">
                  <input
                    type="radio"
                    className="radio-input"
                    name="sort"
                    onChange={this.props.onChange}
                    checked={this.props.filters.indexOf('deliveryTime') > -1}
                    value="deliveryTime"
                  />
                  <div className="box-face"/>

                  <div className="filters__boxes-wrapper">       
                    <div className="fs1 filters__grey">
                      <div className="clearfix bshadow0">
                        <span className="chilivery-sort-new"> </span>
                      </div>
                      <div className="fs0 bshadow0 clearfix hidden-true">
                        <span className="unit pvs fgc1">liga: </span>
                      </div>
                    </div>
                    <span>زمان ارسال</span>
                  </div>
                </div>
              </label>

            </Col>

            <Col className="">
            <label className="filters__boxes midText overhide">
                <div className="label-parent">
                  <input
                    type="radio"
                    className="radio-input"
                    name="sort"
                    onChange={this.props.onChange}
                    checked={this.props.filters.indexOf('rating') > -1}
                    value="rating"
                  />
                  <div className="box-face"/>

                  <div className="filters__boxes-wrapper">       
                    <div className="fs1 filters__grey">
                      <div className="clearfix bshadow0">
                        <span className="chilivery-sort-rate"> </span>
                      </div>
                      <div className="fs0 bshadow0 clearfix hidden-true">
                        <span className="unit pvs fgc1">liga: </span>
                      </div>
                    </div>
                    <span>بالاترین امتیاز</span>
                  </div>
                </div>
              </label>
            </Col>

            <Col className="">
            <label className="filters__boxes midText overhide">
                <div className="label-parent">
                  <input
                    type="radio"
                    className="radio-input"
                    name="sort"
                    onChange={this.props.onChange}
                    checked={this.props.filters.indexOf('financialCategory') > -1}
                    value="financialCategory"
                  />
                  <div className="box-face"/>

                  <div className="filters__boxes-wrapper">       
                    <div className="fs1 filters__grey">
                      <div className="clearfix bshadow0">
                        <span className="chilivery-sort-economy"> </span>
                      </div>
                      <div className="fs0 bshadow0 clearfix hidden-true">
                        <span className="unit pvs fgc1">liga: </span>
                      </div>
                    </div>
                    <span>سطح اقتصادی</span>
                  </div>
                </div>
              </label>
            </Col>

          </Row>
          <Row noGutters className="filters__grey py-4">
            <span className="chilivery-filter-2 d-inline-block topP3 leftP3">
              {' '}
            </span>
            <div className="d-inline-block">مرتب سازی رستوران ها براساس:</div>
          </Row>
        </Container>
        <div>
          <Row className="mx-3 py-3 d-block filters__white">
            <i className="icon filters__icon chilivery-sort-discount" />
            <span className="bigText ml-3">نمایش رستوران های تخفیف دار</span>
            <div className="filters__checkbox">
              <input
                type="checkbox"
                id="checkbox-1"
                onChange={this.props.onChange}
                defaultValue="discount"
                defaultChecked={this.props.filters.indexOf("discount") > -1 ? "discount" : ""}
              />
              <label htmlFor="checkbox-1" />
            </div>
          </Row>
          <Row className="mx-3 py-3 d-block filters__white">
            <i className="icon filters__icon chilivery-motochili" />
            <span className="bigText ml-3">ارسال با موتوچیلی</span>
            <div className="filters__checkbox">
              <input
                type="checkbox"
                id="checkbox-2"
                onChange={this.props.onChange}
                defaultValue="deliveryBy"
                defaultChecked={this.props.filters.indexOf("deliveryBy") > -1 ? "deliveryBy" : ""}
              />
              <label htmlFor="checkbox-2" />
            </div>
          </Row>
          <Accordion>
            <AccordionItem className="filters">
              <AccordionItemTitle
                hideBodyClassName="accordion_hide"
                aria-selected="false"
              >
                <i className="icon chilivery-filter-restaurant-type" />
                <span className="accordion__list-text">نوع رستوران</span>
              </AccordionItemTitle>
              <AccordionItemBody>
                <ul className="accordion__ul padd15">
                  {this.props.data.restaurantType.map((item, index) =>
                    typeof(this.props.tagsCount.find(food => food.key == item.id)) !== "undefined"?
                    <li key={index}>
                      <CheckBox
                        className="required-chechbox checked"
                        type="checkbox"
                        name={item.slug}
                        onChange={this.props.onChange}
                        defaultValue={item.id}
                        defaultChecked={
                          this.props.filters.indexOf((item.id).toString()) > -1 ? "checked" : ""
                        }
                        // inputClassName="styled"
                        labelClassName="page-payment__rule"
                        label={
                          <span className="filters__items-wrapper">{item.name}
                            <span class="filters__items-counter">{this.props.tagsCount.find(food => food.key == item.id).doc_count}
                            </span>
                          </span>
                        }
                      />
                    </li>:null
                  )}
                </ul>
              </AccordionItemBody>
            </AccordionItem>
            <AccordionItem className="filters">
              <AccordionItemTitle
                hideBodyClassName="accordion_hide"
                aria-selected="false"
              >
                <i className="icon chilivery-filter-food-type" />
                <span className="accordion__list-text">نوع غذا</span>
              </AccordionItemTitle>
              <AccordionItemBody>
                <ul className="accordion__ul padd15">
                  {this.props.data.foodType.map((item, index) =>
                    typeof(this.props.tagsCount.find(food => food.key == item.id)) !== "undefined"?
                    <li key={index}>
                      <CheckBox
                        className="required-chechbox checked wFull"
                        type="checkbox"
                        name={item.slug}
                        onChange={this.props.onChange}
                        defaultValue={item.id}
                        defaultChecked={
                          this.props.filters.indexOf((item.id).toString()) > -1 ? "checked" : ""
                        }
                        // inputClassName="styled"
                        labelClassName="page-payment__rule"
                        label={
                          <span className="filters__items-wrapper">{item.name}
                            <span class="filters__items-counter">{this.props.tagsCount.find(food => food.key == item.id).doc_count}
                            </span>
                          </span>
                        }
                      />
                    </li>:null
                  )}
                </ul>
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="topM40 wFull hP20 center">
          <button
            className="btn big-btn btn-success mr-2"
            onClick={() => this.props.onFilterValidation(true)}
          >اعمال فیلترها</button>

          <button
            className="btn big-btn btn-white"
            onClick={() => this.props.onFilterValidation(false)}
          >حذف فیلترها</button>

        </div>
      </div>
    );
  }
}

export default Filters;
