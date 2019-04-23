/* eslint-disable react/prop-types */
import React from 'react';

const Star = ({ size, color }) => (
  <span
    className={`chilivery-star-square ${color ? 'yellow' : 'gray4'}`}
    style={{ fontSize: size || 25 }}
  />
);

const calcRate = (scope, rate) => {
  if (Math.round(rate) === scope || Math.round(rate) > scope) return true;
  return false;
}

const StarsRating = props => (
  <div className="reset gray4 center">
    <Star size={props.size} color={calcRate(1, props.rate)} />
    <Star size={props.size} color={calcRate(2, props.rate)} />
    <Star size={props.size} color={calcRate(3, props.rate)} />
    <Star size={props.size} color={calcRate(4, props.rate)} />
    <Star size={props.size} color={calcRate(5, props.rate)} />
  </div>
);

export default StarsRating;
