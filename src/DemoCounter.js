import React, { Component } from 'react';
import { Card, List } from 'semantic-ui-react'

class DemoCounter extends Component {


  render(){
    return (
      <div>
        <Card>
          <Card.Content>
            <Card.Header>
              Demos Completed
            </Card.Header>
            <Card.Description>
              <List.Item>
                <List.Content>Nordic Naturals: 1/3</List.Content>
              </List.Item>
              <List.Item>
                Bluebonnet: 2/4
              </List.Item>
              <List.Item>
                Aloe Life: 4/4
              </List.Item>
              <List.Item>
                {"Michael\'s 2\/3"}
              </List.Item>

            </Card.Description>
          </Card.Content>
        </Card>
      </div>
    )
  }
}
export default DemoCounter
