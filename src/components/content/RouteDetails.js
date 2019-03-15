import React from 'react'

const RouteDetail = (props) => {
    const id = props.match.params.id;
  return (
    <div className="container section">
        <div className="card z-depth-0">
            <div className="card-content">
                <div className="card-title">Route - {id}</div>
                <p>some description</p>
            </div>
            <div className="card-action lighten-4 grey-text">
                <div>Posted by Wayman</div>
                <div>Date</div>
            </div>
        </div>
    </div>
  )
}

export default RouteDetail;
