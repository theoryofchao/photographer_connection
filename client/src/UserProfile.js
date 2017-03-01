import React, { Component } from 'react';
import UserInfo from './UserInfo.js'
import Gallery from './Gallery.js'

var borderStyles = {
  border: "solid 1px black",
  padding: "10px"
}



class UserProfile extends Component {

  componentWillMount() {
    console.log('-------------------------');
    console.log(this.props.params.id);
    console.log('-------------------------');
    this.props.getUserProfile(this.props.params.id);
  }

  render() {

    return (
        <div style={borderStyles}>
          User Profile
          <UserInfo userProfile={this.props.userProfile}/><br />
          <Gallery children={this.props.children.props.children} getUserPhotos={this.props.getUserPhotos} photos={this.props.photos}/>
          <br />
        </div>
    );
  }
}

export default UserProfile;