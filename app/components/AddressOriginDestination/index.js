import React from 'react';
import './style.scss';
import PinUser from '../../images/pin-user.png';
import PinRestaurant from '../../images/pin-restaurant.png';

/* eslint-disable react/prefer-stateless-function */
class AddressOriginDestination extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    const {dataRestaurant,dataUser} = this.props;

    return (
      <div className="address">
        <div className="address__box address__box-border address__box-origin">
          <div className="address__box__header address__box__header-border">
            <img src={PinRestaurant}/>
            <h4>نشانی رستوران:</h4>
          </div>
          <p>{dataRestaurant && dataRestaurant.address}</p>

        </div>
        {dataUser && dataUser.address &&
        <div className="address__box address__box-destination">
          <div className="address__box__header">
            <img src={PinUser}/>
            <h4>نشانی رستوران:</h4>
          </div>
          <label>{dataUser && dataUser.addressName}</label>
          <p>{dataUser && dataUser.address}</p>
        </div>
        }

      </div>
    );
  }
}

AddressOriginDestination.propTypes = {};

export default AddressOriginDestination;
