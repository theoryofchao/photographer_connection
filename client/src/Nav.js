import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Nav
          <br />
          <Link to="/">Home</Link><br />
          <Link to="/logout">Logout</Link><br />
          <Link to="/login">Login</Link><br />
          <Link to="/register">Register</Link>
          {this.props.children}
        </div>
    );
  }
}

export default Nav;