import React, { Component } from 'react';
import './style.scss';

class ChiliLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div id="loader-wrapper" className={this.props.className}>
        <div id="loader-body">
          <div id="loader"></div>
          <div className="laoder-body-text">
            لطفا شکیبا باشید ...
          </div>
        </div>
      </div>
    );
  }
}

export default ChiliLoading;