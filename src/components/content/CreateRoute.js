import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateRouteNav from './CreateRouteNav';
import { createRoute } from '../../store/actions/routeActions';
import Map from './Map';
import { Redirect } from 'react-router-dom';


class CreateRoute extends Component {
    state = {
        directions: {}
    };

    handleRouteCreate() {
        this.props.createRoute({directions: JSON.stringify(this.state.directions)})
        this.props.history.push('/')
    }
    handleDirectionsUpdate(directions) {
        this.setState({
            directions
        })
    }

  render() {
      const { auth } = this.props;
      if (!auth.uid) return <Redirect to='/signin' />
      return (
        <div>
            <h4 className="center">Create Your Route</h4>
            <CreateRouteNav click={this.handleRouteCreate.bind(this)}/>
            <Map directions={this.handleDirectionsUpdate.bind(this)}/>
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
