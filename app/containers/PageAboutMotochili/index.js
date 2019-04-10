import React from 'react';
import './style.scss';
// eslint-disable-next-line react/prefer-stateless-function
// import moduleName from '../../images/icons/';

import UserPosition from '../../components/UserPosition';
import map from './map.png';
import motoSpeed from '../../images/icons/motochili_speed.png';
import motoPrice from '../../images/icons/motochili_price.png';
import motoDelivery from '../../images/icons/motochili_delivery.png';
import motoSupport from '../../images/icons/motochili_support.png';
export default class PageAboutMotochili extends React.PureComponent {
  render() {
    return (
      <div className="">
        <UserPosition/>
      </div>
    );
  }
}
