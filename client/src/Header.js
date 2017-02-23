import React, { Component } from 'react';
// import './App.css';
import { Link } from 'react-router';


class Header extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          Header
          <ul>
            <li><Link to="/nav">Navigation</Link></li>
            <li><Link to="/search">Search</Link></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
}

export default Header;