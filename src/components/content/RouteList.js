import React from 'react';
import RouteSummary from './RouteSummary';
import { Link } from 'react-router-dom';

const RouteList = ({ routes }) => {
    return (
        <div className="routes-list section">
            { routes && routes.map(route => 
            <Link to={`/route/${route.id}`}><RouteSummary route={route} key={route.id}/></Link>)}
        </div>
    )
}

export default RouteList;
