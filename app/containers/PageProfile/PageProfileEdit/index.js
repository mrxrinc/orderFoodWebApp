import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  AnimateField,
  AnimateFieldSheba,
  CheckBox,
} from '../../../components/ChiliForm';
import './editprofile.scss';
import icon from '../../../images/icons/edit_profile.png';
import NavigationBar from '../../../components/NavigationBar';
import Loading from '../../../components/ChiliLoading';
import {
  getProfileDetails,
  editProfile,
  userUpdate,
} from '../../../api/account';
import { addToast } from '../../../actions/Notifications';
import { updateUser } from '../../../actions/Auth';

class ProfileEdit extends React.Component {
  constructor(props){
    super(props)
    this.state={
      user: null,
      loading: true,
    }
  }

  componentDidMount() {
    getProfileDetails().then(resp => {
      console.log('profileDetails ===>', resp.result)
      this.setState({ user: resp.result.user, loading: false })
    })
  }

  updateData = () => {
	  const data = {
      organizationCode: this.state.user.organization.registerCode,
	    email: this.state.user.email,
      fullName: this.state.user.fullName,
	    mobileNumber: this.state.user.mobileNumber,
	  }

    this.props.updateUser(data);
    // editProfile(data).then(resp => {
    // 	console.log('USER UPDATE RESULT', resp);
    // 	if(resp.status === false) {
	  // 		this.props.showAlert({
	  // 			text: resp.message_fa,
	  // 			color: "danger",
    // 		});
	  // 	} else {
    // 		this.props.showAlert({
	  // 			text: resp.message_fa,
	  // 			color: "success",
    // 		});
    // 	}
    // })
	  // .catch(err => console.log(err))
  };

  onChange = e => {
	  let user = this.state.user;
	  if(e.target.name === 'organization') {
      user.organization = {
        ...this.state.user.organization,
	      registerCode: e.target.value, 
	    }
    } else {
      user = {
	      ...this.state.user, 
	      [e.target.name]: e.target.value, 
	    }
    }
	  this.setState({ user });
	};

  render() {
	  const {signUpGender} = this.state
	  return(
	    <div className="profile-edit">
	      <NavigationBar 
	        back
	        background
	        title="???????????? ??????????????"
	      />
	      {this.state.user ? (
	        <div className="container">
	          <div className="profile-edit__icon center">
	            <img className="edit-img" src={icon} alt="edit_profile"/>
            </div>
            <div className="row">
              <div className="col-lg-12 mt-5">
	              <AnimateField
	                className="col-12"
	                placeholder="???????? ????????????"
                  name="fullName"
	                type="text"
                  onClick=""
	                label="?????? ?? ?????? ????????????????*"
	                value={this.state.user.fullName}
                  onChange={this.onChange}
	                icon="chilivery-user"
                  iconColor="#929292"
	              />
	              <AnimateField
                  className="col-12"
	                placeholder="???????? ????????????"
                  name="mobileNumber"
	                type="text"
                  disabled
	                onClick=""
	                label="????????????*"
	                value={this.state.user.mobileNumber}
	                onChange={this.onChange}
                  icon="chilivery-edit-number"
	                iconColor="#929292"
                  // validation={['?????????? ???????????? ???????????? ??????.']}
	              />
                {/* <button class="btn-white btn btn-secondary edit-prifile-btn center">??????????</button> */}

                <AnimateField
                  className="col-12"
                  placeholder="???????? ????????????"
                  name="email"
                  type="text"
                  onClick=""
                  label="??????????*"
                  value={this.state.user.email}
	                onChange={this.onChange}
                  icon="chilivery-email"
	                iconColor="#929292"
	              />
                <AnimateField
                  className="col-12"
	                placeholder="???????? ????????????"
	                name="organization"
	                type="text"
	                onClick=""
                  label="???? ??????????????"
	                value={this.state.user.organization && this.state.user.organization.registerCode}
                  onChange={this.onChange}
	                icon="chilivery-organization-code"
                  iconColor="#929292"
	              />
	              {/* <AnimateFieldSheba
									className="col-sm-6"
									name="signUpSheba"
									type="text"
									onClick=""
									placeholder="???????? ????????????"
									label="?????????? ??????(??????????????)"
									value={this.state.signUpSheba}
									onChange={this.onChange}
									//onKeyPress={this.handleKeyPressUpdate}
									icon="chilivery-sheba"
									iconColor="#929292"
								/>
								<AnimateField
									className="col-12"
									placeholder="???????? ????????????"
									name="loginBirthday"
									type="text"
									onClick=""
									label="?????????? ????????"
									value={this.state.loginBirthday}
									onChange={this.onChange}
									icon="chilivery-birthday"
									iconColor="#929292"
								/> */}
	            </div>
	            {/* <div className="chili-animate-field form-group col-sm-6">
								<div className="profile-gender">
									<div>
										<label> ?????????? </label>
										<label className="radio-wrapper">
											<div className="label-parent">
												<input
													type="radio"
													className="radio-input"
													name="signUpGender"
													checked={signUpGender === 'male'}
													onChange={this.onChange}
													// onKeyPress={this.handleKeyPressUpdate}
													value="male"
												/>
												<div className="radio-face" />
												<i />
											</div>
											<span>??????</span>
										</label>
										<label className="radio-wrapper">
											<div className="label-parent">
												<input
													type="radio"
													className="radio-input"
													name="signUpGender"
													checked={signUpGender === 'female'}
													onChange={this.onChange}
													// onKeyPress={this.handleKeyPressUpdate}
													value="female"
												/>
												<div className="radio-face" />
												<i />
											</div>
											<span>????</span>
										</label>
									</div>
								</div>
							</div> */}
	          </div>
	          <div className="edit-profile-button">
	            <button className="btn btn-success edit__btn" onClick={this.updateData}>?????? ??????????????</button>
            </div>
	        </div>
	      ): (
          <div className="whFull center">
	          <Loading />
          </div>
	      )}
      </div>
	  );
  }
}

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => ({
  showAlert: showStatus => {
    dispatch(addToast(showStatus));
  },
  updateUser: userData => {
    dispatch(updateUser(userData));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfileEdit);
