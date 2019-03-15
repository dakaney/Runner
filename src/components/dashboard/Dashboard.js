import React, { Component } from 'react';
import ProfileSummary from './ProfileSummary';
import RouteList from '../content/RouteList';

class Dashboard extends Component {
    render() {
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s3">
                        <ProfileSummary />
                    </div>
                    <div className="col s9">
                        <RouteList />
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;
