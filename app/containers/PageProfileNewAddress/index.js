import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { AnimateField } from '../../components/ChiliForm';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import { getCityList,getNeighborhood } from '../../api/application/region';
import { addNeighborhood } from '../../actions/UserPosition';
import ChiliMap from '../../components/ChiliMap';

import UserPositionChili from '../../components/ChiliModal/components/UserPositionChili';
import './style.scss';
import icon from '../../images/icons/edit_profile.png'

class ProfileNewAddress extends React.Component{
	constructor(props){
		super(props)
		this.state={
			userLocation:{},
			cityName:'',
			regionName:'',
			regionComplete:'',
			addressLabel:'',
			map:true,
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
	
	fetchMap = () =>{
    getNeighborhood(
        `${this.state.userLocation.lat},${this.state.userLocation.lng}`,
    ).then(
        response => {
            let neighborhood = response.result.neighbourhood;
            let obj = {};
            obj['neighborhoodProfile'] = neighborhood;
            this.props.addNeighborhood(obj);
        }
    );
}

  componentDidMount(){
    getCityList().then(
      response => {
        this.setState({
          cityList: response.result
        })
      }
    )

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        }
    }
    const showPosition = (position) => {
        this.setState({
          userLocation: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        },this.fetchMap)
		}
    if(typeof this.props.UserPosition == "undefined"){
      getLocation();
    }
	}
	onClosed = () => {
		this.setState({ map:false },()=> {
			this.setState({
				map:true
			})
		})
	}

	render(){
		return(
			<div className="profile profile-add-new-adress">
				<div className="container">
					<div className="row">
						<div className="col">			
							<div className="profile-edit__map">
							{this.state.map &&
								<ChiliMap
										type="profile"
									/>
							}
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-12 mt-5">

							<div >
								<AnimateField
									className="col-12"
									placeholder="وارد نمایید"
									name="cityName"
									type="text"
									onChange={this.onChange}
									label="شهر"
									value={
										typeof this.props.UserPosition !== "undefined" ? this.props.UserPosition.cityName: ""
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
										typeof this.props.UserPosition !== "undefined" ? this.props.UserPosition.name: ""
									}
									iconColor="#929292"
								/>
							</div>
				
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
	addNeighborhood: showStatus => {
    dispatch(addNeighborhood(showStatus));
  },
});

export default connect(mapStateToProps,mapDispatchToProps)(ProfileNewAddress);