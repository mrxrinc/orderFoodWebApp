/* eslint-disable no-console */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from 'react';

class TabOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div className="row">
        <div className="col-12">
          <div className="restauran-detail__type center">
            <i className="icon chilivery-filter-restaurant-type"></i>
            <div className="restaurant-detail__type-title">نوع رستوران</div>
            <div className="restaurant-detail__type-desc">گیاهی</div>
          </div>
        </div>

        <div className="col-6">
          <div className="restaurant-detail__item center">
            <i className="icon chilivery-filter-restaurant-type"></i>
            <div className="restaurant-detail__item-box">
              <div className="restaurant-detail__type-title"></div>
              <div className="restaurant-detail__type-desc"></div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


export default TabOne;

