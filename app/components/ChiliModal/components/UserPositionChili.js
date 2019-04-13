import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import UserPosition from '../../UserPosition';

class UserPositionChili extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleLogin = () => {
    this.props.showModal({
      UserPositionModal: false,
    });
  };

  render() {
    const classes = this.props;
    return (
      <ChiliModal
        toggle={this.toggleLogin}
        modal={classes.modals.UserPositionModal}
        headerAlign="center"
        title="تعیین موقعیت"
      >
        <UserPosition/>
      </ChiliModal>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    UserPositionModal: state.Modals.UserPositionModal,
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
)(UserPositionChili);
