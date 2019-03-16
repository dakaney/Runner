import React from 'react';

const CreateRouteNav = ({click}) => {
    return (
        <nav className="container nav-wrapper grey darken-2">
            <ul className="right">
                <li><button onClick={click}className='btn waves-effect waves-light blue lighten-1'>Create</button></li>
            </ul>
        </nav>
    )
}

export default CreateRouteNav;
