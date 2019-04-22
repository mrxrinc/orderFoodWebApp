import React, {Component} from 'react';
import { Button } from 'reactstrap';
import logo from '../../images/logo-home.png';
import { AnimateField } from '../../components/ChiliForm';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../actions/Modals';
import { getCityList } from '../../api/application/region';
import UserPositionChili from '../../components/ChiliModal/components/UserPositionChili';
import {getNeighborhood} from '../../api/application/region';
import { addNeighborhood } from '../../actions/UserPosition';

import './style.scss';
// eslint-disable-next-line react/prefer-stateless-function


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityList:[],
      userLocation:{},
      cityName:"",
      regionName:""
    }
  }
  toggleLogin = () => {
    this.props.showModal({
      UserPositionModal: false,
    });
  };

  fetchMap = () =>{
    getNeighborhood(
        `${this.state.userLocation.lat},${this.state.userLocation.lng}`,
    ).then(
        response => {
            let neighborhood = response.result.neighbourhood;
            let obj = {};
            obj['neighborhood'] = neighborhood;
            this.props.addNeighborhood(obj);
        }
    );
}

  componentDidMount() {

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
  
  UserPositionModal = () => {
    this.props.showModal({
      UserPositionModal: true,
    });
  };
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
            <div 
              className="locationBtn flex reset overhide"
              onClick={this.UserPositionModal}
            >
              <div className="i3 city flex spaceBetween hP10 hCenter primary disableBg">
                <span className="text14 bold rightM5">
                  {typeof this.props.UserPosition !== "undefined" ? this.props.UserPosition.cityName: ""}
                </span>
                <span className="chilivery-arrow-bottom gray text12" />
              </div>

              <div className="i2-3 city flex spaceBetween hP10 hCenter primary whiteBg">
                <span className="text14 bold rightM5 text-truncate">
                  {typeof this.props.UserPosition !== "undefined" ? this.props.UserPosition.name: ""}
                </span>
                <span className="chilivery-arrow-bottom gray text12" />
              </div>
            </div>
          </div>

          <div className="searchInput topM30 wFull hP20">
            <AnimateField
              className="input"
              icon="chilivery-filter-food-type text25"
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
            <Link to="/restaurants-list" className="chilivery-compass" />
            <p className="primary text14 bold topM10">رستوران های اطراف من</p>
          </div>
        </div>

        <UserPositionChili
          headerAlign="center"
          headerColor="#eaeaea"
          bodyColor="#f5f5f5"
          data={this.state.cityList}
          type="home"
        />

      </div>
    );
  }
}

const mapStateToProps = state => ({
  UserPosition: state.UserPosition.neighborhood,
});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
      dispatch(showModal(showStatus))
  },
  addNeighborhood: showStatus => {
    dispatch(addNeighborhood(showStatus));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);