import React from 'react';
import Map from './Map';

const RouteSummary = (props) => {
    return (
        <div id="mapcontainer"  className="card z-depth-2 routes-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title">First</span>
                    <Map route={props.route}/>
                    <p>Posted by Wayman</p>
                    <p className="grey-text">Today</p>
                </div>
            </div>
    )
}

export default RouteSummary;