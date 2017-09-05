import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Home.js";
import Navigation from "./Navbar.js";
import Login from "./login/";
import AddDemo from "./AddDemo.js";
import DemoCounter from "./DemoCounter.js";
import { Grid, Row, Col } from "react-bootstrap";
import { withRouter } from "react-router";

import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Grid>
          <Row>
            <Col className="col-md-8">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/add-demo" component={AddDemo} />
              </Switch>
            </Col>
            <Col className="col-md-4">
              <DemoCounter name={["hello", "world"]} />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    demos: state.demos,
    loading: state.loading
  };
};

export default withRouter(connect(mapStateToProps, actions)(App));
