import React, { Component } from 'react';
// import './App.css';

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class UserInfo extends Component {
  render() {
    return (
        <div style={borderStyles}>
          User Info
        <h2>User {this.props.userProfile.email} - Profile</h2>
        </div>
    );
  }
}

export default UserInfo;