import React from 'react';
import { Button } from 'reactstrap';
import logo from '../../images/logo-home.png';
import { AnimateField } from '../../components/ChiliForm';

import './style.scss';
// eslint-disable-next-line react/prefer-stateless-function
export default class HomePage extends React.PureComponent {
  render() {
    return (
      <div className="home whFull absolute">
        <div className="head wFull cover relative">
          <div className="wave absolute bottom wFull contain" />
          <div className="absolute bottom wFull center">
            <img src={logo} className="logo" alt="Logo" />
          </div>
        </div>

        <div className="content">
          <div className="wFull vP10 center topM30">
            <div className="locationBtn flex reset overhide">
              <div className="i3 city flex spaceBetween hP10 hCenter primary disableBg">
                <span className="text14 bold rightM5">تهران</span>
                <span className="chilivery-arrow-bottom gray text12" />
              </div>

              <div className="i2-3 city flex spaceBetween hP10 hCenter primary whiteBg">
                <span className="text14 bold rightM5">سهروردی شمالی</span>
                <span className="chilivery-arrow-bottom gray text12" />
              </div>
            </div>
          </div>

          <div className="searchInput topM30 wFull hP20">
            <AnimateField
              className="input"
              icon="chilivery-filter-food-type text30"
              label="جستجوی رستوران یا غذا..."
              placeholder="نام غذا یا رستوران..."
              name="homeSearch"
            />
          </div>

          <div className="searchBtn topM40 wFull hP20 center">
            <Button color="success">مشاهده رستوران ها</Button>
          </div>

          <div className="wFull hP20 vM30 center">
            <div className="fullLine" />
            <span className="or gray absolute hP10 lightBg">یا</span>
          </div>

          <div className="wFull topM30 column center">
            <div className="chilivery-compass" />
            <p className="primary text14 bold topM10">رستوران های اطراف من</p>
          </div>
        </div>
      </div>
    );
  }
}
