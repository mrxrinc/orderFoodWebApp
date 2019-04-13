/* eslint-disable react/button-has-type */
import React from 'react';

import './style.scss';
/* eslint-disable react/prefer-stateless-function */
class ChiliRainbow extends React.Component {
  render() {
    return (
      <div className="whFull absolute authBg ">
        <div className="authentication__page">
          <div className="authentication__shadow1" />
          <div className="authentication__shadow2" />
          <div className="authentication">
            <div className="rainbow" />
            <div className="header"><b>{this.props.title}</b></div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default ChiliRainbow;
