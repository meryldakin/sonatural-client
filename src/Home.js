import React, { Component } from 'react';
import { Image, Container, Grid } from 'semantic-ui-react'
import DemoCounter from './DemoCounter.js'
class Home extends Component {
  render() {
    return (
      <div>
          <Grid container columns='equal'>
            <Grid.Row stretched >
              <Grid.Column>
                <Image src='https://ssl.c.photoshelter.com/img-get/I0000IjSIzvRNSJo/s/860/860/Bluebonnet-Field-at-Sunrise-near-Llano-Texas.jpg' fluid />
              </Grid.Column>
              <Grid.Column floated='right'>
                <DemoCounter floated='right'/>
              </Grid.Column>
            </Grid.Row>
          </Grid>
      </div>
    );
  }
}



export default Home;
