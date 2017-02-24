import React, { Component } from 'react';
import UserInfo from './UserInfo.js'
import Gallery from './Gallery.js'

class UserProfile extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          User Profile
          <UserInfo /><br />
          <Gallery /><br />
        </div>
    );
  }
}

export default UserProfile;