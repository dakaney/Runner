import React from 'react';
import RouteSummary from './RouteSummary';
import { Link } from 'react-router-dom';

const RouteList = ({ routes }) => {
    return (
        <div className="routes-list section container">
            { routes && routes.map(route =>
            <Link to={`/route/${route.id}`} key={route.id}><RouteSummary route={route}/></Link>)}
        </div>
    )
}

export default RouteList;
