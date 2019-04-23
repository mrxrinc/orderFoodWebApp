import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import Switch from 'rc-switch';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
class Filters extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className="filters">
          <Row noGutters className="filters__grey py-4">
            <span className="chilivery-sort d-inline-block topP3 leftP3">
              {' '}
            </span>
            <div className="d-inline-block">مرتب سازی رستوران ها براساس:</div>
          </Row>
          <Row noGutters className="mb-4 text-center">
            <Col className="filters__boxes midText mx-2 py-3">
              <div className="fs1 filters__grey">
                <div className="clearfix bshadow0">
                  <span className="chilivery-sort-new"> </span>
                </div>
                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <span>جدیدترین ها</span>
            </Col>
            <Col className="filters__boxes midText mx-2 py-3 filters__boxes-active">
              <div className="fs1 filters__grey">
                <div className="clearfix bshadow0">
                  <span className="chilivery-delivery-time"> </span>
                </div>
                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <span>زمان ارسال</span>
            </Col>
            <Col className="filters__boxes midText mx-2 py-3">
              <div className="fs1 filters__grey">
                <div className="clearfix bshadow0">
                  <span className="chilivery-sort-rate"> </span>
                </div>
                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <span>بالاترین امتیاز</span>
            </Col>
            <Col className="filters__boxes midText  mx-2 py-3">
              <div className="fs1 filters__grey">
                <div className="clearfix bshadow0">
                  <span className="chilivery-sort-economy"> </span>
                </div>
                <div className="fs0 bshadow0 clearfix hidden-true">
                  <span className="unit pvs fgc1">liga: </span>
                </div>
              </div>
              <span>سطح اقتصادی</span>
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
            <i className="icon filters__icon chilivery-filter-restaurant-type" />
            <span className="bigText ml-3">نمایش رستوران های تخفیف دار</span>
            <div className="filters__checkbox">
              <input type="checkbox" id="checkbox-1" />
              <label htmlFor="checkbox-1" />
            </div>
          </Row>
          <Row className="mx-3 py-3 d-block filters__white">
            <i className="icon filters__icon chilivery-filter-restaurant-type" />
            <span className="bigText ml-3">نمایش رستوران های تخفیف دار</span>
            <div className="filters__checkbox">
              <input type="checkbox" id="checkbox-2" />
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
                <ul className="accordion__ul" />
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
                <ul className="accordion__ul" />
              </AccordionItemBody>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="topM40 wFull hP20 center">
          <button className="btn big-btn btn-success mr-2">اعمال فیلترها</button>
          <button className="btn big-btn btn-white">حذف فیلترها</button>
        </div>
      </div>
    );
  }
}

export default Filters;
