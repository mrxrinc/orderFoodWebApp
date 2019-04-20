import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { AnimateField } from '../../components/ChiliForm';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import { getCityList } from '../../api/application/region';
import UserPositionChili from '../../components/ChiliModal/components/UserPositionChili';
import './style.scss';
import icon from '../../images/icons/edit_profile.png'

class ProfileNewAddress extends React.Component{
	constructor(props){
		super(props)
		this.state={
			cityName:'',
			regionName:'',
			regionComplete:'',
			modal:false
		}
	}
	onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
	};
	
	UserPositionModal = () => {
		console.log('====================================');
		console.log('salam');
		console.log('====================================');
		this.setState({
			modal:true
		})
    this.props.showModal({
      UserPositionModal: true,
    });
  };
  componentDidMount(){
    getCityList().then(
      response => {
        this.setState({
          cityList: response.result
        })
      }
		)
		if(typeof this.props.UserPosition !== "undefined"){
				this.setState({
					cityName: this.props.UserPosition.cityName,
					regionName: this.props.UserPosition.name,
				},()=>{
					console.log('====================================');
					console.log(this.state);
					console.log('====================================');
				})
			}

	}
	componentDidUpdate(prevProps,prevState){
		if(typeof this.props.UserPosition !== "undefined"){
			if((prevProps.UserPosition.cityName !== this.props.UserPosition.cityName)){
				this.setState({
					cityName: this.props.UserPosition.cityName,
					regionName: this.props.UserPosition.name,
				})
			}
		}
	}
	render(){
		return(
			<div className="profile profile-add-new-adress">
				<div className="container">
					<div className="profile-edit__icon center">
						<img src={icon} alt="edit_profile"/>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-5" onClick={this.UserPositionModal}>

							<AnimateField
								className="col-12"
								placeholder="وارد نمایید"
								name="cityName"
								type="text"
								
								label="شهر"
								value={this.state.cityName}
								iconColor="#929292"
								disabled

							/>

							<AnimateField
								className="col-12"
								placeholder="وارد نمایید"
								name="regionName"
								type="text"
								onClick={this.UserPositionModal}
								label="محله"
								value={this.state.regionName}
								iconColor="#929292"
							/>
				
							<div className="chili-animate-field form-group">
								<div className="form-control">
									<textarea
										name="regionComplete"
										value={this.state.regionComplete}
										onChange={this.onChange}
									>
										{this.state.regionComplete}
									</textarea>
								</div>

								<label htmlFor="regionComplete">آدرس دقیق</label>
							</div>
			
		
						</div>
					</div>
				</div>
				{
					this.state.modal ?
					<UserPositionChili
						headerAlign="center"
						headerColor="#eaeaea"
						bodyColor="#f5f5f5"
						data={this.state.cityList}
						type="profile"
					/>:""
				}
			</div>
		);
	}
}

const mapStateToProps = state => ({
  UserPosition: state.UserPosition.neighborhoodProfile,
});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
      dispatch(showModal(showStatus))
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(ProfileNewAddress);