import React, { Component } from 'react';
import ProfileSummary from './ProfileSummary';
import RouteList from '../content/RouteList';
import { connect } from 'react-redux';
 
class Dashboard extends Component {
    render() {
        const { routes } = this.props
        return (
            <div className='dashboard container'>
                <div className="row">
                    <div className="col s3">
                        <ProfileSummary />
                    </div>
                    <div className="col s9">
                        <RouteList routes={routes} />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        routes: state.route.routes
    }
}

export default connect(mapStateToProps)(Dashboard);
