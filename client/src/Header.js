import React, { Component } from 'react';
// import './App.css';
import Nav from './Nav.js';
import Search from './Search.js';


class Header extends Component {
  render() {
    return (
        <div>
          Header
          <Nav />
          <Search />
        </div>
    );
  }
}

export default Header;