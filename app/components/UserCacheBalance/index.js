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
      accCharge: this.props.basket.accCharge ? this.props.basket.accCharge : false
    };
  }

  onChange = e => {
    this.setState({accCharge: !this.state.accCharge},()=>
      this.props.accChargeChanged({accCharge:this.state.accCharge})
    );
  };

  render() {
    const {user,basket} = this.props;
    return (
      <div className="UserCacheBalance">
        <div className="UserCacheBalance-checkbox">
          <CheckBox
            className="required-chechbox"
            type="checkbox"
            name="accCharge"
            checked={this.state.accCharge}
            onChange={this.onChange}
            labelClassName="page-payment__rule"
          />
        </div>
        <div className="UserCacheBalance__details">
          <span>پرداخت از طریق موجودی حساب</span>
          <p>موجودی شما: {user.cacheBalance} تومان</p>
          <span>موجودی شما برای پرداخت هزینه این سفارش کافی است.</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    accChargeChanged: value => {
      dispatch(accChargedChanged(value));
    },
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


