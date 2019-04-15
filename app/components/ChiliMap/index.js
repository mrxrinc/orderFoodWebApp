import React from 'react';
import { compose, withStateHandlers } from "recompose";
import { InfoWindow, withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';
import { restaurantSearch } from '../../api/application/restaurant';




export default class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showMap: false,
            restaurantListCount: 0,
            userLocation: {
                lat: this.props.mapCenter.lat,
                lng: this.props.mapCenter.lng
            }
        }
    }
    handleToggleOpen (id) {
        console.log('====================================');
        console.log(id);
        console.log('====================================');
    }
    componentDidMount() {
        // componentDidUpdate(prevProps, prevState) {
        //     if (prevState.userLocation.lat !== this.props.mapCenter.lat) {
        //         this.setState({
        //             userLocation:{ 
        //                 lat: this.props.mapCenter.lat,
        //                 lng: this.props.mapCenter.lng
        //             }
        //         })
        //         console.log('==========this.state.userLocation=================');
        //         console.log(this.state.userLocation);
        //         console.log('====================================');
        //     }
        // }
        restaurantSearch(
            this.props.cityId,
            `${this.state.userLocation.lat},${this.state.userLocation.lng}`,
        ).then(
            response => {
                let restaurantListCount = response.result.data;
                this.setState({ restaurantListCount: restaurantListCount.length });
            }
        );
    }
    render() {
        const Map = compose(
            withStateHandlers((props) => ({
                markerPosition: props.userLocation
            }), {
                    onMapClick: ({ isMarkerShown }) => (e) =>{
                        // console.log('==========e.latLng===================');
                        // console.log(e);
                        // console.log('====================================');
                        let latitude = e.latLng.lat()
                        let longtitude  = e.latLng.lng()
                        this.setState = {
                            userLocation: {
                                lat: latitude,
                                lng: longtitude
                            }
                        }
                        // console.log(latitude, longtitude)
                        return {
                            markerPosition: e.latLng,
                        }
                    }
                }),
            withScriptjs,
            withGoogleMap
        )
            (props =>
                <GoogleMap
                    defaultZoom={15}
                    defaultCenter={props.userLocation}
                    onClick={props.onMapClick}
                >
                    {props.isMarkerShown && 
                        <Marker position={props.markerPosition}

                        />
                    }

                    <span className="location__user-position-all-resaurant btn btn-big btn-success center absolute bottom20">
                        <span>مشاهده رستوران ها</span>
                        <span className="location__user-position-counter flex center rightM10">{this.state.restaurantListCount}</span>
                        {/* <span className="location__user-position-counter flex center rightM10">0</span> */}
                    </span>
                </GoogleMap>
            )
        return (
            <div style={{ height: '100%' }}>
                <Map
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    userLocation={
                        {
                            lat: this.props.mapCenter.lat,
                            lng: this.props.mapCenter.lng
                        }
                    }
                    isMarkerShown={true}
                />
            </div>
        )
    }
}
