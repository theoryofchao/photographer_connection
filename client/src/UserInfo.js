import React, { Component } from 'react';
// import './App.css';

var profile = {
  display: "inline-block",
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center center",
  backgroundSize: "cover"

}

class UserInfo extends Component {
  render() {
    return (
        <div>
          <img style={profile} src="https://img.clipartfest.com/ae3134c8983b10e4b65d9777294cec41_profile-icon-clip-art-profile-icon-clipart_300-300.png" role="presentation" />
          <h4>handle</h4>
          <h4>firstName lastName</h4>
          <h5>location</h5>
          <h5>YOE</h5>
          <p>description</p>
          <h5>Contact: {this.props.userProfile.email}</h5>
          <br />
        </div>
    );
  }
}

export default UserInfo;