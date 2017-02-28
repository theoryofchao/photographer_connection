import React, { Component } from 'react';
import { Link } from 'react-router';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Nav extends Component {
  render() {
      if (this.props.userA) {
        return (
          <div style={borderStyles}>
            Nav
            <br />
            <Link to="/">Home</Link><br />
            <button onClick={(e)=>{this.props.onLogoutClick()}}>Logout</button>
            <Link to="/logout">Logout</Link><br />
            <Link to="/my-profile">My Profile</Link><br />
            {this.props.children}
          </div>
          )
      } else {
    return (
        <div style={borderStyles}>
          Nav
          <br />
          <Link to="/">Home</Link><br />
          <Link to="/register">Register</Link> <br />
          <Link to="/login">Login</Link><br />
          {this.props.children}
        </div>
    )}
  }
}

export default Nav;