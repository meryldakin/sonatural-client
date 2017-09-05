import React, { Component } from "react";
import DemoCounter from "./DemoCounter.js";
import { Jumbotron, Button } from "react-bootstrap";
class Home extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1>SNS Demo Center</h1>
          <p>Add demos, check stats for the month, manage contractors.</p>
          <p>
            <Button
              bsStyle="primary"
              onClick={() => this.props.history.push("/add-demo")}
            >
              Add Demo
            </Button>
          </p>
        </Jumbotron>
      </div>
    );
  }
}

export default Home;
