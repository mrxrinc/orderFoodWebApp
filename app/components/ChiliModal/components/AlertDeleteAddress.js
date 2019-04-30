import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import PageAboutMotochili from '../../../containers/PageAboutMotochili';
import AlertBody from './AlertBody';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleLogin = () => {
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
          alertTitle="حذف آدرس"
          toggle={this.toggleLogin}
          verifyClick={classes.deleteAddress}
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
)(Login);
