import React from 'react';
import Map from './Map';
import moment from 'moment';

const RouteSummary = ({ route }) => {
    return (
        <div id="mapcontainer"  className="card z-depth-2 routes-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">{route.title}</span>
                    <Map route={route}/>
                    <p>Posted by {route.authorFirstName + ' ' + route.authorLastName}</p>
                    <p className="grey-text">{moment(route.createdAt.toDate()).calendar()}</p>
                </div>
            </div>
    )
}

export default RouteSummary;