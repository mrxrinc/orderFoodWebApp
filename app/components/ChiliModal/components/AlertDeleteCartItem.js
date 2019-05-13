import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import AlertBody from './AlertBody';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class AlertDeleteCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  hideModal = () => {
    this.props.showModal({
      alertExp: false,
    });
  };

  render() {
    const classes = this.props;
    return (
       <ChiliModal
         modal={classes.modals.alertExp}
         alert
       >
        <AlertBody
          alertTitle="حذف غذا"
          toggle={this.hideModal}
          verifyClick={classes.confirm}
        >
        آیا مطمن هستید؟
        </AlertBody>

      {/* <div className="chili-modal_alert-main overhide">
        <div className="center rCol whFull hP30">
          <h3 className="centerText text20 bold">YOOO Title</h3>
          <p className="centerText topM20 bottomM">YOOO Description</p>
        </div>
        <div className="flex chili-modal_alert-footer wFull white">
          <div className="col chili-modal_alert-footer-item center" onClick={classes.confirm}>
            <span>yes</span>
          </div>
          <div className="col chili-modal_alert-footer-item center" onClick={classes.hideModal}>
            <span>no</span>
          </div>
        </div>
      </div> */}
      </ChiliModal>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    alertExp: state.Modals.alertExp,
  },
});
const mapDispatchToProps = dispatch => ({
  showModal: showStatus => {
    dispatch(showModal(showStatus));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AlertDeleteCartItem);
