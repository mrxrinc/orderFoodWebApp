import React from 'react';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker
} from "react-google-maps";
import { connect } from 'react-redux';
import { getNeighborhood } from '../../api/application/region';
import { addNeighborhood } from '../../actions/UserPosition';
import { restaurantSearch } from '../../api/application/restaurant';
import {history} from '../../store';
const typeMap = {
    profile : 'neighborhoodProfile',
    home : 'neighborhood'
}
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
            neighborhood:null
        };
    }

    fetchMap = () =>{
        getNeighborhood(
            `${this.state.userLocation.lat},${this.state.userLocation.lng}`,
        ).then(
            response => {
                let neighborhood = response.result.neighbourhood;
                const typeMapItem = typeMap[this.props.type]
                let obj = {};
                this.setState({ neighborhood: neighborhood },()=>{
                    obj[typeMapItem] = this.state.neighborhood;
                    this.props.addNeighborhood(obj)
                });
            }
        );
    }

    mapLoaded = map => {
        let typeMapItem = typeMap[this.props.type];

        if (map != null) {
            this.setState({
                map: map
            });
            restaurantSearch(
                this.props[typeMapItem].cityId,`${this.state.userLocation.lat},${this.state.userLocation.lng}`,
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
        let typeMapItem = typeMap[this.props.type];

        restaurantSearch(
            this.props[typeMapItem].cityId,`${this.state.userLocation.lat},${this.state.userLocation.lng}`,
        ).then(
            response => {
                let restaurantListCount = response.result.data;
                this.setState({ restaurantListCount: restaurantListCount.length });
            }
        );
        
        this.fetchMap();
    }

    goToListPage = () => {
        let typeMapItem = typeMap[this.props.type];
        console.log('====================================');
        console.log(`/restaurants-list/${this.props[typeMapItem].cityId}/${this.state.userLocation.lat},${this.state.userLocation.lng}`);
        console.log('====================================');
        history.push(`/restaurants-list/${this.props[typeMapItem].cityId}/${this.state.userLocation.lat},${this.state.userLocation.lng}`)
    }

    componentDidMount(){
        let typeMapItem = typeMap[this.props.type];

        this.setState({
            userLocation:{
                lat: this.props[typeMapItem].mapCenter.lat,
                lng: this.props[typeMapItem].mapCenter.lon
            },
            
        })

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
                <span className="location__user-position-all-resaurant btn btn-big btn-success center absolute bottom20" onClick={this.goToListPage}>
                    <span>مشاهده رستوران ها</span>
                    <span className="location__user-position-counter flex center rightM10">{this.state.restaurantListCount}</span>
                </span>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    neighborhood: state.UserPosition.neighborhood,
    neighborhoodProfile: state.UserPosition.neighborhoodProfile,

});

const mapDispatchToProps = dispatch => ({
    addNeighborhood: showStatus => {
        dispatch(addNeighborhood(showStatus));
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
