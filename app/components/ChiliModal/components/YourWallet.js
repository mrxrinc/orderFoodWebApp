import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import PageProfileWallet from '../../../containers/PageProfile/PageProfileWallet';

class YourWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleLogin = () => {
    this.props.showModal({
      walletModal: false,
    });
  };

  render() {
    const classes = this.props;
    return (
      <ChiliModal
        toggle={this.toggleLogin}
        modal={classes.modals.walletModal}
        headerAlign={classes.headerAlign}
        headerColor={classes.headerColor}
        bodyColor={classes.bodyColor}
        // alert
        headerAlign="right"
        icon="icon icon-log-in"
        title="افزایش موجودی"
        className="chili-modal__alert"
      >
        <PageProfileWallet/>
      </ChiliModal>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    walletModal: state.Modals.walletModal,
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
)(YourWallet);
