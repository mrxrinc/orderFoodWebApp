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
    return (
      <Modal
        isOpen={classes.modal}
        toggle={classes.toggle}
        className={`chili-modal ${classes.className} ${classes.alert?"chili-modal_alert":""}`}
      >
        <div className="panigale__header-notification">
          {/* <PanigaleNotification/> */}
        </div>
        <ModalBody className="card_dark">{classes.children}</ModalBody>
      </Modal>
    );
  }
}

export default ChiliModal;
