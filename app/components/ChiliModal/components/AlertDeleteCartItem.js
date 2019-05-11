import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import AlertBody from './AlertBody';

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
