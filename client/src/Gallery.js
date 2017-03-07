import React, { Component, Children, cloneElement } from 'react';
// import { Link } from 'react-router';
import UserAlbums from './UserAlbums.js';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

var style = {
  padding: "75px 10px 10px 10px",
  background: 'linear-gradient( 180deg, #1a2733, #668fb2 )',
}

var albumButton = {
  color: "#7EBF2D",
  margin: "0 5px"
}

//<Link to='user-profile/{that.props.userProfile.user_id}/album{/album.album_id}'>{album.name}</Link>

class Gallery extends Component {

  render() {
    let that = this;
    let url = `user-profile/${this.props.userProfile.user_id}`;

    return (
      <div style={style}>
        <div style={{textAlign: "center"}}>
          <Link to={url}>
            <FlatButton backgroundColor="#0D141A" style={albumButton} hoverColor="#354e63" rippleColor="#7EBF2D" onClick={this.props.resetUserParam} label="All Photos"/>
          </Link>
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