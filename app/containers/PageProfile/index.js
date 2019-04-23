import React from 'react';
import { Link } from 'react-router-dom';

import user from './user.png';
import './style.scss';
import ProfileAddress from '../../components/MyAddress' ; //import a component from another file
import ProfileMenu from './profilemenu' ; //import a component from another file
import edit from './edit.png';
// import pattern from '../../images/pattern.png';
import addressSample from '../address.json';


class PageProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      tilte:"پروفایل",
      name:"معصومه حسنی",
      email: "m.hasani@netbarg.com",
      number:"09197117631",
      cash:"موجودی فعلی‌ :",
      money:"50000",
      gain: "افزایش موجودی",
      adtitle: "آدرس های من"
    }
  }
  render() {
    return(
      <div className="page-profile">
        <div className="profile-home relative topP20">
          <div className="profile-background flex relative cover center bottomP20">
            <span className="profile-background__text text22">پروفایل</span>
            <div className="profile-background__icon">
              <Link to="/profile/edit" className="icon chilivery-edit text22"> </Link>
            </div>
          </div>

          <div className="curvature absolute bottom wFull bgWhite" />

        </div>

        <div className="profile-address relative">
          <div className="profile-user">
            <div className="rainbow" />
            <div className="profile">
              <div className="profile__image center">
                <span className="icon chilivery-user"> </span>
              </div>

              <div className="profile__character">
                <h5 className="profile__name text14">{this.state.name}</h5>
                <h6 className="profile__email text12">{this.state.email}</h6>
                <span className="profile__number text14">{this.state.number}</span>
              </div>
            </div>

            <div className="profile-line center">
              <div className="profile-count leftMauto text12">
                <span className="profile-count__cash">{this.state.cash}</span>
                <span className="profile-count__money bold rightP5">
                  {this.state.money}
                  <span> تومان</span>
                </span>
              </div>

              <div className="profile-gain">
                <button type="button" className="btn btn-success">{this.state.gain}</button>
              </div>
            </div>
          </div>

          <div className="profile-address__item rightP10">
            <h2 className="profile-address__adtitle">{this.state.adtitle}</h2>
            <ProfileAddress data={addressSample.result} />

          </div>

        </div>
        <div className="profile-menu-detail">
          <div className="profile-menu__item">
            <ProfileMenu />
          </div>
        </div>
      </div>
    );
  }
}



export default PageProfile;
