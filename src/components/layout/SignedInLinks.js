import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions';

const SignedInLinks = ({signOut, profile}) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Route</NavLink></li>
            <li><NavLink to='/signin' onClick={signOut}>Log Out</NavLink></li>
            <li><NavLink to='/dashboard' className='btn btn-floating blue lighten-1'>{profile.initials}</NavLink></li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks);
