import React from 'react';
import { history } from '../../store';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import './style.scss';
import toggleUp from "../../images/closed.png"
import toggleDown from "../../images/opened.png"

class StickyPrice extends React.PureComponent {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  pushLink = () =>{
    history.push("/checkout")
  }
  render() {
    return (
      <div className="StickyPrice">
        <Collapse isOpen={this.state.collapse}>
          <div className="StickyPrice-togglebutton-down">
            <button onClick={this.toggle} >
              <img src={toggleDown} width="70px"/>
            </button>
          </div>
          <div className="StickyPrice__card">
            <ul>
              <li>
                <span>مجموعه سفارشات</span>
                <span className="pull-left">۸۴,۰۰۰ تومان</span>
              </li>
              <li>
                <span>تخفیف</span>
                <span className="pull-left">۲,۰۰۰ تومان</span>
              </li>
              <li>
                <span>هزینه ارسال</span>
                <span className="pull-left">۴,۰۰۰ تومان</span>
              </li>
            </ul>
          </div>
        </Collapse>
        {!this.state.collapse &&
          <div className="StickyPrice-togglebutton-up">
            <button onClick={this.toggle} >
              <img src={toggleUp} width="70px"/>
            </button>
          </div>
        }

        <div className="StickyPrice__price">
          <div className="StickyPrice__price-rbox">
            <button type="button">
              <span className="basket-counter">۲</span>
              <span className="text-price">۷۳/۶۱۸ تومان</span>
            </button>
          </div>
          <div className="StickyPrice__price-lbox">
            <button onClick={this.pushLink} type="button">تایید سفارش
              <span className="chilivery-arrow-left"> </span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

StickyPrice.propTypes = {};

export default StickyPrice;
