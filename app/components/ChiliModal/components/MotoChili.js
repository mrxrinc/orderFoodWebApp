import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import PageAboutMotochili from '../../../containers/PageAboutMotochili';

class MotoChili extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleLogin = () => {
    this.props.showModal({
      motochiliModal: false,
    });
  };

  render() {
    const classes = this.props;
    return (
      <ChiliModal
        toggle={this.toggleLogin}
        modal={classes.modals.motochiliModal}
        headerAlign={classes.headerAlign}
        headerColor={classes.headerColor}
        bodyColor={classes.bodyColor}
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
    motochiliModal: state.Modals.motochiliModal,
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
)(MotoChili);
