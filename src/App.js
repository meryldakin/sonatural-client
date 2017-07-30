import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home.js'
import Navigation from './Navbar.js'
import Login from './login/'

class App extends Component {
  render() {
    const href = window.location.pathname.slice(1)

    const Path = () => {
      switch(href) {
        case "Home":
          return <Home />
          break;
        case "login":
          return <Login />
          break;
        default:
          return <Home />
      }
    }
    return (
      <div>
      <Navigation/>
      {Path()}
      </div>
    );
  }
}

export default App;
