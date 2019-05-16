import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import ChiliFilters from '../../ChiliFilters';
import ChiliModal from '..';

class RestaurantFilterModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
   
    };
  }


  render() {
    const classes = this.props;
    return (
      <ChiliModal
        className="modal-restaurant__detail"
        toggle={classes.toggleModal}
        modal={classes.modals.RestaurantFilterModal}
        // // alert
        // headerAlign="right"
        // title="نظر و امتیاز دهید"
      >
        <ChiliFilters
          data={classes.data}
          toggle={classes.toggleModal}
          onChange={this.props.onChange}
        />
      </ChiliModal>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    RestaurantFilterModal: state.Modals.RestaurantFilterModal,
  },
});
const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RestaurantFilterModal);