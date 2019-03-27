import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import ProfileSummary from './ProfileSummary';
import RouteList from '../content/RouteList';
import RecentActivity from './RecentActivity';

class Dashboard extends Component {
        state = {
            routes: [],
            limit: 5,
            sortBy: 'createdAt'
        }
    handleChangeLimit(e) {
        this.setState({
            limit: e.target.id
        })
    }
    handleChangeOrder(e) {
        this.setState({
            sortBy: e.target.id
        })
    }
    structureRoutes(routes) {
        let sortedRoutes;
        let { sortBy } = this.state
        if (sortBy === 'distance') {
            sortedRoutes = routes.sort((a,b) => b.distance - a.distance)
        } else {
            sortedRoutes = routes.sort((a,b) => b.createdAt.seconds - a.createdAt.seconds)
        } 
        if (sortBy === 'jogging') {
            sortedRoutes = sortedRoutes.filter(route => route.jogging === 'Jogging')
        } else if (sortBy === 'biking') {
            sortedRoutes = sortedRoutes.filter(route => route.jogging === 'Biking')
        }
        return sortedRoutes.slice(0,this.state.limit);
    }
    render() {
        const { routes, auth, profile } = this.props
        let render = [];
        if (!auth.uid) return <Redirect to='/signin' />
        if (routes) render = this.structureRoutes(routes.slice())
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s3 m3">
                        <ProfileSummary profile={profile}/>
                        <RecentActivity limit={this.handleChangeLimit.bind(this)} order={this.handleChangeOrder.bind(this)}/>
                    </div>
                    <div className="col s12 m6">
                        <RouteList routes={render} profile={profile}/>
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
        { collection: 'routes', orderBy: ['createdAt', 'desc']}
    ])
)(Dashboard);
