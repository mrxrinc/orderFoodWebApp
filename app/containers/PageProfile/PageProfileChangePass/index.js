import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import icon from '../../../images/icons/change_password.png'

class ProfileChangePass extends React.Component{
	constructor(props){
		super(props)
		this.state={
			loginPass: '۶۵۴۷۷',
			loginPassNew:'',
			loginPassNewChange:'',
		}
	}
	onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

	render(){
		return(
			<div className="profile-edit">
				<div className="container">
					<div className="profile-edit__icon center">
						<img src={icon} alt="change_password"/>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-5">
							<AnimateField
								className="col-12"
								name="loginPass"
								type="password"
								onClick=""
								icon="chilivery-gift"
								placeholder="وارد نمایید"
								label="رمز عبور فعلی"
								value={this.state.loginPass}
								onChange={this.onChange}
								// onKeyPress={this.handleKeyPress}
								// validation={
								//   typeof classes.validation.password === 'undefined'
								//     ? false
								//     : classes.validation.password
								// }
              	required
            	/>

							<AnimateField
								className="col-12"
								name="loginPass"
								type="password"
								onClick=""
								placeholder="وارد نمایید"
								label="رمز عبور جدید"
								icon="chilivery-gift"
								value={this.state.loginPassNew}
								onChange={this.onChange}
								// onKeyPress={this.handleKeyPress}
								// validation={
								//   typeof classes.validation.password === 'undefined'
								//     ? false
								//     : classes.validation.password
								// }
              	required
            	/>

							<AnimateField
								className="col-12"
								name="loginPass"
								type="password"
								onClick=""
								placeholder="وارد نمایید"
								label="تغییر رمز عبور جدید"
								icon="chilivery-gift"
								value={this.state.loginPassNewChange}
								onChange={this.onChange}
								// onKeyPress={this.handleKeyPress}
								// validation={
								//   typeof classes.validation.password === 'undefined'
								//     ? false
								//     : classes.validation.password
								// }
              	required
            	/>
							<div className="btn-change">
								<button className="btn btn-success btn-change__pass">تغییر رمز عبور</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileChangePass;