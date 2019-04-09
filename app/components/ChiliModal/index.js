import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
// import PanigaleNotification from 'components/PanigaleNotification';

class ChiliModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const classes = this.props;
    // use headerAlign: right | left | center
    return (
      <Modal
        isOpen={classes.modal}
        toggle={classes.toggle}
        className={`chili-modal ${classes.className} ${
          classes.alert ? 'chili-modal_alert' : ''
        }`}
      >
        <div className="panigale__header-notification">
          {/* <PanigaleNotification/> */}
        </div>
        <ModalHeader
          className={
            classes.headerAlign === 'left' ? 'modal-header_left':
            classes.headerAlign === 'right' ? 'modal-header_right':'modal-header_center'
          }
        >
          {classes.title}
          <i className="icon chilivery-close" onClick={classes.toggle} />
        </ModalHeader>
        <ModalBody className="card_dark">{classes.children}</ModalBody>
      </Modal>
    );
  }
}

export default ChiliModal;
