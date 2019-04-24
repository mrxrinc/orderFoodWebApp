import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class ChiliAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      info: false,
      infoClose: false,
      danger: false,
      warning: false,
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false },()=>{
      // const eventHeader = document.querySelector(".page-event-other__header");
      // if(eventHeader.classList.contains('page-event-other__header_alert')){
      //     eventHeader.classList.remove('page-event-other__header_alert')
      // }

      // const header = document.querySelector(".page-event-other__header_alert .alert");
      // const headerDetail = document.querySelector(".isMobile .page-event-other__header-detail");
      // if(header === null && headerDetail !== null ){
      //   headerDetail.style.marginTop = "0";
      // }

    });
  }

  componentDidMount() {

    switch (this.props.type) {
      case 'success':
        this.setState({
          success: true
        });
        break;
      case 'info':
        this.setState({
          info: true
        });
        break;
      case 'infoClose':
        this.setState({
          infoClose: true
        });
        break;
      case 'danger':
        this.setState({
          danger: true
        });
        break;
      case 'warning':
        this.setState({
          warning: true
        });
        break;
    };

 

    
  }
  render() {
    const classes = this.props;
    const {
      success, danger, info, warning,infoClose
    } = this.state;
    return (
      <div>
        {success &&
          <Alert color={classes.type} isOpen={this.state.visible} toggle={this.onDismiss}>
            <i className="icon icon-c-check"></i>
            {classes.children}
          </Alert>
        }
        {info &&
          <Alert color={classes.type} isOpen={this.state.visible} toggle={this.onDismiss}>
            <i className="icon icon icon-c-warning"></i>
            {classes.children}
          </Alert>
        }

        {danger &&
          <Alert color={classes.type} isOpen={this.state.visible} toggle={this.onDismiss}>
            <i className="icon icon-c-remove"></i>
            {classes.children}
          </Alert>
        }

        {warning &&
          <Alert color={classes.type} isOpen={this.state.visible} toggle={this.onDismiss}>
            <i className="icon icon icon-c-warning"></i>
            {classes.children}
          </Alert>
        }

      </div>
    );
  }
}

export default ChiliAlert;