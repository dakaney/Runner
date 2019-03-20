import React, { Component } from 'react';
import ProfileSummary from './ProfileSummary';
import RouteList from '../content/RouteList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
  
class Dashboard extends Component {
    render() {
        const { routes, auth, profile } = this.props
        if (!auth.uid) return <Redirect to='/signin' />
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s3">
                        <ProfileSummary profile={profile}/>
                    </div>
                    <div className="col s9">
                        <RouteList routes={routes} profile={profile}/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        routes: state.firestore.ordered.routes,
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'routes'}
    ])
)(Dashboard);
