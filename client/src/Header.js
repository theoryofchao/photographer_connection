import React, { Component } from 'react';
// import './App.css';
import Nav from './Nav.js'
import Search from './Search.js'

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class Header extends Component {
  render() {
    console.log(this.props);

    return (
        <div style={borderStyles}>
          Header
            <Nav userA={this.props.userA} onLogoutClick={this.props.onLogoutClick}/>
            <br />
            <Search sampleProfiles={this.props.sampleProfiles}/>
        </div>
    );
  }
}

export default Header;