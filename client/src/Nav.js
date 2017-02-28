import React, { Component } from 'react';
// import { Link } from 'react-router';
import {  NavItem, Nav } from 'react-bootstrap';

var tagline = {
  color: "white",
  textAlign: "left",
  paddingLeft: "970px",
  backgroundColor: "black",
  background: "transparent"
}

var styles = {
  backgroundImage: "url(http://www.newhdwallpapers.in/wp-content/uploads/2013/09/Holidays-Wide-Photography.jpg)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  color: "white",
  textDecoration: "none",
  lineHeight: "3em",
  fontSize: "1.5em",
  textAlign: "right",
  height: "800px",
  opacity: "0.7"
}

class Navigate extends Component {
  render() {
    if (this.props.userA) {
      return (
        <div style={styles}>
          <Nav bsStyle="pills">
            <NavItem bsStyle="pills" href="/#/">Home</NavItem>
            <NavItem bsStyle="pills" href="/#/my-profile">My Profile</NavItem>
            <NavItem bsStyle="pills" href="/#/" onClick={(e)=>{this.props.onLogoutClick()}}>Logout</NavItem>
              <div style={tagline}>
                <h3>Find a local photographer</h3>
              </div>
          </Nav>
        </div>
       )
    } else {
      return (
        <div style={styles}>
           <Nav bsStyle="pills">
              <NavItem href="/#/">Home</NavItem>
              <NavItem href="/#/register">Register</NavItem>
              <NavItem href="/#/login">Login</NavItem>
                <div style={tagline}>
                  <h3>Find a local photographer</h3>
                </div>
           </Nav>
        </div>
    )}
  }
}

export default Navigate;