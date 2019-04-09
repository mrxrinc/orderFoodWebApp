import React from 'react';
import './style.scss';
import PinUser from '../../images/pin-user.png';
import PinRestaurant from '../../images/pin-restaurant.png';

/* eslint-disable react/prefer-stateless-function */
class AddressOriginDestination extends React.PureComponent {
  render() {
    return (
      <div className="address">
        <div className="address__box address__box-border address__box-origin">
          <div className="address__box__header address__box__header-border">
            <img src={PinRestaurant}/>
            <h4>نشانی رستوران:</h4>
          </div>
          <p>میدان ونک ، انتهای خیابان ونک ، تقاطع سيول ، خیابان رشیدی ، جنب بانک ملی ، پلاک ۴</p>
        </div>
        <div className="address__box address__box-destination">
          <div className="address__box__header">
            <img src={PinUser}/>
            <h4>نشانی رستوران:</h4>
          </div>
          <label>محل کار</label>
          <p>میدان ونک ، انتهای خیابان ونک ، تقاطع سيول ، خیابان رشیدی ، جنب بانک ملی ، پلاک ۴</p>
        </div>
      </div>
    );
  }
}

AddressOriginDestination.propTypes = {};

export default AddressOriginDestination;
