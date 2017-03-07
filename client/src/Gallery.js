import React, { Component, Children, cloneElement } from 'react';
// import { Link } from 'react-router';
import UserAlbums from './UserAlbums.js';

var style = {
  padding: "10px"
}
//<Link to='user-profile/{that.props.userProfile.user_id}/album{/album.album_id}'>{album.name}</Link>

class Gallery extends Component {

  render() {
    let that = this;


    return (
      <div style={style}>
        <div style={{textAlign: "center"}}>
          {this.props.userAlbums.map((album, index) => (
            <UserAlbums key={index} user_id={that.props.userProfile.user_id} album={album} resetUserParam={this.props.resetUserParam}/>
          ))}
        </div><br />
        {Children.map(this.props.children, child =>
          cloneElement(child, {
            ...this.props,
            ...this.state,
          })
        )}
      </div>
    )
  }
};

export default Gallery;