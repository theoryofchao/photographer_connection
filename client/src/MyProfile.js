import React, { Component } from 'react';
import MyInfo from './MyInfo.js'
import MyGallery from './MyGallery.js'

class MyProfile extends Component {
  render() {
    //console.log(this.props);

    return (
        <div>
          <MyInfo
            handleProfileImageUpload={this.props.handleProfileImageUpload}
            handleImageUpload={this.props.handleImageUpload}
            uploadedFileCloudinaryUrl={this.props.uploadedFileCloudinaryUrl}
            myInfo={this.props.myInfo}
            currentUser={this.props.currentUser}
            myProfile={this.props.myProfile}
            handleInfoChange={this.props.handleInfoChange}
            onInfoSubmit={this.props.onInfoSubmit}
          />

          

          <br />
          <MyGallery
            handlePhotoUpload={this.props.handlePhotoUpload}
            handleImageUpload={this.props.handleImageUpload}
            uploadedFileCloudinaryUrl={this.props.uploadedFileCloudinaryUrl}
            createMyAlbum={this.props.createMyAlbum}
            myAlbums={this.props.myAlbums}
          >
            {this.props.children}
          </MyGallery>
        </div>
    );
  }
}

export default MyProfile;