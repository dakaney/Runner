import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import apiKey from '../../google_api_key';

class RouteSummary extends Component {
    componentDidMount() {
        this.directionsService = new this.props.google.maps.DirectionsService();
        this.directionsDisplay = new this.props.google.maps.DirectionsRenderer();

        const divName = `minimap${this.props.route.id}`
        const minimap = new this.props.google.maps.Map(document.getElementById(divName), {
            zoom: 12,
            center: {"lat":37.787182886918885,"lng":-122.4183156194818}
            });
        this.props.google.maps.event.addListener(minimap, 'click',(event => {
            this.handleClick(event, minimap)
        }) )
        this.directionsDisplay.setMap(minimap);
        this.directionsDisplay.setDirections(this.props.route)
    }
    render() {
        const divName = `minimap${this.props.route.id}`
        return(
            <div className="card z-depth-2 routes-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">First</span>
                    <div id={divName} className="minimaps">
                    </div>
                    <p>Posted by Wayman</p>
                    <p className="grey-text">Today</p>
                </div>
            </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (apiKey)
  })(RouteSummary)
