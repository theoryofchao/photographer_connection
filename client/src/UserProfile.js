import React, { Component } from 'react';
import UserInfo from './UserInfo.js'
import Gallery from './Gallery.js'

class UserProfile extends Component {

  render() {

    return (
        <div>
          <UserInfo alertOpen={this.props.alertOpen} handleAlertOpen={this.props.handleAlertOpen} handleAlertClose={this.props.handleAlertClose} menuItemValue={this.props.menuItemValue} menuItemChange={this.props.menuItemChange} userProfile={this.props.userProfile}/>
          <Gallery children={this.props.children.props.children} photos={this.props.photos} userAlbums={this.props.userAlbums} userProfile={this.props.userProfile} resetUserParam={this.props.resetUserParam}/>
        </div>
    );
  }
}

export default UserProfile;

// current url id:
// {this.props.userParam}