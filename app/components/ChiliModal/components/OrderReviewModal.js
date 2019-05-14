import React, { Component } from 'react';
import { connect } from 'react-redux';
import { showModal } from '../../../actions/Modals';
import ChiliModal from '../index';
import AfterPaymentCardItem from '../../../components/AfterPaymentCardItem/profile';

class OrderReviewModal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggleLogin = () => {
    this.props.showModal({
      orderReviewModal: false,
    });
  };

  render() {
    const classes = this.props;
    return (
      <ChiliModal
        toggle={this.toggleLogin}
        modal={classes.modals.orderReviewModal}
        headerAlign={classes.headerAlign}
        headerColor={classes.headerColor}
        bodyColor={classes.bodyColor}
        // alert
        headerAlign="right"
        title="جزییات سفارش"
        className="chili-modal__alert"
      >
        <div className="padd10">
          <AfterPaymentCardItem data={this.props.data[0].items} />
        </div>
        <div className="clearfix"></div>
        <div className="afterpayment__factor p-3">
          <ul>
            {(this.props.type === "profile" && this.props.data[0].amount.tax > 0 ) ?  <li>
              <span className="bold total">مالیات</span>
              <span className="pull-left bold total">{
                this.props.data[0].amount.tax        
                } تومان</span>
            </li>:null
            }
            <li>
              <span className="bold total">مبلغ کل</span>
              <span className="pull-left bold total">{
                this.props.type === "profile" ?
                this.props.data[0].amount.total:
                this.props.data.totalPrice
                
                } تومان</span>
            </li>
          </ul>
        </div>
      </ChiliModal>
    );
  }
}

const mapStateToProps = state => ({
  modals: {
    orderReviewModal: state.Modals.orderReviewModal,
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
)(OrderReviewModal);
