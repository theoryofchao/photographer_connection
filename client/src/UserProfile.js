import React, { Component } from 'react';
import UserInfo from './UserInfo.js'
import Gallery from './Gallery.js'

class UserProfile extends Component {

  render() {

    return (
        <div>
          <UserInfo userProfile={this.props.userProfile}/><br />
          <Gallery children={this.props.children.props.children} photos={this.props.photos}/>
          <br />
        </div>
    );
  }
}

export default UserProfile;

// current url id:
// {this.props.param}