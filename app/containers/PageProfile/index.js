import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import user from './user.png';
import './style.scss';
import ProfileAddress from '../../components/MyAddress' ; //import a component from another file
import ProfileMenu from './profilemenu' ; //import a component from another file
import edit from './edit.png';
// import pattern from '../../images/pattern.png';
import addressSample from '../address.json';
import {userAddressList} from '../../api/application/userAddress';

class PageProfile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      userAddressList:"",
      userAddressListAdd:[],
      AddressShow:false
    }
  }
  componentDidMount(){
    userAddressList(this.props.auth.id).then(
      response => {
        this.setState({
          userAddressList:response.result,
        },()=>{
          this.setState({
            AddressShow:true
          })
        })
      }
    )
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
                <h5 className="profile__name text14">{this.props.auth.fullName}</h5>
                <h6 className="profile__email text12">{this.props.auth.email}</h6>
                <span className="profile__number text14">{this.props.auth.mobileNumber}</span>
              </div>
            </div>

            <div className="profile-line center">
              <div className="profile-count leftMauto text12">
                <span className="profile-count__cash">موجودی فعلی‌ :</span>
                <span className="profile-count__money bold rightP5">
                  {this.props.auth.cacheBalance}
                  <span> تومان</span>
                </span>
              </div>

              <div className="profile-gain">
                <button type="button" className="btn btn-success">افزایش موجودی</button>
              </div>
            </div>
          </div>

          <div className="profile-address__item rightP10">
            <h2 className="profile-address__adtitle">آدرس های من</h2>
            {this.state.AddressShow &&
              <ProfileAddress data={this.state.userAddressList} />
            }

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



const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => {
      dispatch(getUser(user));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PageProfile);
