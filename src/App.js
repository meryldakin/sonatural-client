import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Navigation from './Navbar.js'

class App extends Component {
  render() {
    return (
      <div>
      <Navigation/>
      <Home/>
      </div>
    );
  }
}

export default App;
