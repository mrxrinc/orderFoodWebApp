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
import {history} from '../../store';
import ChiliAutocomplete from '../../components/ChiliAutocomplete';
import './style.scss';
// eslint-disable-next-line react/prefer-stateless-function


class HomePage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      cityList:[],
      userLocation:{
        lat: 35.704334,
        lng: 51.393625
      },
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


  myLocation = () => {
    const myGetLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(myPositionSuccess,myPositionError);
      }
    }

    const myPositionSuccess = (position) => {
      const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
      };
      getNeighborhood(
          `${userLocation.lat},${userLocation.lng}`,
      ).then(
          response => {
              let neighborhood = response.result.neighbourhood;
              history.push(`/restaurants/${neighborhood.citySlug}/${neighborhood.slug}`)
          }
      );
    }

    const myPositionError = ()=>{
      // this.fetchMap();
    }

    myGetLocation();
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
        navigator.geolocation.getCurrentPosition(positionSuccess,positionError);
      }
    }

    const positionSuccess = (position) => {
        this.setState({
          userLocation: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            }
        },this.fetchMap)
    }

    const positionError = ()=>{
      this.fetchMap();
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
                  {typeof this.props.UserPosition !== "undefined" ? this.props.UserPosition.cityName: this.state.cityName}
                </span>
                <span className="chilivery-arrow-bottom gray text12" />
              </div>

              <div className="i2-3 city flex spaceBetween hP10 hCenter primary whiteBg">
                <span className="text14 bold rightM5 text-truncate">
                  {typeof this.props.UserPosition !== "undefined" ? this.props.UserPosition.name: this.state.regionName}
                </span>
                <span className="chilivery-arrow-bottom gray text12" />
              </div>
            </div>
          </div>

          {/* <div className="searchInput topM30 wFull hP20">
            <AnimateField
              className="input"
              icon="chilivery-filter-food-type text25"
              label="???????????? ?????????????? ???? ??????..."
              placeholder="?????? ?????? ???? ??????????????..."
              name="homeSearch"
            />
          </div> */}

          <div className="panigale-suggestion-search topM30 hP20 wFull searchInput">
            <div className="card_white">
              <ChiliAutocomplete/>
            </div>
          </div>

          <div className="wFull hP20 vM30 center">
            <div className="fullLine" />
            <span className="or gray absolute hP10 lightBg">????</span>
          </div>

          <div className="wFull topM30 column center">
            <span className="chilivery-compass" onClick={this.myLocation}/>
            <p className="primary text14 bold topM10">?????????????? ?????? ?????????? ????</p>
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