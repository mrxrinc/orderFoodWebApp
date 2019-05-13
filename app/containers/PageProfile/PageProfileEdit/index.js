import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './editprofile.scss';
import icon from '../../../images/icons/edit_profile.png';
import NavigationBar from '../../../components/NavigationBar';

class ProfileEdit extends React.Component{
	constructor(props){
		super(props)
		this.state={
			loginUserName: 'معصومه حسنی',
			loginPhoneNumber: '09197117631',
			loginUserEmail: 'masihhasani98@gmail.com',
			loginBirthday:'77/03/10',
			organizationCode:'',
			signUpSheba: '',
			signUpCity: '',
			loginPass: '',
			signUpGender: 'male',
		}
	}
	onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

	render(){
		const {signUpGender} = this.state
		return(
			<div className="profile-edit">
				<NavigationBar 
					back
					background
					title="ویرایش پروفایل"
				/>
				<div className="container">
					<div className="profile-edit__icon center">
						<img className="edit-img" src={icon} alt="edit_profile"/>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-5">
							<AnimateField
								className="col-12"
								placeholder="وارد نمایید"
								name="loginUserName"
								type="text"
								onClick=""
								label="نام و نام خانوادگی*"
								value={this.state.loginUserName}
								onChange={this.onChange}
								icon="chilivery-user"
								iconColor="#929292"
							/>
							<AnimateField
								className="col-12"
								placeholder="وارد نمایید"
								name="loginPhoneNumber"
								type="text"
								onClick=""
								label="موبایل*"
								value={this.state.loginPhoneNumber}
								onChange={this.onChange}
								icon="chilivery-edit-number"
								iconColor="#929292"
								validation={['شماره موبایل اشتباه است.']}
							/>
							<button class="btn-white btn btn-secondary edit-prifile-btn center">تایید</button>

							<AnimateField
								className="col-12"
								placeholder="وارد نمایید"
								name="loginUserEmail"
								type="text"
								onClick=""
								label="ایمیل*"
								value={this.state.loginUserEmail}
								onChange={this.onChange}
								icon="chilivery-email"
								iconColor="#929292"
							/>
							<AnimateField
								className="col-12"
								placeholder="وارد نمایید"
								name="organizationCode"
								type="text"
								onClick=""
								label="کد سازمانی"
								value={this.state.organizationCode}
								onChange={this.onChange}
								icon="chilivery-organization-code"
								iconColor="#929292"
							/>
							<AnimateFieldSheba
								className="col-sm-6"
								name="signUpSheba"
								type="text"
								onClick=""
								placeholder="وارد نمایید"
								label="شماره شبا(اختیاری)"
								value={this.state.signUpSheba}
								onChange={this.onChange}
								//onKeyPress={this.handleKeyPressUpdate}
								icon="chilivery-sheba"
								iconColor="#929292"
							/>
							<AnimateField
								className="col-12"
								placeholder="وارد نمایید"
								name="loginBirthday"
								type="text"
								onClick=""
								label="تاریخ تولد"
								value={this.state.loginBirthday}
								onChange={this.onChange}
								icon="chilivery-birthday"
								iconColor="#929292"
							/>
						</div>
						<div className="chili-animate-field form-group col-sm-6">
							<div className="profile-gender">
								<div>
									<label> جنسیت </label>
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
										<span>مرد</span>
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
										<span>زن</span>
									</label>
								</div>
								{/* <label> جنسیت </label> */}
							</div>
						</div>
					</div>
					<div class="edit-profile-button">
						<button class="btn btn-success edit__btn">ثبت تغییرات</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileEdit;