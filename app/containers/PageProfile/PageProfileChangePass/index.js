import React,{Component} from 'react';
import { Link } from 'react-router-dom';

import { AnimateField, AnimateFieldSheba,CheckBox } from '../../../components/ChiliForm';
import './style.scss';
import icon from '../../../images/icons/change_password.png';
import { profileChangePass } from '../../../api/account';
import {addToast} from '../../../actions/Notifications';
import { connect } from 'react-redux';
import NavigationBar from '../../../components/NavigationBar';
class ProfileChangePass extends React.Component{
	constructor(props){
		super(props)
		this.state={
			password_current: '',
			password:'',
			password_confirmation:'',
		}
	}
	onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
	};
	
	onSubmit = () => {
		profileChangePass({
			password_current: this.state.password_current,
			password:this.state.password,
			password_confirmation:this.state.password_confirmation,
		}).then((response) => {
				if(response.status){
					this.props.showAlert({
						text: response.message_fa,
						color: "success",
					});

				}else{
					this.props.showAlert({
						text: response.message_fa,
						color: "danger",
					});
				}
	
					
		}).catch((err) => {
			this.props.showAlert({
				text: err.message_fa,
				color: "danger",
			});
		});
	}

	render(){
		return(
			<div className="profile-edit">
				<NavigationBar 
					back
					background
					title="تغییر رمز عبور"
				/>
				<div className="container">
					<div className="profile-edit__icon center">
						<img className="edit__img" src={icon} alt="change_password"/>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-5">
							<AnimateField
								className="col-12"
								name="password_current"
								type="password"
								onClick=""
								icon="chilivery-gift"
								placeholder="وارد نمایید"
								label="رمز عبور فعلی"
								value={this.state.password_current}
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
								name="password"
								type="password"
								onClick=""
								placeholder="وارد نمایید"
								label="رمز عبور جدید"
								icon="chilivery-gift"
								value={this.state.password}
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
								name="password_confirmation"
								type="password"
								onClick=""
								placeholder="وارد نمایید"
								label="تغییر رمز عبور جدید"
								icon="chilivery-gift"
								value={this.state.password_confirmation}
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
								<button className="btn btn-success btn-change__pass" onClick={this.onSubmit}>تغییر رمز عبور</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
});
const mapDispatchToProps = dispatch => ({
  showAlert: (showStatus) => {
    dispatch(addToast(showStatus));
},
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChangePass);
