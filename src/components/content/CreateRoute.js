import React, { Component } from 'react';
import {GoogleApiWrapper} from 'google-maps-react';
import { connect } from 'react-redux';
import apiKey from '../../google_api_key';
import CreateRouteNav from './CreateRouteNav';
import { createRoute } from '../../store/actions/routeActions';
import Map from './Map';


class CreateRoute extends Component {
    state = {
        directions: {}
    };

    handleRouteCreate() {
        this.props.createRoute({directions: JSON.stringify(this.state.directions)})
    }
    handleDirectionsUpdate(directions) {
        this.setState({
            directions
        })
    }

  render() {
      return (
        <div>
            <h4 className="center">Create Your Route</h4>
            <CreateRouteNav click={this.handleRouteCreate.bind(this)}/>
            <Map directions={this.handleDirectionsUpdate.bind(this)}/>
        </div>
      )
  }
}
const mapDispatchToProps = (dispatch) => {
    return {
        createRoute: (route) => dispatch(createRoute(route))
    }
}
const WrapperContainer = GoogleApiWrapper({
    apiKey: (apiKey)
  })(CreateRoute);
export default connect(null, mapDispatchToProps)(WrapperContainer);
