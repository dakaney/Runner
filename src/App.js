import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/layout/Navbar';
import Dashboard from './components/dashboard/Dashboard';
import RouteDetails from './components/content/RouteDetails';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import CreateRoute from './components/content/CreateRoute';
import LandingPage from './components/dashboard/LandingPage';
import './App.css';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/route/:id' component={RouteDetails} />
            <Route path='/signin' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={CreateRoute} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
