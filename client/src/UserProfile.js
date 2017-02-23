import React, { Component } from 'react';
import { Link } from 'react-router';

class UserProfile extends Component {
  render() {
    return (
        <div style={{border: "solid 1px black", padding: "10px"}}>
          User Profile
          <ul>
            <li><Link to="/user-info">User Information</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
          </ul>
          {this.props.children}
        </div>
    );
  }
}

export default UserProfile;