import React from 'react';
import './style.scss';

const RestaurantSideDishGroup = props =>{
  console.log(props);
  return (
    <div className="sideDishGroup bottomM20">
      <div className="head hCenter vP10 rightP20 gray6">
        <span
          className={`text12 ${props.isValid === false ? 'text-danger' : ''}`}
        >
          {props.title}
        </span>
      </div>
      <div className="items">{props.children}</div>
    </div>
  );
} 

export default RestaurantSideDishGroup;
