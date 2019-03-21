import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRoute } from '../../store/actions/routeActions';
import Map from './Map';
import { Redirect } from 'react-router-dom';


class CreateRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            directions: {},
            distance: 0,
            title: '',
            jogging: 'jogging'
        };
        this.handleChange = this.handleChange.bind(this)
        this.handleRouteCreate = this.handleRouteCreate.bind(this)
        this.handleDirectionsUpdate = this.handleDirectionsUpdate.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    handleChange(e) {
        const id = e.target.id
        if (id === 'jogging' || id === 'biking') {
            this.setState({
                jogging: id
            })
        } else {
            this.setState({
                [id]: e.target.value
            })
        }
    }
    handleRouteCreate() {
        this.props.createRoute({directions: JSON.stringify(this.state.directions)})
        this.props.history.push('/')
    }
    handleDirectionsUpdate(directions, distance) {
        let newDist = this.state.distance + distance
        this.setState({
            directions,
            distance: newDist
        })
    }
    handleClear() {
        console.log('clear')
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
                <li><a href='#navBar' onClick={this.handleClear}>CLEAR</a></li>
                <li><a href='#navBar' onClick={this.handleChange}><i id='jogging' className={this.state.jogging === 'jogging' ? "material-icons green-text" : "material-icons red-text"}>directions_run</i></a></li>
                <li><a href='#navBar' onClick={this.handleChange}><i id='biking' className={this.state.jogging === 'biking' ? "material-icons green-text" : "material-icons red-text"}>directions_bike</i></a></li>
                <li><a href='#navBar'>Estimated Time: time</a></li>
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
