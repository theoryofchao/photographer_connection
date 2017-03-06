import React, { Component } from 'react';
import Navigate from './Nav.js'
import Search from './Search.js'

class Header extends Component {
  render() {
    return (
        <div>
            <Navigate userA={this.props.userA} onLogoutClick={this.props.onLogoutClick}/>
            <br />
            <Search sampleProfiles={this.props.sampleProfiles} searchResults={this.props.searchResults} resetAlbumParam={this.props.resetAlbumParam}/>
        </div>
    );
  }
}

export default Header;