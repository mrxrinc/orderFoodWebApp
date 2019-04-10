import React, { Component } from 'react';
class AlertBody extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    return (
      <div className="chili-modal_alert-main overhide">
        <div className="center rCol absolute whFull hP30 bottomP50">
          <h3 className="centerText text20 bold">{classes.alertTitle}</h3>
          <p className="centerText topM20 bottomM">{classes.children}</p>
        </div>
        <div className="flex chili-modal_alert-footer absolute bottom left right wFull white">
          <div className="col chili-modal_alert-footer-item center" onClick={classes.toggle}>
            <span>تایید</span>
          </div>
          <div className="col chili-modal_alert-footer-item center" onClick={classes.toggle}>
            <span>انصراف</span>
          </div>
        </div>
      </div>
    );
  }
}

export default AlertBody;
