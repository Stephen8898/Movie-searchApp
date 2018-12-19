import React, { Component } from 'react'
import { Navbar, Nav, NavItem}  from 'react-bootstrap'

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
          <Nav>
            <NavItem >
            </NavItem>
         </Nav>
         </Navbar.Collapse>
      </Navbar>
    )
  }
}
