import React from 'react';
import './style.scss';

class Stepper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  IncrementItem = () => {
    this.props.stepper(this.props.parentId, this.props.value + 1, 'add');
  };

  DecreaseItem = () => {
    this.props.stepper(this.props.parentId, this.props.value - 1, 'remove');
  };

  render() {
    return (
      <div
        className={`increment-decrease hCenter rRowReverse spaceBetween ${
          this.props.className
        }`}
      >
        <button
          className="increment-decrease__add center"
          type="button"
          onClick={this.IncrementItem}
        >
          <span className="chilivery-add" />
        </button>

        {this.props.value > 0 && (
          <React.Fragment>
            <span className="increment-decrease__count">
              <h2
                className="reset centerText hM5"
                style={{ fontSize: `${this.props.fontSize}px` }}
              >
                {this.props.value}
              </h2>
            </span>

            <button
              className="increment-decrease__remove center"
              type="button"
              onClick={this.DecreaseItem}
            >
              <span className="chilivery-remove" />
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default Stepper;
