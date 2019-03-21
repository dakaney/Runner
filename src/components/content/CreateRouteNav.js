import React from 'react';

const CreateRouteNav = ({click, distance, change, clear}) => {
    return (
        <div>
            <div className="container">
            <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={change}/>
                </div>
        </div>
        <nav className="container nav-wrapper grey darken-2">
            <ul className="right">
                <li><a href='#navBar' onClick={clear}>CLEAR</a></li>
                <li><a href='#navBar'><i className="material-icons green-text">directions_run</i></a></li>
                <li><a href='#navBar'><i className="material-icons red-text">directions_bike</i></a></li>
                <li><a href='#navBar'>Estimated Time: time</a></li>
                <li><a href='#navBar'>Route Distance: {distance.toFixed(2)} km</a></li>
                <li><a href='#navBar'><button onClick={click}className='btn waves-effect waves-light blue lighten-1'>Create</button></a></li>
            </ul>
        </nav>
        </div>
    )
}

export default CreateRouteNav;
