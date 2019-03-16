import React from 'react';
import RouteSummary from './RouteSummary';

const RouteList = ({ routes }) => {
    return (
        <div className="routes-list section">
            { routes && routes.map(route => <RouteSummary route={route} key={route.id}/>)}
        </div>
    )
}

export default RouteList;
