import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";
import PinUser from '../../images/pin-user.png';
import PinRestaurant from '../../images/pin-restaurant.png';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      restaurantListCount: 0,
      mapCenter: {
        lat:'',
        lon:''
      },
      restaurantLocation:{
        lat:this.props.restaurantPoint.lat,
        lng:this.props.restaurantPoint ? this.props.restaurantPoint.lon : '',
      },
      userLocation:{
        lat:this.props.restaurantPoint.lat,
        lng:this.props.userPoint ? this.props.userPoint.lon : ''
      },
      cityId:''
    };
  }

  UserPositionModal = () => {
    this.props.showModal({
      UserPositionModal: false,
    });
  };


  render() {
    return (
      <div className="map-wrapper" style={{ height: '100%' }}>
        <MapWithAMarker
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyBkG04u0uupV9fgz0kQhfrQM8BUx1NWMf0&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          restaurantLocation={this.state.restaurantLocation}
          userLocation={this.state.userLocation}
        />
      </div>
    );
  }
}


export default (MapContainer);



export const MapWithAMarker = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={props.restaurantLocation}
    >
      <Marker icon={PinRestaurant} position={{ lat: props.restaurantLocation.lat, lng: props.restaurantLocation.lng }} />
      <Marker icon={PinUser} position={{ lat: props.userLocation.lat, lng: props.userLocation.lng }} />
    </GoogleMap>
  ))
);
