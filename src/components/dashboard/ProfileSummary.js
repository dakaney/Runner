import React from 'react';

const ProfileSummary = ({profile}) => {
    return (
        <div className="section hide-on-small-only">
            <div className="card z-depth-1 profile-summary">
                <div className="card-content grey-text text-darken-3">
                        <div className="center"><div className='circle z-depth-2 blue lighten-1'>{profile.initials}</div></div>
                        <span className="card-title center">{profile.firstName + ' ' + profile.lastName}</span>
                </div>
            </div>
        </div>
    )
}

export default ProfileSummary;
