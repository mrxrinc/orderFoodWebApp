import React, { Fragment } from 'react';
import './style.scss';
import { CheckBox } from '../ChiliForm';

const RestaurantSideDishRow = props => {
  return (
    <div className="sideDishRow flex primary hP20 bgWhite">
      <div className="flex hP10 primary text16 wFull hCenter">
        <CheckBox {...props} />
        <p>{props.name}</p>
      </div>
      <div className="center rightP10">
        {props.price == 0 && (
          <span className="text12 gray6 rightM5">(رایگان)</span>
        )}
        {props.price !== 0 && (
          <Fragment>
            <span className="leftM2">{props.price}</span>
            {props.discount.hasDiscount && (
              <span className="overLine danger">
                {props.discount.realPrice}
              </span>
            )}
            <span className="text12 gray6 rightM5">(تومان)</span>
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default RestaurantSideDishRow;
