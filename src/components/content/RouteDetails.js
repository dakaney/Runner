import React from 'react'
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Map from './Map';
import { Redirect } from 'react-router-dom';
import moment from 'moment';

const RouteDetail = ({route, auth, match}) => {
    const id = match.params.id;
    if (!auth.uid) return <Redirect to='/signin' />
  return (
    <div className="container section">
        <div className="card z-depth-0">
            <div className="card-content">
                <div className="card-title">{route.title}</div>
                <div className='dashboard container'>
                <div className="row">
                    <div className="col s5 left">
                        <div>Travel Method:</div>
                        <div>Travel Time:</div>
                        <div>Travel Distance:</div>
                    </div>
                    <div className="col s3 right">
                        <div>{route.jogging}</div>
                        <div>{route.time}</div>
                        <div>{route.distance.toFixed(2)} km</div>
                    </div>
                </div>
            </div>
                <Map route={route}/>
            </div>
            <div className="card-action lighten-4 grey-text">
                <div>Posted by {route.authorFirstName + ' ' + route.authorLastName}</div>
                <div>{moment(route.createdAt.toDate()).calendar()}</div>
            </div>
        </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id;
    const routes = state.firestore.data.routes
    const route = routes ? routes[id] : null;
    return {
        auth: state.firebase.auth,
        route: route
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'routes'}
    ])
)(RouteDetail);
