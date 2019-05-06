import React from 'react';
import './style.scss';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { CheckBox } from '../../components/ChiliForm';
import { connect } from 'react-redux';
import { accChargedChanged } from '../../actions/Basket';


class UserCacheBalance extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    const {user,basket} = this.props;
    const {showGetway} = this.state;
    return (
      <React.Fragment>
      <div className="UserCacheBalance">
        <div className="UserCacheBalance-checkbox">
          <CheckBox
            className="required-chechbox"
            type="checkbox"
            name="accCharge"
            checked={this.props.accCharge}
            onChange={this.props.onChange}
            labelClassName="page-payment__rule"
          />
        </div>
        <div className="UserCacheBalance__details">
          <span>پرداخت از طریق موجودی حساب</span>
          <p>موجودی شما: {user.cacheBalance} تومان</p>
          <span>موجودی شما برای پرداخت هزینه این سفارش کافی است.</span>
        </div>
      </div>
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {

  };
};

const mapStateToProps = state => ({
  user: state.auth,
  basket:state.Basket
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserCacheBalance);


