import React, { Component } from 'react';
import MyInfo from './MyInfo.js'
import MyGallery from './MyGallery.js'

var borderStyles = {
  border: "solid 1px black",
  padding: "10px",

}

class MyProfile extends Component {
  render() {
    return (
        <div style={borderStyles}>
          <h2>User {this.props.currentUser.email} - Profile</h2>
          <MyInfo 
            handleProfileImageUpload={this.props.handleProfileImageUpload}
            handleImageUpload={this.props.handleImageUpload}
            uploadedFileCloudinaryUrl={this.props.uploadedFileCloudinaryUrl}
          /><br />
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