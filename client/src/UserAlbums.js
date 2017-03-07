import React, { Component } from 'react';
import { Link } from 'react-router';
import FlatButton from 'material-ui/FlatButton';

// var style = {
//   display: "inline-block",
//   margin: "0 5px",
//   border: "solid 1px black",
//   padding: "5px",
//   textDecoration: "none",
//   color: "black"
// }

var albumButton = {
  color: "#7EBF2D",
  margin: "0 5px"
}

class UserAlbums extends Component {

  render() {
    let url = `user-profile/${this.props.user_id}/album/${this.props.album.album_id}`;
    return (
      <Link to={url}>
        <FlatButton backgroundColor="#0D141A" style={albumButton} hoverColor="#354e63" rippleColor="#7EBF2D" onClick={this.props.resetUserParam} label={this.props.album.name}/>
      </Link>
    );
  }
}

export default UserAlbums;