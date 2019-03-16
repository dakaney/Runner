import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux';
import apiKey from '../../google_api_key';
import CreateRouteNav from './CreateRouteNav';
import { createRoute } from '../../store/actions/routeActions';


class CreateRoute extends Component {
    state = {
        center: {lat: 37.774929, lng: -122.419418},
        zoom: 13,
        markers: [],
        directions: {}
    };

    componentDidMount(){
        this.directionsService = new this.props.google.maps.DirectionsService();
        this.directionsDisplay = new this.props.google.maps.DirectionsRenderer();

        const map = new this.props.google.maps.Map(document.getElementById('map'), {
            zoom: this.state.zoom,
            center: this.state.center
          });
        this.props.google.maps.event.addListener(map, 'click',(event => {
            this.handleMapClick(event, map)
        }) )
        this.directionsDisplay.setMap(map);
    }

    handleRouteCreate() {
        this.setState({
            directions: this.directionsDisplay.directions
        })
        this.props.createRoute(this.state.directions)
    }
    

    handleMapClick(event, map) {
        let latitude = event.latLng.lat();
        let longitude = event.latLng.lng();
        let newCoords = {lat: latitude, lng: longitude}
        new this.props.google.maps.Marker({
            position: newCoords,
            map:map,
            animation: this.props.google.maps.Animation.DROP,
        })
        this.setState({
            markers: this.state.markers.concat(newCoords)
        })

        if (this.state.markers.length > 1) {
            this.calculateAndDisplayRoute(
                this.directionsService, 
                this.directionsDisplay
            );
        }
    }
    calculateAndDisplayRoute(directionsService, directionsDisplay) {
        let waypts = [];
        for (let i = 1; i < this.state.markers.length - 1; i++) {
            waypts.push({location: this.state.markers[i]})
        }
        directionsService.route({
          origin: this.state.markers[0],
          destination: this.state.markers[this.state.markers.length - 1],
          waypoints: waypts,
          travelMode: 'WALKING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
    }
  render() {
      return (
        <div>
            <h4 className="center">Create Your Route</h4>
            <CreateRouteNav click={this.handleRouteCreate.bind(this)}/>
            <div id="map">
            </div>
        </div>
      )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createRoute: (route) => dispatch(createRoute(route))
    }
}
const WrapperContainer = GoogleApiWrapper({
    apiKey: (apiKey)
  })(CreateRoute);
export default connect(null, mapDispatchToProps)(WrapperContainer);
