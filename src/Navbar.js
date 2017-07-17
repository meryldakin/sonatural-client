import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Segment inverted>
        <Menu inverted secondary>
          <Menu.Item>
            <h1>Southern Natural Sales | </h1>
            <p>  Current Username</p>
          </Menu.Item>
          <Menu.Menu position='right'>
          <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='Calendar' active={activeItem === 'calendar'} onClick={this.handleItemClick} />
          <Menu.Item name='Account' active={activeItem === 'account'} onClick={this.handleItemClick} />
          <Menu.Item name='Sign Out' active={activeItem === 'sign out'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </Segment>
    )
  }
}
