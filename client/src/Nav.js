import React, { Component } from 'react';
// import { Link } from 'react-router';
import {  NavItem, Nav } from 'react-bootstrap';
import {AppBar} from 'material-ui';

var style = {
  backgroundColor: "#afb5bf"
}

class Navigate extends Component {
  render() {
    if (this.props.userA) {
      return (
        <div >

          <Nav bsStyle="pills">
            <NavItem bsStyle="pills" href="/#/">Home</NavItem>
            <NavItem bsStyle="pills" href="/#/my-profile">My Profile</NavItem>
            <NavItem bsStyle="pills" href="/#/" onClick={(e)=>{this.props.onLogoutClick()}}>Logout</NavItem>
          </Nav>
        </div>
       )
    } else {
      return (
        <div>
          <AppBar
            iconElementLeft={null}
            style={style}
            title="Focus"
          />

           <Nav bsStyle="pills">
              <NavItem href="/#/">Home</NavItem>
              <NavItem href="/#/register">Register</NavItem>
              <NavItem href="/#/login">Login</NavItem>
           </Nav>
        </div>
    )}
  }
}

export default Navigate;