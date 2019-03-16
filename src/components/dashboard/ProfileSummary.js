import React from 'react';
import { NavLink } from 'react-router-dom';

const ProfileSummary = () => {
    return (
        <div className="section">
            <div className="card z-depth-1 profile-summary">
                <div className="card-content grey-text text-darken-3">
                        <div className="avatar center"><NavLink to='/' className='btn-large btn-floating blue lighten-1'>WN</NavLink></div>
                        <span className="card-title center">Wayman Ng</span>
                        <NavLink to='/' className="black-text">
                            <div className="row">
                                <div className="col s3 center">
                                    <p>Activities</p>
                                    <p>0</p>
                                </div>
                                <div className="col s3 offset-m1 center">
                                    <p>Running</p>
                                    <p>0</p>
                                </div>
                                <div className="col s3 offset-m1 center">
                                    <p>Biking</p>
                                    <p>0</p>
                                </div>
                            </div>
                        </NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProfileSummary;
