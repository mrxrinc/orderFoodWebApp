import React from 'react';
import './style.scss';

const increase = props => {
  props.stepper(props.parentId, props.value + 1, 'add', props.item);
};

const decrease = props => {
  props.stepper(props.parentId, props.value - 1, 'remove', props.item);
};

const Stepper = props => (
  <div
    className={`stepper hCenter rRowReverse spaceBetween ${
      props.className
    }`}
  >
    <button
      className="stepper__add center"
      type="button"
      onClick={() => increase(props)}
    >
      <span className="chilivery-add" />
    </button>

    {props.value > 0 && (
      <React.Fragment>
        <span className="stepper__count">
          <h2
            className="reset centerText hM5"
            style={{ fontSize: `${props.fontSize}px` }}
          >
            {props.value}
          </h2>
        </span>

        <button
          className="stepper__remove center"
          type="button"
          onClick={() => decrease(props)}
        >
          <span className="chilivery-remove" />
        </button>
      </React.Fragment>
    )}
  </div>
);

export default Stepper;
