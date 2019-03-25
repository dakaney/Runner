import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileSummary = ({profile}) => {
    return (
        <div className="section hide-on-small-only">
            <div className="card z-depth-1 profile-summary">
                <div className="card-content grey-text text-darken-3">
                        <div className="avatar center"><NavLink to='/dashboard' className='btn-large btn-floating blue lighten-1'>{profile.initials}</NavLink></div>
                        <span className="card-title center">{profile.firstName + ' ' + profile.lastName}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileSummary;
