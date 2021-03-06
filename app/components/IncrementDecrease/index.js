import React from 'react';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
class IncrementDecrease extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clicks: this.props.value || 0,
      show: true,
    };

  }
  IncrementItem = () => {    
    this.setState({ clicks: this.state.clicks + 1 }, 
      () => this.props.stepper(this.props.parentId, this.state.clicks)
    );
  };

  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 }, 
      () => this.props.stepper(this.props.parentId, this.state.clicks)
    );
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

        {this.state.clicks > 0 && (
          <React.Fragment>
            <span className="increment-decrease__count">
              {this.state.show && (
                <h2
                  className="reset centerText hM5"
                  style={{ fontSize: `${this.props.fontSize}px` }}
                >
                  {this.state.clicks}
                </h2>
              )}
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

IncrementDecrease.propTypes = {};

export default IncrementDecrease;
