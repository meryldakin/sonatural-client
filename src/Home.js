import React, { Component } from 'react';
import DemoCounter from './DemoCounter.js'
import AddDemo from './AddDemo.js'
import {Jumbotron, Button, Grid, Row, Col} from 'react-bootstrap'
class Home extends Component {
  render() {
    return (
      <div>
      <Grid>
        <Row>
      <Jumbotron>
         <h1>Hello, world!</h1>
         <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
         <p><Button bsStyle="primary">Learn more</Button></p>
         <DemoCounter floated='right'/>
      </Jumbotron>
        </Row>
        <Row>
          <AddDemo/>
        </Row>

      </Grid>

      </div>
    );
  }
}



export default Home;
