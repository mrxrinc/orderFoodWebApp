import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import UserPosition from '../../UserPosition';

class UserPositionChili extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapCenter:{}
    };
  }

  toggleLogin = () => {
    this.props.showModal({
      UserPositionModal: false,
    });
  };
  componentDidMount() {

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }

    const showPosition = (position) => {
        this.setState({
          mapCenter: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        })
    }
    getLocation();
  }
  render() {
    const classes = this.props;
    return (
      <ChiliModal
        toggle={this.toggleLogin}
        modal={classes.modals.UserPositionModal}
        headerAlign="center"
        title="تعیین موقعیت"
      >
        <UserPosition 
          data={classes.data}
          type={classes.type}
        />
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
