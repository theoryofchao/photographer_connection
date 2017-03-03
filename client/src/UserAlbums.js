import React, { Component } from 'react';
import { Link } from 'react-router';

class UserAlbums extends Component {



    render() {
    let url = `user-profile/${this.props.user_id}/album/${this.props.album.album_id}`;    
    return (
        <div>
          <Link to={url}>{this.props.album.name}</Link>
        </div>
    );
  }
}

export default UserAlbums;

