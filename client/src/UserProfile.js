import React, { Component } from 'react';
import UserInfo from './UserInfo.js'
import Gallery from './Gallery.js'

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class UserProfile extends Component {
  render() {
    return (
        <div style={borderStyles}>
          User Profile
          <UserInfo /><br />
          <Gallery>
            {this.props.children}
          </Gallery>
          <br />
        </div>
    );
  }
}

export default UserProfile;