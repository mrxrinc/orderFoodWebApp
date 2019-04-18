import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import { connect } from 'react-redux';
import { getNeighborhood } from '../../api/application/region';
import { addNeighborhood, addNeighborhoodProfile } from '../../actions/UserPosition';
import { restaurantSearch } from '../../api/application/restaurant';

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            map: null,
            restaurantListCount: 0,
            userLocation: this.props.mapCenter,
            neighborhood:null
        };
    }

    fetchMap = () =>{
        getNeighborhood(
            `${this.state.userLocation.lat},${this.state.userLocation.lng}`,
        ).then(
            response => {
                let neighborhood = response.result.neighbourhood;
                this.setState({ neighborhood: neighborhood },()=>{

                    
                    if(this.props.type === "profile"){
                        this.props.addNeighborhoodProfile({
                            neighborhoodProfile:this.state.neighborhood
                        })
                    }else{
                        this.props.addNeighborhood({
                            neighborhood:this.state.neighborhood
                        })
                    }

                });
            }
        );
    }

    mapLoaded = map => {
        if (map != null) {
            this.setState({
                map: map
            });
            restaurantSearch(
                `${this.state.userLocation.lat},${this.state.userLocation.lng}`,
            ).then(
                response => {
                    let restaurantListCount = response.result.data;
                    this.setState({ restaurantListCount: restaurantListCount.length });
                }
            );

            this.fetchMap();
        }
    };

    mapMovied = () => {
        let jsonStr = JSON.stringify(this.state.map.getCenter());
        this.setState({
            userLocation: JSON.parse(jsonStr)
        });
    };


    mapOnDrag = () => {
        restaurantSearch(
            `${this.state.userLocation.lat},${this.state.userLocation.lng}`,
        ).then(
            response => {
                let restaurantListCount = response.result.data;
                this.setState({ restaurantListCount: restaurantListCount.length });
            }
        );
        
        this.fetchMap();
    }

    render() {
        return (
            <div className="map-wrapper" style={{ height: '100%' }}>
                <MapWithAMarker
                    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `100%` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    mapLoaded={this.mapLoaded}
                    dragi={this.mapMovied}
                    mapOnDrag={this.mapOnDrag}
                    userLocation={this.state.userLocation}
                />
                <span className="location__user-position-all-resaurant btn btn-big btn-success center absolute bottom20">
                    <span>مشاهده رستوران ها</span>
                    <span className="location__user-position-counter flex center rightM10">{this.state.restaurantListCount}</span>
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    addNeighborhood: showStatus => {
        dispatch(addNeighborhood(showStatus));
    },
    addNeighborhoodProfile: showStatus => {
        dispatch(addNeighborhoodProfile(showStatus));
    },
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(MapContainer);



export const MapWithAMarker = withScriptjs(
    withGoogleMap(props => (
        <GoogleMap
            defaultZoom={15}
            defaultCenter={props.userLocation}
            onDrag={props.dragi}
            onDragEnd={props.mapOnDrag}
            ref={props.mapLoaded}
        >
            <Marker position={{ lat: props.userLocation.lat, lng: props.userLocation.lng }} />
        </GoogleMap>
    ))
);
