import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import apiKey from '../../google_api_key';


class Map extends Component {
    state = {
        center: {lat: 37.774929, lng: -122.419418},
        zoom: 13,
        markers: [],
        pins: [],
        errorMsg: false
    };

    componentDidMount(){
        this.directionsDisplay = new this.props.google.maps.DirectionsRenderer();
        this.directionsService = new this.props.google.maps.DirectionsService();

        if (!this.props.route) {
            const map = new this.props.google.maps.Map(document.getElementById('map'), {
                zoom: this.state.zoom,
                center: this.state.center
            });
            this.props.google.maps.event.addListener(map, 'click',(event => {
                this.handleMapClick(event, map)
            }))
            this.directionsDisplay.setMap(map);
        } else {
            const divName = `map${this.props.route.id}`
            const minimap = new this.props.google.maps.Map(document.getElementById(divName));

            this.directionsDisplay.setMap(minimap);
            this.directionsDisplay.setDirections(JSON.parse(this.props.route.directions))
        }
    }

    handleMapClick(event, map) {
        let latitude = event.latLng.lat();
        let longitude = event.latLng.lng();
        let newCoords = {lat: latitude, lng: longitude}
        let newPin = new this.props.google.maps.Marker({
            position: newCoords,
            map:map,
            animation: this.props.google.maps.Animation.DROP,
        })
        this.setState({
            markers: this.state.markers.concat(newCoords),
            pins: this.state.pins.concat(newPin)
        })
        const service = new this.props.google.maps.DistanceMatrixService();

        if (this.state.markers.length > 1) {
            service.getDistanceMatrix({
                origins: [this.state.markers[this.state.markers.length - 2]],
                destinations: [this.state.markers[this.state.markers.length - 1]],
                travelMode: this.props.google.maps.TravelMode.WALKING,
                avoidHighways: false,
                avoidTolls: false
            }, (response, status) => {
                if (status === 'OK') {
                    this.calculateAndDisplayRoute(
                        this.directionsService, 
                        this.directionsDisplay,
                        response
                    );
                }
            })
        }
    }

    calculateAndDisplayRoute(directionsService, directionsDisplay, distance) {
        let waypts = [];
        let newDist = 0;
        for (let i = 1; i < this.state.markers.length - 1; i++) {
            waypts.push({location: this.state.markers[i]})
        }
        let setDirections = (directions, distance) => {
            this.props.directions(directions, distance, this.state.markers);
        }
        let reload = () => {
            this.state.pins[this.state.pins.length - 1].setMap(null);
            this.setState({
                markers: this.state.markers.slice(0, this.state.markers.length - 1),
                errorMsg: true
            })
            setTimeout(() => {
                this.setState({
                    errorMsg: false
                })
            }, 3000)
        }
        directionsService.route({
            origin: this.state.markers[0],
            destination: this.state.markers[this.state.markers.length - 1],
            waypoints: waypts,
            travelMode: 'WALKING'
            }, function(response, status) {
            if (status === 'OK') {
                directionsDisplay.setDirections(response);
                let dist = distance.rows[0].elements[0].distance.text.split(' ');
                if (dist[1] === 'm') newDist += Number(dist[0]) * .001;
                if (dist[1] === 'km') newDist += Number(dist[0]);
                setDirections(response, newDist);
            } else {
                reload();
            }
        })
    }
  render() {
      let divName = this.props.route ? `map${this.props.route.id}` : 'map';
      return (
        <div>
            <div>{this.state.errorMsg ? <p className="red-text center">Unable to route to location</p> : null}</div>
            <div id={divName} className="minimaps"/>
        </div>
      )
  }
}

export default GoogleApiWrapper({
    apiKey: (apiKey)
  })(Map);
