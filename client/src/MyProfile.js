import React, { Component } from 'react';
import MyInfo from './MyInfo.js'
import MyGallery from './MyGallery.js'

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}

class MyProfile extends Component {
  render() {
    console.log('current user: ', this.props.currentUser);
    return (
        <div style={borderStyles}>
          <h2>User {this.props.currentUser.email} - Profile</h2>
          <MyInfo /><br />
          <MyGallery
            handlePhotoUpload={this.props.handlePhotoUpload}
            handleImageUpload={this.props.handleImageUpload}
            uploadedFileCloudinaryUrl={this.props.uploadedFileCloudinaryUrl}
          >
            {this.props.children}
          </MyGallery>
          <br />
        </div>
    );
  }
}

export default MyProfile;