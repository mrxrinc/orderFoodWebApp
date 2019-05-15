import React, { Component } from 'react';
import {userUpdateAddressPost} from '../../api/application/userAddress';
import { AnimateField } from '../../components/ChiliForm';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import { getCityList, getNeighborhood } from '../../api/application/region';
import { addNeighborhood } from '../../actions/UserPosition';
import ChiliMap from '../../components/ChiliMap';
import ChiliAlert from '../../components/ChiliAlert';
import {addToast} from '../../actions/Notifications';

import UserPositionChili from '../../components/ChiliModal/components/UserPositionChili';
import {userAddressList} from '../../api/application/userAddress';
import NavigationBar from '../../components/NavigationBar';
import { history } from '../../store';
import './style.scss';
import icon from '../../images/icons/edit_profile.png'

class ProfileEditAddress extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			userLocation: {
				lat: 35.704334,
				lng: 51.393625
			},
			cityName: '',
			regionName: '',
			regionComplete: '',
			regionCompleteOrg:'',
			addressLabel: '',
			map: false,
			alertShow:false,
			alertMessage:'',
			alertType:'',
			id: this.props.match.params.id,
			userAddressList:[],
			organizationAddress:[],
			description:'',
			organization: false
		}
	}
	onChange = e => {
		this.setState({ [e.target.name]: e.target.value });
	};

	UserPositionModal = () => {
		this.props.showModal({
			UserPositionModal: true,
		});
	};

	fetchMap = () => {
		getNeighborhood(
			`${this.state.userLocation.lat},${this.state.userLocation.lng}`,
		).then(
			response => {
				let neighborhood = response.result.neighbourhood;
				let obj = {};
				obj['neighborhoodProfile'] = neighborhood;
				this.props.addNeighborhood(obj);
				this.onClosed();
			}
		);
	}

	onClosed = () => {
		this.setState({ map: false }, () => {
			this.setState({
				map: true
			})
		})
	}

	onSubmit = () => {
		let addressData = this.props.UserPosition;
		userUpdateAddressPost({
			"id":								this.state.id,
			"cityId":						addressData.cityId,
			"neighborhoodId":		addressData.id,
			"name":  						this.state.addressLabel,
			"complete":		   		this.state.regionComplete,
			"description":	this.state.description,
			"point":{
				"latitude":				addressData.mapCenter.lat,
				"longitude":			addressData.mapCenter.lon
			},
		}).then(
			response => {
				if(response.status){
					this.props.showAlert({
						text: response.message_fa,
						color: "success",
					});
					history.push("/profile");
				}else{
					this.props.showAlert({
						text: response.message_fa,
						color: "danger",
					});
				}
			}
		).catch(
			error => {
				this.props.showAlert({
					text: error.message_fa,
					color: "success",
				});
			
			}
		)
	}

	componentDidMount() {

		userAddressList(this.props.auth.id).then(
			
      response => {
        this.setState({
					userAddressList:response.result,
					addresses:response.result.addresses || [],
					organizationAddress:response.result.userOrganizationAddress || [],
        },()=>{
					let fullAddress = [];
					fullAddress = this.state.organizationAddress.concat(this.state.addresses);

					const checkId = (filterArray) => filterArray.id == this.state.id;
					const filterAddress = fullAddress.filter(checkId);
					this.setState({
						regionComplete: filterAddress[0].complete || filterAddress[0].organAddressComplete,
						organization: filterAddress[0].organAddressComplete ? true : false,
						description: filterAddress[0].description || filterAddress[0].complete,
						addressLabel: filterAddress[0].name,
						userLocation: {
								lat: filterAddress[0].mapCenter.lat,
								lng: filterAddress[0].mapCenter.lon,
							}
						},this.fetchMap)
				})
		})
		
		getCityList().then(
			response => {
				this.setState({
					cityList: response.result
				})
			}
		)

	}

	componentWillUnmount() {
		let reduxProps = this.props.UserPositionMain;
		delete reduxProps["neighborhoodProfile"];
		this.props.addNeighborhood(reduxProps);
	}


	render() {
		return (
			<div className="profile profile-add-new-adress bottomP50">
				<NavigationBar 
					back
					background
					title="ویرایش آدرس"
				/>
				{ this.state.alertShow &&
					<ChiliAlert type={this.state.alertType}>
						{this.state.alertMessage}
					</ChiliAlert>
				}
				<div className="container">
					<div className="row">
						<div className="col">
							<div className="profile-edit__map">
								{this.state.map &&
									<ChiliMap
										type="profile"
										userLocation={this.state.userLocation}
									/>
								}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-5">

							<div onClick={this.UserPositionModal}>
								<AnimateField
									className="col-12"
									placeholder="وارد نمایید"
									name="cityName"
									type="text"
									onChange={this.onChange}
									label="شهر"
									value={
										typeof this.props.UserPosition !== "undefined" ? this.props.UserPosition.cityName : ""
									}
									iconColor="#929292"
								// disabled
								/>
							</div>

							<div onClick={this.UserPositionModal}>
								<AnimateField
									className="col-12"
									placeholder="وارد نمایید"
									name="regionName"
									type="text"
									label="محله"
									value={
										typeof this.props.UserPosition !== "undefined" ? this.props.UserPosition.name : ""
									}
									iconColor="#929292"
								/>
							</div>

							<div className="chili-animate-field form-group">
								<div className="form-control">
									{this.state.organization ? 
										<p style={{backgroundColor:"#ccc"}}>{this.state.regionComplete}</p>:
										null
									}
									<textarea
										name={this.state.organization ? "description" : "regionComplete"}
										value={this.state.organization ? this.state.description :this.state.regionComplete}
										onChange={this.onChange}
									>
										{this.state.organization ? this.state.description :this.state.regionComplete}
									</textarea>
								</div>

								<label htmlFor="regionComplete">آدرس دقیق</label>
							</div>


							<AnimateField
								className="col-12"
								placeholder="وارد نمایید"
								name="addressLabel"
								type="text"
								onChange={this.onChange}
								label="عنوان نشانی (مثال: خانه, محل کار)"
								value={this.state.addressLabel}
								iconColor="#929292"
							/>


						</div>
					</div>
				</div>
				{
					<UserPositionChili
						headerAlign="center"
						headerColor="#eaeaea"
						bodyColor="#f5f5f5"
						data={this.state.cityList}
						type="profile"
						onClosed={this.onClosed}
					/>
				}
				<div className="center">
					<button className="btn btn-success" onClick={this.onSubmit}>ثبت آدرس</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	UserPosition: state.UserPosition.neighborhoodProfile,
	UserPositionMain: state.UserPosition,
	auth: state.auth,
});
const mapDispatchToProps = dispatch => ({
	showModal: (showStatus) => {
		dispatch(showModal(showStatus))
	},
	addNeighborhood: showStatus => {
		dispatch(addNeighborhood(showStatus));
	},
	showAlert: (showStatus) => {
    dispatch(addToast(showStatus));
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileEditAddress);