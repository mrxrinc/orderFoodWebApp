import React from 'react';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
class IncrementDecrease extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true,
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };

  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  };

  render() {
    return (
      <div className="increment-decrease">
        <button type="button" onClick={this.IncrementItem}>
          <span className="chilivery-add"> </span>
        </button>
        <span>{this.state.show ? <h2>{this.state.clicks}</h2> : ''}</span>
        <button type="button" onClick={this.DecreaseItem}>
          <span className="chilivery-remove"> </span>
        </button>
      </div>
    );
  }
}

IncrementDecrease.propTypes = {};

export default IncrementDecrease;
