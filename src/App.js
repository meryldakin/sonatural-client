import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Navigation from './Navbar.js'
import Login from './login/'
import { withRouter } from 'react-router'


class App extends Component {
  render() {
    return (
      <div>
      <Navigation/>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
      </div>
    );
  }
}

export default withRouter(App);
