import React, { Fragment } from 'react';
import './style.scss';
import { CheckBox } from '../ChiliForm';

const RestaurantSideDishRow = props => {
  return (
    <div className="sideDishRow flex primary hP20 bgWhite">
      {props.type === 'checkbox' && (
        <div className="flex hP10 primary text16 wFull hCenter">
          <CheckBox
            className="required-chechbox checked"
            type="checkbox"
            name={props.name}
            onChange={props.onClick}
            defaultValue={0}
            label={<span key={props.id}> {props.name} </span>}
          />
        </div>
      )}
      {props.type === 'radio' && (
        <Fragment>
          <label className="radio-modal">
            <div className="label-parent">
              <input
                className="required-chechbox checked radio-input"
                type="radio"
                name={props.groupId}
                onChange={props.onClick}
                defaultValue={0}
              />
              <div className="radio-face" />
              <i />
            </div>
            <span key={props.id}> {props.name}</span>
          </label>
        </Fragment>
      )}

      <div className="center rightP10">
        {props.price === 0 && (
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
//checkWithDisplayType = (foodOptionPrice, displayType, foodPrice) => {
export default RestaurantSideDishRow;
