import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoute } from '../../store/actions/routeActions';
import Map from './Map';
import { Redirect } from 'react-router-dom';
import moment from 'moment';


class CreateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directions: {},
            distance: 0,
            title: 'No Title',
            jogging: 'Jogging',
            time: '00:00:00',
            markers: []
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleRouteCreate = this.handleRouteCreate.bind(this)
        this.handleDirectionsUpdate = this.handleDirectionsUpdate.bind(this)
    }
    handleChange(e) {
        const id = e.target.id
        if (id === 'Jogging' || id === 'Biking') {
            let pace = id === 'Jogging' ? 5 : 2
            let time = moment.utc(pace * this.state.distance * 60000).format('HH:mm:ss');
            this.setState({
                jogging: id,
                time: time
            })
        } else {
            this.setState({
                [id]: e.target.value
            })
        }
    }
    
    handleRouteCreate() {
        if (this.state.markers.length >= 2) {
            this.props.createRoute({ ...this.state, directions: JSON.stringify(this.state.directions)})
            this.props.history.push('/dashboard')
        }
    }

    handleDirectionsUpdate(directions = this.state.directions, distance = this.state.distance, markers) {
        let newDist = this.state.distance + distance
        let pace = this.state.jogging === 'Jogging' ? 5 : 2
        let time = moment.utc(pace * newDist * 60000).format('HH:mm:ss');
        this.setState({
            directions,
            distance: newDist,
            time,
            markers
        })
    }

  render() {
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/signin' />
      return (
        <div>
            <h4 className="center">Create Your Route</h4>
            <div>
            <div className="container" id='titleInput'>
            <div className="input-field">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" onChange={this.handleChange}/>
            </div>
        </div>
        <nav className="container nav-wrapper grey darken-2">
            <ul className="right">
                <li><a href='#navBar' onClick={this.handleChange}><i id='Jogging' className={this.state.jogging === 'Jogging' ? "material-icons green-text" : "material-icons red-text"}>directions_run</i></a></li>
                <li><a href='#navBar' onClick={this.handleChange}><i id='Biking' className={this.state.jogging === 'Biking' ? "material-icons green-text" : "material-icons red-text"}>directions_bike</i></a></li>
                <li><a href='#navBar'>Estimated Time: {this.state.time}</a></li>
                <li><a href='#navBar'>Route Distance: {this.state.distance.toFixed(2)} km</a></li>
                <li><a href='#navBar'><button onClick={this.handleRouteCreate}className='btn waves-effect waves-light blue lighten-1'>Create</button></a></li>
            </ul>
        </nav>
        </div>
            <Map directions={this.handleDirectionsUpdate}/>
        </div>
      )
  }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createRoute: (route) => dispatch(createRoute(route))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRoute);
