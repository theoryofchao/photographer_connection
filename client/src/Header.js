import React, { Component } from 'react';
import Navigate from './Nav.js'
import Search from './Search.js'

var borderStyles = {
  borderBottom: "solid 2px black",
}

class Header extends Component {
  render() {
    return (
        <div style={borderStyles}>
            <Navigate userA={this.props.userA} onLogoutClick={this.props.onLogoutClick}/>
            <br />
            <Search sampleProfiles={this.props.sampleProfiles} searchResults={this.props.searchResults} />
        </div>
    );
  }
}

export default Header;