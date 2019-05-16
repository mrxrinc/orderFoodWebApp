import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChiliFilters from '../../ChiliFilters';
import ChiliModal from '..';

class RestaurantFilterModal extends Component {
  render() {
    return (
      <ChiliModal
        className="modal-restaurant__detail"
        toggle={this.props.toggleModal}
        modal={this.props.modals.RestaurantFilterModal}
        // // alert
        headerAlign="center"
        title="فیلتر و مرتب‌سازی رستوران‌ها"
      >
        <ChiliFilters
          data={this.props.data}
          toggle={this.props.toggleModal}
          onChange={this.props.onChange}
          onFilterValidation={(x)=>this.props.onFilterValidation(x)}
          filters={this.props.filters}
          tagsCount={this.props.tagsCount}
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