import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper, Polyline } from 'google-maps-react';
import apiKey from '../../google_api_key';


class CreateRoute extends Component {
    state = {
        center: {lat: 37.7749, lng: -122.4194},
        zoom: 11,
        markers: []
    };
    
    handleClick(t, map, { latLng } ) {
        let lat = latLng.lat();
        let lng = latLng.lng();
        this.setState({
            markers: this.state.markers.concat({lat, lng})
        })
    }
  render() {
      return (
        <div id="map">
        <h4>Create Your Route</h4>
        <Map google={this.props.google} onClick={this.handleClick.bind(this)} zoom={14}>
 
        {this.state.markers.map(marker =>
            [<Marker position={{lat: marker.lat, lng: marker.lng}} />,
             <Polyline options={{
                path: this.state.markers,
                geodesic: true,
                strokeColor: '#ff2527',
                strokeOpacity: 0.75,
                strokeWeight: 2,
            }}/>
            ]
        )}
 
        <InfoWindow onClose={this.onInfoWindowClose}>
        </InfoWindow>
      </Map>
      </div>
      )
  }
}

export default GoogleApiWrapper({
    apiKey: (apiKey)
  })(CreateRoute)
