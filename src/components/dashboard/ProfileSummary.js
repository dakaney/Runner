import React from 'react';

const ProfileSummary = ({profile}) => {
    return (
        <div className="section hide-on-small-only">
            <div className="card z-depth-1 profile-summary">
                <div className="card-content grey-text text-darken-3">
                        <div className='center circle z-depth-2 blue lighten-3'>{profile.firstName + ' ' + profile.lastName}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileSummary;
