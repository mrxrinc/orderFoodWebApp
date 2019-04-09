import React from 'react';
import './style.scss';
import { CheckBox } from '../ChiliForm';

class MyAddress extends React.PureComponent {
  render() {
    return (
      <div className="d-inline-flex">
        <div className="AddAddress">
          <span className="chilivery-add"> </span>
          <p>‌آدرس جدید</p>
        </div>
        <div className="MyAddress">
          <div className="MyAddress-radio">
            <input
              type="radio"
              className="radio-input"
              name="signUpGender"
              // checked={signUpGender === 'male'}
              // onChange={this.onChange}
              // onKeyPress={this.handleKeyPressUpdate}
              value="male"
            />
          </div>
          <div className="MyAddress__details">
            <div className="MyAddress__details-action">
              <a href="#!">
                <span className="chilivery-edit"> </span>
              </a>
              <a href="#!">
                <span className="chilivery-delete"> </span>
              </a>
              <label className="pull-right">محل کار</label>
            </div>
            <div className="clearfix"></div>
            <div className="MyAddress__details-address">
              <span>میدان ونک ، انتهای خیابان ونک ، تقاطع سيول ، خیابان رشیدی ، جنب بانک ملی ، پلاک ۴</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MyAddress.propTypes = {};

export default MyAddress;
