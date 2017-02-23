import React, { Component } from 'react';
// import './App.css';
import UserInfo from './UserInfo.js';
import Gallery from './Gallery.js';


class UserProfile extends Component {
  render() {
    return (
        <div>
          User Profile
          <UserInfo />
          <Gallery />
        </div>
    );
  }
}

export default UserProfile;