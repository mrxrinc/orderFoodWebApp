import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import PageAboutMotochili from '../../../containers/PageAboutMotochili';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleLogin = () => {
    this.props.showModal({
      loginModal: false,
    });
  };

  render() {
    const classes = this.props;
    return (
      <ChiliModal
        toggle={this.toggleLogin}
        modal={classes.modals.loginModal}
        headerAlign={classes.headerAlign}
        // alert
        headerAlign="right"
        icon="icon icon-log-in"
        title="سرویس موتوچیلی"
        className="chili-modal__alert"
      >
        <PageAboutMotochili/>
      </ChiliModal>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    loginModal: state.Modals.loginModal,
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
