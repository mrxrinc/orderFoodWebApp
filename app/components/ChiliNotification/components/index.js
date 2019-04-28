import React, { Component } from "react";
import ChiliAlert from '../../ChiliAlert';

class Toast extends Component {
  componentDidMount(){
    const alertTimer = (this.props.delay === "")?2000:this.props.delay
    setTimeout((alertTimer) => {
      this.props.onDismissClick();
    }, alertTimer);
  }
  render() {
    return (
      <li className="toast">
        <ChiliAlert
          type={this.props.color}
        >
          {this.props.text}
        </ChiliAlert>
      </li>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}
export default Toast;