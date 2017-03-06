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

class UserAlbums extends Component {

  render() {
    let url = `user-profile/${this.props.user_id}/album/${this.props.album.album_id}`;
    return (
      <Link to={url}>
        <FlatButton onClick={this.props.resetUserParam} label={this.props.album.name}/>
      </Link>
    );
  }
}

export default UserAlbums;