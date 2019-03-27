import React from 'react';

const RecentActivity = ({ limit, order}) => {
    return (
        <div className="section hide-on-small-only">
            <div className="card z-depth-1 recent-activity">
                <div className="card-content grey-text text-darken-3">
                <div className='center circle z-depth-2 blue lighten-3'>Filters</div>
                        <p className='center'>Number of Routes Displayed</p>
                        <div className='center'>
                            <button onClick={limit} id='5'>5</button>
                            <button onClick={limit} id='10'>10</button>
                            <button onClick={limit} id='15'>15</button>
                        </div>
                        <p className='center'>Filter By</p>
                        <ul className='center'>
                            <li><button className='filter-button' onClick={order} id='createdAt'>Most Recent</button></li>
                            <li><button className='filter-button' onClick={order} id='distance'>Longest Route</button></li>
                            <li><button className='filter-button' onClick={order} id='biking'>Only Biking</button></li>
                            <li><button className='filter-button' onClick={order} id='jogging'>Only Jogging</button></li>
                        </ul>
                        
                </div>
            </div>
        </div>
    )
}

export default RecentActivity;
