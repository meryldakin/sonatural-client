import React, { Component } from 'react'
import {Navbar, Nav, NavItem, NavDropdown, MenuItem }from 'react-bootstrap'


export default class Navigation extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
      <Navbar>
        <Navbar.Header>
        <Navbar.Brand>
          <a href="#">Southern Natural Sales</a>
        </Navbar.Brand>
        <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Navbar.Text>
          Signed in as: <Navbar.Link href="#">Mark Otto</Navbar.Link>
        </Navbar.Text>
        <Navbar.Text pullRight>
          Have a great day!
        </Navbar.Text>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        </Navbar.Collapse>
        </Navbar>
      </div>

    )
  }
}
