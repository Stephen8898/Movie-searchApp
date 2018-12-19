import React, { Component } from 'react'
import { Navbar, Nav, NavItem}  from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class NewNavbar extends Component {
  render() {

    return (
      <Navbar>
           <Navbar.Header>
             <Navbar.Brand>
               WebDev Proj
             </Navbar.Brand>
           </Navbar.Header>
           <Navbar.Toggle/>
           <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} href="/Body" componentClass={Link} to="/Body">
              Search
            </NavItem>
            <NavItem eventKey={2} href="/About" componentClass={Link} to="/About">
              About
            </NavItem>
          </Nav>
         </Navbar.Collapse>
      </Navbar>
    )
  }
}
