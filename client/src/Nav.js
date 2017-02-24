import React, { Component } from 'react';
import { Link } from 'react-router';


class Nav extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Nav
           <Link to="/logout">Logout</Link>
           <Link to="/login">Login</Link>
           <Link to="/register">Register</Link>
          {this.props.children}
        </div>

    );
  }
}

export default Nav;